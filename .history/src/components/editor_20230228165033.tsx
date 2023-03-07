import { EditorContent, useEditor } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";

export default function MarkupEditor({ content }: { content: string }) {
  const editor = useEditor({
    extensions: [Highlight, Typography],
  });
  const onChange = (e) => {
    console.log(e);
  };
  return (
    <div>
      <EditorContent editor={editor} value={content} onChange={onChange} />
    </div>
  );
}
