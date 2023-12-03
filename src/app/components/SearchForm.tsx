'use client';

import React, { useState } from "react";

type Props = {};

const SearchForm = (props: Props) => {
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
  );
};

export default SearchForm;
