"use client";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="w-full h-12 bg-primary flex justify-center items-center">
        <p className="font-dancing text-center">NOMNOM</p>
      </header>
      {children}
    </>
  );
}
