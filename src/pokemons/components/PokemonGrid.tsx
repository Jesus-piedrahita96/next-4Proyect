import { PokemosResponse, SimplePokemon } from '@/pokemons';
import PokemonList from './PokemonList';

const getPokemons = async (limit = 151, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemosResponse = await (await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)).json()
  // const dataPokemons = await Promise.all(
  //   data.results.map(pokemon => fetch(pokemon.url)
  //     .then(restul => restul.json()))
  // )
  const dataPokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name
  }))
  // throw new Error('error de prueba')
  return dataPokemons
}

export default async function PokemonGrid() {
  const pokemon = await getPokemons()
  return (
    <>
      <span className='text-4xl font-bold'>Pokemon Page</span>
      <div className='flex flex-wrap gap-6'>
        <PokemonList pokemons={pokemon} />
      </div>
    </>
  )
}
