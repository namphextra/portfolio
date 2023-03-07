import React from "react";
import "react-quill/dist/quill.bubble.css";
import dynamic from "next/dynamic";
import "@/styles/editor.scss";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function Editor({
  id
  content,
  updateContent,
}: {
  id: string;
  content: string;
  updateContent: (content: string) => void;
}) {
  return (
    <ReactQuill
      id={id}
      className="border border-gray-300 rounded-md"
      theme="bubble"
      value={content}
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
