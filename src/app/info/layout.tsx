export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="w-full h-16 bg-secondary flex justify-center items-center shadow-md">
        <p className="font-pacifico text-4xl text-primary">NomNom</p>
      </header>
      {children}
    </>
  );
}
