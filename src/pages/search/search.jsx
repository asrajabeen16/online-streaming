import React from "react";
import "./search.css";

const Search = () => {
  return (
    <div className="page-search">
      <div className="listing">
        <div className="listing__head">
          <h2 className="listing__title">Results For: </h2>
        </div>
      </div>
      <div className="listing__items">
        <div className="card"></div>
      </div>
    </div>
  );
};

export default Search;
