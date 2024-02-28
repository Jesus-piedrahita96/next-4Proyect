import { DetailPokemon, PokemosResponse, SimplePokemon } from '@/app/pokemons';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Pokemons",
  description: "Generating Pokemons",
};

const getPokemons = async (limit= 151, offset=0): Promise <SimplePokemon[]> => {
  const data: PokemosResponse = await (await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)).json()
  // const dataPokemons = await Promise.all(
  //   data.results.map(pokemon => fetch(pokemon.url)
  //     .then(restul => restul.json()))
  // )
  const dataPokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name
  }))
  return dataPokemons
}

export default async function PokemonPage() {
  const pokemons = await getPokemons()
  return (
    <div className='grid gap-9 justify-items-center'>
      <span className='text-4xl font-bold'>Pokemon Page</span>
      <div className='flex flex-wrap gap-6'>
        {pokemons.map(pokemon => (
          <div key={pokemon.id} className='grid justify-items-center p-4'>
            <div className="relative flex w-52 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 mt-4 h-40 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                  width={150} height={150} alt='detalle de pokemons'
                />
              </div>
              <div className="p-6 text-center">
                <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {pokemon.name}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}




