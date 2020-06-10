import React from 'react';

const searchResults = ({ results }) => {
    return(
        <div id="results">
            <h3>Here's what we found ({ results.length } results):</h3>
        </div>    );
};

export default searchResults;