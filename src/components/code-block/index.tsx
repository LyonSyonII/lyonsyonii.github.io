import { useState, useEffect } from 'preact/hooks';
import { string } from 'prop-types';
import * as React from 'react';

function nodesToText(children: JSX.Element): string {
  console.log("Patata")
  if (Array.isArray(children)) {
    return children.reduce((prev: string, curr: JSX.Element | string) => {
      if (typeof curr === "string") {
        return prev.concat(curr);
      } else {
        return prev.concat("\n");
      }
    })
  }
}

function CodeBlock({ children, className }: Props) {
  const [copied, setCopied] = useState(false);
  const [text, setText] = useState("");

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(
        text
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  useEffect(() => setText(nodesToText(children)), []);

  return (
    <div className={className}>
      <pre className="relative bg-gray-800 rounded-lg p-4">
        <button
          className="absolute top-2 right-2 p-2 text-white bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none"
          onClick={handleClick}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
        <code className="text-white text-lg font-bold font-mono whitespace-pre-wrap">
          {children}
        </code>
      </pre>
    </div>
  );
}

type Props = {
  children: JSX.Element;
  className?: string;
};

export default CodeBlock;
