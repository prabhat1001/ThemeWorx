import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FiCopy, FiCheck } from "react-icons/fi";

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    } catch (error) {
      console.error("Copy failed", error);
    }
  };

  return (
    <div className="relative rounded-[2rem] shadow-lg ">
      
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 z-20 bg-[#1b1b1b] hover:bg-[#272727] text-white/80 hover:text-white
                   transition-all p-2 rounded-lg backdrop-blur-sm border border-white/10"
      >
        {copied ? <FiCheck size={18} /> : <FiCopy size={18} />}
      </button>

      <SyntaxHighlighter
        language="json"
        style={{
          ...oneDark,
          'code[class*="language-"]': {
            color: "#f8f8f2",
            background: "none",
          },
          'pre[class*="language-"]': {
            color: "#f8f8f2",
            background: "none",
          },
          ".token.string": { color: "#FFDD44" },
          ".token.property": { color: "#FFDD44" },
          ".token.number": { color: "#FFDD44" },
          ".token.keyword": { color: "#FFDD44" },
          ".token.boolean": { color: "#FFDD44" },
          ".token.comment": { color: "#7A6F99" },
          ".token.punctuation": { color: "#f8f8f2" },
        }}
        wrapLongLines
        customStyle={{
          background: "#0f0f0f",
          padding: "20px",
          paddingTop: "50px",
          borderRadius: "12px",
          fontSize: "15px",
          fontFamily: "JetBrains Mono, Fira Code, monospace",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
