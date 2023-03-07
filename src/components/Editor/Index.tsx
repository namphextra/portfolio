import React from "react";
import "react-quill/dist/quill.bubble.css";
import dynamic from "next/dynamic";
import "@/styles/editor.scss";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function Editor({
  id,
  data,
  updateContent,
}: {
  id: string;
  data: string;
  updateContent: (data: string) => void;
}) {
  return (
    <ReactQuill
      id={id}
      className="border border-gray-300 rounded-md"
      theme="bubble"
      value={data}
      onChange={updateContent}
      formats={[
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
      ]}
      modules={{
        toolbar: [
          [{ header: [1, 2, 3, 4, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
          ["clean"],
        ],
      }}
    />
  );
}
