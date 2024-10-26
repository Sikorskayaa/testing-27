import React from "react";
import css from "./SearchBox.module.css";
const SearchBox = ({ inputValue, handleChange }) => {
  return (
    <div className={css.combine}>
      <label>Find contacts by name</label>
      <input
        type="text"
        name="searchContact"
        value={inputValue}
        onChange={handleChange}
        className={css.input}
      />
    </div>
  );
};

export default SearchBox;
