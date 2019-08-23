import React from 'react';

const SearchBar = ({onSearchChang}) =>{
    return(
        <div>
        <input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='Search Robots' onChange={onSearchChang} />
        </div>
    );
}
export default SearchBar;