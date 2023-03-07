import { EditorContent, useEditor } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import StarterKit from "@tiptap/starter-kit";
import React, { FormEventHandler } from "react";

export default function MarkupEditor({ content }: { content: string }) {
  const editor = useEditor({
    extensions: [Highlight, Typography, StarterKit],
    content: content,
  });
  const onChange = (e) => {
    const { innerHTML } = e.target as HTMLDivElement;
    console.log(innerHTML);
  };
  return (
    <div>
      <EditorContent editor={editor} onInput={onChange} />
    </div>
  );
}
