import React from "react";
import "./search-form.css";
import { RiCloseLargeFill } from "@remixicon/react";
const SearchForm = ({ isOpen = false, setIsOpen }) => {
  const handleCloseSearch = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };
  return (
    <div className={`search__form ${isOpen && "active"}`}>
      <form autoComplete="off">
        <label htmlFor="search" className="visuallyhidden">
          Search
        </label>
        <div className="form__field">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for a movie, tv show or person..."
          />
          <button>
            <RiCloseLargeFill color="#fff" onClick={handleCloseSearch} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
