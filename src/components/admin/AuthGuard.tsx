"use client";

import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import { ChefHat, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface AuthGuardProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function AuthGuard({ children, fallback }: AuthGuardProps) {
  const { user, isLoading, error } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user && !error) {
      router.push("/admin/login");
    }
  }, [user, isLoading, error, router]);

  if (isLoading) {
    return (
      fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-400 mx-auto mb-4"></div>
            <p className="text-gray-600 font-medium">
              Verificando autenticación...
            </p>
          </div>
        </div>
      )
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-red-100 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="w-8 h-8 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Error de Autenticación
              </h2>
              <p className="text-gray-600 mb-6">
                {error.message ||
                  "Ha ocurrido un error al verificar tu identidad."}
              </p>
            </div>
            <div className="space-y-4">
              <Link
                href="/admin/login"
                className="w-full flex justify-center items-center py-3 px-6 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transform transition-all duration-200 hover:scale-105"
              >
                <ChefHat className="mr-2 h-5 w-5" />
                Intentar de Nuevo
              </Link>
              <Link
                href="/"
                className="w-full flex justify-center items-center py-3 px-6 border border-gray-300 text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Volver al Inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-orange-100 text-center">
            <div className="mb-6">
              <Image
                src="/final.png"
                alt="Logo"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Acceso Restringido
              </h2>
              <p className="text-gray-600 mb-6">
                Necesitas iniciar sesión para acceder a esta página.
              </p>
            </div>
            <div className="space-y-4">
              <Link
                href="/admin/login"
                className="w-full flex justify-center items-center py-3 px-6 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transform transition-all duration-200 hover:scale-105"
              >
                <ChefHat className="mr-2 h-5 w-5" />
                Iniciar Sesión
              </Link>
              <Link
                href="/"
                className="w-full flex justify-center items-center py-3 px-6 border border-gray-300 text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Volver al Inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
