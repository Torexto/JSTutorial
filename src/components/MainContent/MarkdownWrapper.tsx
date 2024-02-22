import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";

function MarkdownWrapper({ path }: { path: string }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    import(`../Markdown/${path}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setContent(res));
      })
      .catch(console.error);
  }, [path]);
  return <Markdown>{content}</Markdown>;
}

export default MarkdownWrapper;
