'use client';
import { useState } from 'react';

export default function CodeToClipboard() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    void navigator.clipboard.writeText(
      'npx @berlinbruno/nextjs-starter my-app'
    );
    setCopied(true);

    setTimeout(() => {
      setCopied(false); // Reset after 2 seconds
    }, 2000);
  };

  return (
    <div className="border-border relative rounded-full border">
      <code onClick={copyToClipboard}>
        npx @berlinbruno/nextjs-starter
        <span role="img" aria-label="copy icon">
          📋
        </span>
      </code>
      {copied && (
        <p className="absolute left-0 translate-x-1/2 text-sm">
          Copied to clipboard!
        </p>
      )}
    </div>
  );
}
