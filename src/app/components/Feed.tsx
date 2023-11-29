"use client";

import React, { useState } from "react";
import SnippetCard from "./SnippetCard";

type Props = {};

const SnippetCardList = () => {
  return (
    <div className="mt-16 prompt_layout">
      {new Array(10).fill(24).map(() => (
        <SnippetCard />
      ))}
    </div>
  );
};

const Feed = (props: Props) => {
    let timeoutId: undefined | ReturnType<typeof setTimeout>;

    const [searchText, setSearchText] = useState("");
    const [searchTimeout, setSearchTimeout] = useState(timeoutId);
    
    const handleSearchChange = (e: any) => {
      clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        // Search Logic here
      }, 500)
    );
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a snippet or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      {/* All Prompts */}
      {searchText ? (
        <SnippetCardList
        />
      ) : (
        <SnippetCardList />
      )}
    </section>
  );
};

export default Feed;
