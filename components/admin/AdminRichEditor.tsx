"use client";

import { useEffect, useState } from "react";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Code2,
  Heading2,
  Heading3,
  ImageIcon,
  Italic,
  Link2,
  List,
  ListOrdered,
  Quote,
  Redo2,
  UnderlineIcon,
  Undo2,
} from "lucide-react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";

type AdminRichEditorProps = {
  label: string;
  value?: string;
  onChange?: (html: string) => void;
  minHeight?: number;
};

const toolbarButtonClass =
  "flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:border-[#C9A45C] hover:text-[#C9A45C]";

const activeToolbarButtonClass =
  "border-[#C9A45C] bg-[#C9A45C]/10 text-[#8A6A22]";

export default function AdminRichEditor({
  label,
  value = "",
  onChange,
  minHeight = 420,
}: AdminRichEditorProps) {
  const [isHtmlMode, setIsHtmlMode] = useState(false);
  const [htmlValue, setHtmlValue] = useState(value);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
      }),
      Image,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: value,
    editorProps: {
      attributes: {
        class:
          "px-5 py-4 text-sm font-bold leading-7 text-[#0F1A41] outline-none",
        style: `min-height: ${minHeight}px;`,
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();

      setHtmlValue(html);
      onChange?.(html);
    },
  });

  useEffect(() => {
    setHtmlValue(value);

    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  const toggleHtmlMode = () => {
    if (!editor) return;

    if (!isHtmlMode) {
      setHtmlValue(editor.getHTML());
      setIsHtmlMode(true);
      return;
    }

    editor.commands.setContent(htmlValue);
    onChange?.(htmlValue);
    setIsHtmlMode(false);
  };

  const handleAddLink = () => {
    if (!editor) return;

    const url = window.prompt("Nhập URL liên kết:");

    if (!url) return;

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  const handleAddImage = () => {
    if (!editor) return;

    const url = window.prompt("Nhập URL hình ảnh:");

    if (!url) return;

    editor.chain().focus().setImage({ src: url }).run();
  };

  if (!editor) {
    return null;
  }

  return (
    <div>
      <label className="mb-2 block text-xs font-bold text-slate-700">
        {label}
      </label>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="flex flex-wrap items-center gap-1 border-b border-slate-100 bg-slate-50 p-2">
          <button
            type="button"
            onClick={toggleHtmlMode}
            className={[
              toolbarButtonClass,
              isHtmlMode ? activeToolbarButtonClass : "",
            ].join(" ")}
            title="Mã HTML"
          >
            <Code2 className="h-4 w-4" />
          </button>

          <div className="mx-1 h-6 w-px bg-slate-200" />

          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={[
              toolbarButtonClass,
              editor.isActive("bold") ? activeToolbarButtonClass : "",
            ].join(" ")}
            title="In đậm"
          >
            <Bold className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={[
              toolbarButtonClass,
              editor.isActive("italic") ? activeToolbarButtonClass : "",
            ].join(" ")}
            title="In nghiêng"
          >
            <Italic className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={[
              toolbarButtonClass,
              editor.isActive("underline") ? activeToolbarButtonClass : "",
            ].join(" ")}
            title="Gạch chân"
          >
            <UnderlineIcon className="h-4 w-4" />
          </button>

          <div className="mx-1 h-6 w-px bg-slate-200" />

          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={[
              toolbarButtonClass,
              editor.isActive("heading", { level: 2 })
                ? activeToolbarButtonClass
                : "",
            ].join(" ")}
            title="Heading 2"
          >
            <Heading2 className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={[
              toolbarButtonClass,
              editor.isActive("heading", { level: 3 })
                ? activeToolbarButtonClass
                : "",
            ].join(" ")}
            title="Heading 3"
          >
            <Heading3 className="h-4 w-4" />
          </button>

          <div className="mx-1 h-6 w-px bg-slate-200" />

          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={[
              toolbarButtonClass,
              editor.isActive("bulletList") ? activeToolbarButtonClass : "",
            ].join(" ")}
            title="Danh sách chấm"
          >
            <List className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={[
              toolbarButtonClass,
              editor.isActive("orderedList") ? activeToolbarButtonClass : "",
            ].join(" ")}
            title="Danh sách số"
          >
            <ListOrdered className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={[
              toolbarButtonClass,
              editor.isActive("blockquote") ? activeToolbarButtonClass : "",
            ].join(" ")}
            title="Trích dẫn"
          >
            <Quote className="h-4 w-4" />
          </button>

          <div className="mx-1 h-6 w-px bg-slate-200" />

          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            className={[
              toolbarButtonClass,
              editor.isActive({ textAlign: "left" })
                ? activeToolbarButtonClass
                : "",
            ].join(" ")}
            title="Căn trái"
          >
            <AlignLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            className={[
              toolbarButtonClass,
              editor.isActive({ textAlign: "center" })
                ? activeToolbarButtonClass
                : "",
            ].join(" ")}
            title="Căn giữa"
          >
            <AlignCenter className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            className={[
              toolbarButtonClass,
              editor.isActive({ textAlign: "right" })
                ? activeToolbarButtonClass
                : "",
            ].join(" ")}
            title="Căn phải"
          >
            <AlignRight className="h-4 w-4" />
          </button>

          <div className="mx-1 h-6 w-px bg-slate-200" />

          <button
            type="button"
            onClick={handleAddLink}
            className={toolbarButtonClass}
            title="Chèn link"
          >
            <Link2 className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={handleAddImage}
            className={toolbarButtonClass}
            title="Chèn hình ảnh"
          >
            <ImageIcon className="h-4 w-4" />
          </button>

          <div className="mx-1 h-6 w-px bg-slate-200" />

          <button
            type="button"
            onClick={() => editor.chain().focus().undo().run()}
            className={toolbarButtonClass}
            title="Hoàn tác"
          >
            <Undo2 className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => editor.chain().focus().redo().run()}
            className={toolbarButtonClass}
            title="Làm lại"
          >
            <Redo2 className="h-4 w-4" />
          </button>
        </div>

        {isHtmlMode ? (
          <textarea
            value={htmlValue}
            onChange={(event) => {
              setHtmlValue(event.target.value);
              onChange?.(event.target.value);
            }}
            style={{ minHeight }}
            className="w-full resize-y bg-[#0B1020] px-5 py-4 font-mono text-xs leading-6 text-white outline-none"
            placeholder="<h2>Nhập HTML tại đây...</h2>"
          />
        ) : (
          <EditorContent editor={editor} />
        )}
      </div>

      <p className="mt-2 text-xs font-bold leading-5 text-slate-400">
        Có thể soạn thảo như Word. Bấm nút HTML để chèn hoặc chỉnh code HTML trực tiếp.
      </p>
    </div>
  );
}