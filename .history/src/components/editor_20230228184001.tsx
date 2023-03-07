import { EditorContent, useEditor } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import StarterKit from "@tiptap/starter-kit";
import React from "react";

export default function MarkupEditor({
  content,
  updateContent,
}: {
  content: string;
  updateContent: (content: string) => void;
}) {
  const editor = useEditor({
    extensions: [Highlight, Typography, StarterKit],
    content: content,
    onUpdate: ({ editor }) => {
      updateContent(editor.getHTML());
    },
  });
  return (
    <div>
      <EditorContent editor={editor} className="p-2 border border-primary" />
    </div>
  );
}
