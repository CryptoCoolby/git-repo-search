import React from 'react'

const SearchBox = ({ getSearchResults }) => (
    <div className='search-box'>
        <input
            className=''
            type='search'
            placeholder='Find a Git Repository..'
            autoFocus
            onChange={getSearchResults}
        />
    </div>
)

export default SearchBox
