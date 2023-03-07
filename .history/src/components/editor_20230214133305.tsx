import { EditorContent, useEditor } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";

export default function MarkupEditor() {
  const editor = useEditor({
    extensions: [Highlight, Typography],
  });
  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  );
}
