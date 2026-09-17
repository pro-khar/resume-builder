import { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import { BubbleMenu } from "@tiptap/react/menus";
import StarterKit from "@tiptap/starter-kit";
import TiptapText from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import {
  Bold as BoldIcon,
  Italic as ItalicIcon,
  Underline as UnderlineIcon,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SingleLineDocument } from "./SingleLineDocument";

interface RichTextEditorProps {
  id?: string;
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  multiline?: boolean;
  className?: string;
}

function ToolbarButton({
  label,
  Icon,
  isActive,
  onClick,
}: {
  label: string;
  Icon: LucideIcon;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      // Prevent the mousedown from stealing focus/selection away from the editor
      // before the click handler's toggle command runs.
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      className={cn(
        "flex h-7 w-7 items-center justify-center rounded transition-colors hover:bg-accent hover:text-accent-foreground",
        isActive && "bg-accent text-accent-foreground"
      )}
    >
      <Icon className="h-3.5 w-3.5" />
    </button>
  );
}

// A minimal Tiptap editor for a single resume field, with a floating B/I/U
// menu that appears over the current text selection. `multiline` switches
// between a single-line field (Enter submits the surrounding form, matching
// how the native <Input> it replaces behaved) and a paragraph field like the
// intro summary (Enter adds a line break).
export function RichTextEditor({
  id,
  value,
  onChange,
  placeholder,
  multiline = false,
  className,
}: RichTextEditorProps) {
  const editor = useEditor(
    {
      extensions: multiline
        ? [
            StarterKit.configure({
              heading: false,
              bulletList: false,
              orderedList: false,
              listItem: false,
              listKeymap: false,
              blockquote: false,
              codeBlock: false,
              code: false,
              horizontalRule: false,
              link: false,
              strike: false,
            }),
          ]
        : [SingleLineDocument, TiptapText, Bold, Italic, Underline],
      content: value || "",
      editorProps: {
        attributes: {
          ...(id ? { id } : {}),
          class: "text-sm focus:outline-none",
        },
        handleKeyDown: (view, event) => {
          if (!multiline && event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            view.dom.closest("form")?.requestSubmit();
            return true;
          }
          return false;
        },
      },
      onUpdate: ({ editor }) => onChange(editor.getHTML()),
    },
    [multiline]
  );

  // Keep the editor in sync with external resets (form submit clearing the
  // draft, or the edit dialog switching which item is selected) without
  // fighting the user's own typing. Every keystroke (including Enter, which
  // splits a paragraph) round-trips through onUpdate -> onChange -> this
  // `value` prop, so this effect must never re-apply content while the
  // editor is focused — doing so would race the transaction that's still
  // landing and can silently undo it (e.g. collapsing a fresh Enter split
  // right back into one paragraph, mid-keystroke).
  useEffect(() => {
    if (!editor || editor.isFocused) return;
    if (value !== editor.getHTML()) {
      editor.commands.setContent(value || "", { emitUpdate: false });
    }
  }, [value, editor]);

  const isEmpty = !value;

  return (
    <div
      className={cn(
        "relative flex w-full rounded-md border border-input px-3 py-1 text-sm shadow-sm transition-colors focus-within:ring-1 focus-within:ring-ring dark:bg-primary/10",
        multiline ? "min-h-[80px] items-start py-2" : "h-9 items-center",
        className
      )}
    >
      {isEmpty && placeholder ? (
        <span
          className={cn(
            "pointer-events-none absolute left-3 line-clamp-1 text-muted-foreground/70",
            multiline ? "top-2" : "top-1/2 -translate-y-1/2"
          )}
        >
          {placeholder}
        </span>
      ) : null}
      <EditorContent editor={editor} className="w-full [&_.ProseMirror]:outline-none" />
      <BubbleMenu
        editor={editor}
        options={{ placement: "top", strategy: "fixed", offset: 8 }}
        appendTo={() => document.body}
      >
        <div className="flex gap-0.5 rounded-md border bg-popover p-1 shadow-md">
          <ToolbarButton
            label="Bold"
            Icon={BoldIcon}
            isActive={editor.isActive("bold")}
            onClick={() => editor.chain().focus().toggleBold().run()}
          />
          <ToolbarButton
            label="Italic"
            Icon={ItalicIcon}
            isActive={editor.isActive("italic")}
            onClick={() => editor.chain().focus().toggleItalic().run()}
          />
          <ToolbarButton
            label="Underline"
            Icon={UnderlineIcon}
            isActive={editor.isActive("underline")}
            onClick={() => editor.chain().focus().toggleUnderline().run()}
          />
        </div>
      </BubbleMenu>
    </div>
  );
}
