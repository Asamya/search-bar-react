import React from "react";
import PropTypes from 'prop-types';

SearchBar.propType = {
    search: PropTypes.func.isRequired,
}

export default function SearchBar({searchTerm, setSearchTerm}) {

    return <div>
        <label>
            Search your
            <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />
        </label>
    </div>


}