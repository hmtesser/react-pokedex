import React from 'react'

interface SearchBarProps {
    query:string;
    setQuery: (query:string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery}) => {
    return (
        <div className='mb-4'>
            <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search Pokemon'
            className='w-full p-2 border rounded-md shadow-md focus:outline-none focus:ring-2' />
        </div>
    );
};

export default SearchBar;
