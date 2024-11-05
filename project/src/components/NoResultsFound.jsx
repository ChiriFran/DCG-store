// NoResultFound.js
import React from "react";

const NoResultFound = ({ searchTerm }) => {
  return (
    <div className="no-results-container">
      <h2 className="no-results-title">Not Found: "{searchTerm}"</h2>
      <p className="no-results-text">No results were found for your search.</p>
    </div>
  );
};

export default NoResultFound;
