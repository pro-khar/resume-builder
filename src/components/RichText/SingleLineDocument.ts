import { Node } from "@tiptap/core";

// A "doc" node whose content is inline nodes directly (no paragraph wrapper),
// so single-line fields never produce a newline/second block and getHTML()
// serializes to bare inline markup (e.g. `Hello <strong>World</strong>`)
// instead of `<p>Hello <strong>World</strong></p>`.
export const SingleLineDocument = Node.create({
  name: "doc",
  topNode: true,
  content: "inline*",
});
