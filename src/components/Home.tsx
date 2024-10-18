import React, {useEffect, useState} from 'react';
import PokemonCard from './PokemonCards';
import { fetchMultiplePokemonsByName } from '@/utils/pokemonService';



const Home : React.FC = () => {
    const [pokemons, setpokemons] = useState<any[]>([]);
    const [loading, setloading] = useState(true);
    const BASE_URL = `https://pokeapi.co/api/v2/pokemon/`

    useEffect(() => {
        const fetchPokemons = async () => {
            setloading(true);
            const results = await fetchMultiplePokemonsByName(150);
            setpokemons(results);
            setloading(false)
        fetchPokemons();
    };

    fetchPokemons();
}, []);

    if(loading){
        return <div><img src='/public/gifs/pikachu-yellow.gif' /></div>;
    }

    return (
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4'>
            {pokemons.map((pokemon) => (
                 <PokemonCard
                 name={pokemon.name}
                 image={pokemon.image}
                 types={pokemon.types}
                 abilities={pokemon.abilities}
                 region={pokemon.region}
               />
            ))}
        </div>
    )
}