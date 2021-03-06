import React, { useState, useEffect, useCallback } from "react";

import CloseSVG from "../../resources/close.svg";
import SearchSVG from "../../resources/search.svg";

import "./Searchbar.css";

type SearchbarProps = {
  handleSearch: (str: string) => void;
};

const Searchbar: React.FC<SearchbarProps> = ({ handleSearch }) => {
  const [input, setInput] = useState("");

  const clearSearch = useCallback(() => {
    setInput("");
    handleSearch("");
  }, [handleSearch]);

  const handleKeyUp = (evt: any) => {
    if (evt.key === "Escape") {
      return clearSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        id="search-input"
        type="text"
        placeholder="Search"
        value={input}
        onChange={(evt) => setInput(evt.target.value)}
        onKeyDownCapture={handleKeyUp}
      />
      <div>
        <button className="clear-search" onClick={clearSearch}>
          <img src={CloseSVG} alt="Clear search" />
        </button>
      </div>
      <div>
        <button className="submit-search" onClick={() => handleSearch(input)}>
          <img src={SearchSVG} alt="Submit Search" />
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
