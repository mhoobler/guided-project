import React, { useState } from "react";

import CloseSVG from "../../resources/close.svg";
import SearchSVG from "../../resources/search.svg";

import "./Searchbar.css";

type SearchbarProps = {
  handleSearch: (str: string) => void;
};

const Searchbar: React.FC<SearchbarProps> = ({ handleSearch }) => {
  const [input, setInput] = useState("");

  return (
    <div className="search-container">
      {/* Search bar has VISUAL BUG */}
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={(evt) => {
          setInput(evt.currentTarget.value);
        }}
      />
      <div>
        <button
          className="clear-search"
          onClick={() => {
            setInput("");
            handleSearch("");
          }}
        >
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
