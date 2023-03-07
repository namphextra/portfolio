"use client";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <>
      <header className="w-full h-16 bg-secondary flex justify-center items-center shadow-md">
        <p
          className="font-pacifico text-4xl text-primary"
          onClick={() => router.push("/info")}
        >
          NomNom
        </p>
      </header>
      {children}
    </>
  );
}
