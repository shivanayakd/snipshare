import React from "react";
import SnippetCard from "./SnippetCard";

export const SnippetCardList = ({ snippets }: any) => {
  return (
    <div className="mt-16 space-y-6 sm:columns-2 sm:gap-6 xl:columns-3 justify-center">
      {snippets.map((snippet: any) => (
        <SnippetCard key={snippet.id } snippet={snippet} />
      ))}
    </div>
  );
};
