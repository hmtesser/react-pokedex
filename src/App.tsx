import React, { useState } from 'react';
import logo from './logo.svg';
import SearchBar from './components/SearchBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { fetchPokemonByName } from './utils/pokemonService';
import './App.css';
import PokemonCard from './components/PokemonCards';

const App: React.FC = () => {
  const [pokemon, setPokemon] = useState<any>(null);
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    if (query) {
      const data = await fetchPokemonByName(query);
      setPokemon(data);
    }
  };


  return (
    <>
      <Router>
        <Header />
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="flex flex-col items-center">
            <h1 className='text-2xl font-bold mb-4'>Pokedex</h1>
            <SearchBar query={query} setQuery={setQuery} />
            <button
              onClick={handleSearch}
              className='px-4 py-2 mb-4 text-white bg-blue-500 rounded-md hover:bg-blue-600'>Search</button>
            {pokemon && (
              <div className="mb-4">
                <PokemonCard
                  name={pokemon.name}
                  image={pokemon.image}
                  types={pokemon.types}
                  abilities={pokemon.abilities}
                  region={pokemon.region}
                />
              </div>)}
          </div>
        </div>
      </Router>
    </>

  );
}

export default App;
