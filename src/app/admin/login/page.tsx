"use client";

import { useUser } from "@auth0/nextjs-auth0";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function AdminLogin() {
  const { user, isLoading } = useUser();
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  useEffect(() => {
    if (!isLoading && user) {
      router.push("/admin/new");
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>Loading...</div>
      </div>
    );
  }

  if (user) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Admin Login
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sign in to access the admin panel
          </p>
          {error && (
            <div className="mt-4 p-4 border border-red-300 rounded-md bg-red-50">
              <p className="text-sm text-red-800">
                Authentication error: {error}. Please try again.
              </p>
            </div>
          )}
        </div>
        <div>
          <a
            href="/api/auth/login?returnTo=/admin/new"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in with Auth0
          </a>
        </div>
      </div>
    </div>
  );
}
