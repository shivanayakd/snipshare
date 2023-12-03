import React from "react";
import SearchForm from "./SearchForm";
import { SnippetCardList } from "./SnippetCardList";

const Feed = ({ snippets }: any) => {
  return (
    <section>
      <div className="feed">
        <SearchForm />
      </div>
      <div>
        <SnippetCardList snippets={snippets} />
      </div>
    </section>
  );
};

export default Feed;
