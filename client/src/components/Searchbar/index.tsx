import React, { useState } from "react";

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
        onChange={(evt) => {
          setInput(evt.currentTarget.value);
        }}
      />
      <button onClick={() => handleSearch(input)}>O</button>
    </div>
  );
};

export default Searchbar;
