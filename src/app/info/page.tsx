import ListBlogs from "@/components/listBlogs";

export default async function Page() {
  const res = await fetch("http://localhost:5000/api/folder");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const folders = await res.json();

  return (
    <div className="info__container">
      <div className="blogs">
        <ListBlogs folders={folders} prefixPathGoTo="/info/blog" />
      </div>
    </div>
  );
}
