import { ComponentChildren } from "preact";
import { useState, useEffect, useCallback, useMemo } from "preact/hooks";
import { BsClipboard, BsClipboardCheck } from "react-icons/bs";

function nodesToText(children: ComponentChildren = []): string {
  const nodeToString = (node: ComponentChildren, fallback = ""): string =>
    (typeof node === "string" && node) || fallback;

  if (Array.isArray(children)) {
    // @ts-expect-error TS(2322): Type 'ComponentChild' is not assignable to type 's... Remove this comment to see the full error message
    return children.reduce(
      (prev: string, curr: ComponentChildren) => prev.concat(nodeToString(curr, "\n")),
      ""
    );
  } else return nodeToString(children);
}

function CodeBlock({ children, className = "" }: Props) {
  const [copied, setCopied] = useState(false);
  const text = useMemo(() => nodesToText(children), []);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className={`not-prose ${className}`}>
      <pre className={`relative rounded-lg bg-gray-800 p-4 ${!children && "py-7"}`}>
        <button
          className="absolute top-2 right-2 rounded-md bg-gray-700 py-0 px-2 text-white hover:bg-gray-600 focus:outline-none"
          onClick={handleClick}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
        <code className="whitespace-pre-wrap font-mono text-xs font-bold text-white lg:text-lg">
          {children}
        </code>
      </pre>
    </div>
  );
}

type Props = {
  children?: ComponentChildren;
  className?: string;
};

export default CodeBlock;
