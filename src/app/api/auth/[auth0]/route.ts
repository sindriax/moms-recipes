import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ auth0: string }> }
) {
  const { auth0: route } = await params;
  const { searchParams } = new URL(req.url);

  try {
    if (route === "login") {
      const domain = process.env.AUTH0_DOMAIN!;
      const clientId = process.env.AUTH0_CLIENT_ID!;
      const baseUrl = process.env.AUTH0_BASE_URL!;
      const returnTo = searchParams.get("returnTo") || "/admin";

      const loginUrl = new URL(`https://${domain}/authorize`);
      loginUrl.searchParams.set("response_type", "code");
      loginUrl.searchParams.set("client_id", clientId);
      loginUrl.searchParams.set("redirect_uri", `${baseUrl}/api/auth/callback`);
      loginUrl.searchParams.set("scope", "openid profile email");
      loginUrl.searchParams.set("state", returnTo);

      return NextResponse.redirect(loginUrl.toString());
    }

    if (route === "logout") {
      const domain = process.env.AUTH0_DOMAIN!;
      const baseUrl = process.env.AUTH0_BASE_URL!;

      const logoutUrl = new URL(`https://${domain}/v2/logout`);
      logoutUrl.searchParams.set("client_id", process.env.AUTH0_CLIENT_ID!);
      logoutUrl.searchParams.set("returnTo", baseUrl);

      const response = NextResponse.redirect(logoutUrl.toString());
      response.cookies.delete("__session");
      return response;
    }

    if (route === "callback") {
      const code = searchParams.get("code");
      const state = searchParams.get("state") || "/admin";
      const error = searchParams.get("error");

      if (error) {
        return NextResponse.redirect(
          `${process.env.AUTH0_BASE_URL}/admin/login?error=${error}`
        );
      }

      if (!code) {
        return NextResponse.json(
          { error: "No authorization code" },
          { status: 400 }
        );
      }

      try {
        const tokenResponse = await fetch(
          `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              grant_type: "authorization_code",
              client_id: process.env.AUTH0_CLIENT_ID,
              client_secret: process.env.AUTH0_CLIENT_SECRET,
              code: code,
              redirect_uri: `${process.env.AUTH0_BASE_URL}/api/auth/callback`,
            }),
          }
        );

        if (!tokenResponse.ok) {
          throw new Error("Failed to exchange code for tokens");
        }

        const tokens = await tokenResponse.json();

        const userResponse = await fetch(
          `https://${process.env.AUTH0_DOMAIN}/userinfo`,
          {
            headers: {
              Authorization: `Bearer ${tokens.access_token}`,
            },
          }
        );

        if (!userResponse.ok) {
          throw new Error("Failed to get user info");
        }

        const user = await userResponse.json();

        const response = NextResponse.redirect(
          `${process.env.AUTH0_BASE_URL}${state}`
        );

        response.cookies.set("__session", JSON.stringify({ user, tokens }), {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          maxAge: 60 * 60 * 24 * 7, // 7 days
        });

        return response;
      } catch {
        return NextResponse.redirect(
          `${process.env.AUTH0_BASE_URL}/admin/login?error=callback_error`
        );
      }
    }

    return NextResponse.json({ error: "Route not found" }, { status: 404 });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
