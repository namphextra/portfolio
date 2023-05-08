import { Folder } from "@/types/folder";

export default async function Blog({ params }: { params: { id: string } }) {
  const res = await fetch(`http://localhost:5000/api/folder/${params.id}`);
  const folder = (await res.json()) as Folder;

  return (
    <div className="info__container">
      <div className="blog">
        <div className="blog__title">{folder.title}</div>
        <div
          className="blog__content"
          dangerouslySetInnerHTML={{ __html: folder.content }}
        ></div>
      </div>
    </div>
  );
}
