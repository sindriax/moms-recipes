"use client";

import { useUser } from "@auth0/nextjs-auth0";
import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChefHat, AlertCircle } from "lucide-react";

function ErrorDisplay() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  if (!error) return null;

  return (
    <div className="mt-6 p-4 border border-red-200 rounded-lg bg-red-50 flex items-center space-x-3">
      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
      <p className="text-sm text-red-700">
        Error de autenticación: {error}. Por favor, inténtalo de nuevo.
      </p>
    </div>
  );
}

function AdminLoginContent() {
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && user) {
      router.push("/admin/new");
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-400 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  if (user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="flex min-h-screen">
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-orange-100 to-amber-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20"></div>
          <div className="relative z-10 flex flex-col justify-center items-center p-12 text-center h-full">
            <div className="mb-10">
              <Image
                src="/chefita.png"
                alt="Chef"
                width={300}
                height={300}
                className="mx-auto drop-shadow-2xl"
              />
            </div>
            <div className="max-w-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Tu Espacio Culinario
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Accede a tu cocina digital para compartir nuevas recetas y
                gestionar tu contenido culinario con estilo.
              </p>
              <div className="flex items-center justify-center space-x-2 text-orange-600">
                <ChefHat size={28} />
                <span className="font-semibold text-xl">
                  Chef&apos;s Corner
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="max-w-md w-full">
            <div className="lg:hidden text-center mb-8">
              <Image
                src="/final.png"
                alt="Logo"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <Image
                src="/cocina.png"
                alt="Cocinita"
                width={120}
                height={40}
                className="mx-auto"
              />
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-orange-100">
              <div className="text-center mb-8">
                <div className="hidden lg:block mb-6">
                  <Image
                    src="/final.png"
                    alt="Logo"
                    width={60}
                    height={60}
                    className="mx-auto mb-3"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Bienvenida, Chef
                </h2>
                <p className="text-gray-600">
                  Inicia sesión para acceder a tu panel de administración
                </p>
              </div>

              <Suspense fallback={null}>
                <ErrorDisplay />
              </Suspense>

              <div className="mt-8">
                <Link
                  href="/api/auth/login?returnTo=/admin/new"
                  className="group relative w-full flex justify-center items-center py-4 px-6 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transform transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <ChefHat className="mr-3 h-5 w-5" />
                  Acceder al Panel
                </Link>
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">
                  Autenticación segura con Auth0
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                ¿Problemas para acceder?{" "}
                <Link
                  href="/contact"
                  className="text-orange-600 hover:text-orange-700 font-medium"
                >
                  Contacta con el soporte técnico (tu hija)
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdminLogin() {
  return <AdminLoginContent />;
}
