import React from 'react';

interface PokemonCardProps {
    name:string,
    image:string,
    types:string[],
    abilities: string[];
    region: string[];
}

const PokemonCard: React.FC<PokemonCardProps> = ({name, image,types,abilities,region}) => {
    return(
        <div className='p-4 max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105'>
            <img className='w-full h-48 object-cover' src={image} alt={name}/>
            <div className='flex flex-col items-center p-4'>
                <div className='p-4'>
                    <h2 className='text-xl font-bold text-gray-800'>{name}</h2>
                    <div className='flex space-x-2 mt-2'>
                    {types.map((type) => (
                        <span key={type} className={`px-2 py-1 text-sm font-semibold text-white roundedfull ${getTypeColor(type)}`}>{type}
                        </span>
                    ))} 
                    </div>
                    <h3 className='mt-2 text-gray-600'>Abilities:</h3>
                    <ul className='list-disc list-inside text-gray-700'>
                    {abilities.map((ability) => (
                        <li key={ability}>{ability}</li>    
                    ))}
                    </ul>
                    <h2 className='mt-2 text-gray-600'>Location</h2>
                    <h3 className='text-xl font-bold text-gray-800'>{region}</h3>
            </div>
        </div>
    </div>
    );
};

const getTypeColor = (type:string) => {
    switch (type) {
        case 'fire':
            return 'bg-red-500';
        case 'water':
            return 'bg-blue-500';
        case 'grass':
            return 'bg-green-500';
        case 'electric':
            return 'bg-yellow-500';
        case 'psychic':
            return 'bg-pink-500';
        case 'normal':
            return 'bg-gray-500';
        case 'fairy':
            return 'bg-pink-700';
        case 'steel':
            return 'bg-gray-800';
        case 'dark':
            return 'bg-black-500';
        case 'fighting':
            return 'bg-brown-500';
        case 'bug':
            return 'bg-green-800';
        case 'flying':
            return 'bg-teal-500';
    }
}

export default PokemonCard;