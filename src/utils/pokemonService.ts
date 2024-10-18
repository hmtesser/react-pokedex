import axios from 'axios'

const BASE_URL = 'https://pokeapi.co/api/v2/';

export const fetchPokemonByName = async (name:string) => {
    try{
        const response = await axios.get(`${BASE_URL}pokemon/${name.toLowerCase()}`);
        const responseRegion = await axios.get(`${BASE_URL}location/${response.data.id}`);
        console.log(response.data.types.map((type: {type: {name:string}}) => type.type.name));
        const upperFirstLetterName = response.data.name.charAt(0).toUpperCase() + name.slice(1);
        return {
            name: upperFirstLetterName,
            image:response.data.sprites.front_default,
            types:response.data.types.map((type: {type: {name:string}}) =>type.type.name),
            abilities: response.data.abilities.map((ability: { ability: {name:string}}) => ability.ability.name),
            region: responseRegion.data.region.name
        }

    }catch(error){
        console.error('Error Fetching pokemon', error)
        return null;
    }
}

export const fetchMultiplePokemonsByName = async (count:number) => {
    try{
        const promises = [];
        for (let i = 1; i<= count; i++){
            promises.push(fetchPokemonByName(i.toString()));
        }
        const results = await Promise.all(promises);
        return results.filter((pokemon) => pokemon !== null);
    }catch(error){
        console.error('error fetching pokemons', error);
        return [];
    }
};