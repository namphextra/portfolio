"use client";

export default function Admin() {
  return (
    <div className="flex">
      <aside className="w-1/12">Sub Menu</aside>
      <main className="container">
        <div className="content__container">Container</div>
      </main>
      <aside className="w-2/12">Main Menu</aside>
    </div>
  );
}
