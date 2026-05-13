import React from "react";
import { Link } from "react-router-dom";
import "./page-not-found.css";

const PageNotFound = () => {
  return (
    <div className="pnf__block">
      <div className="pnf__error">
        <div className="pnf__title">Page not found</div>
        <div className="pnf__message">
          <p>
            Looks like you've followed a broken link or entered a URL that
            doesn't exist on this site.
          </p>
          <p className="mt-4">
            Back to our <Link to={"/"} className="app-link-active">home page</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
