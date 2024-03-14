'use client'

import Link from "next/link";
import Image from "next/image";
import { GoHeartFill } from "react-icons/go";
import { useAppDispatch, useAppSelector } from "@/context";
import { SimplePokemon } from "@/pokemons";
import { TooglePokemon } from "@/context/reducer/pokemonsSlice";

export function PokemonsFavorite() {

  const data = useAppSelector(state => state.pokemonsSlice)
  const dispatch = useAppDispatch()
  const pokemons = Object.values(data)

  const handleToogle = (pokemon: SimplePokemon) => {
    dispatch(TooglePokemon(pokemon))
  }


  return (
    <>
      <span className='text-4xl font-bold'>Pokemon Favoritos</span>
      <div className="flex flex-wrap">
        {pokemons.map(pokemon => (
            <div key={pokemon.id} className='grid justify-items-center p-4'>
              <div className="relative flex h-90 w-52 flex-col gap-3 rounded-xl justify-items-center bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-36 w-40 overflow-hidden rounded-xl bg-slate-700 bg-clip-border text-gray-700 shadow-lg">
                  <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                  width={100} height={100} alt='detalle de pokemons'
                  className='w-full'
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {pokemon.name}
                  </h4>
                  <Link
                    href={`pokemons/pokemon/${pokemon.name}`}
                      className="middle none center mr-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue  -500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      data-ripple-light="true"
                    >
                      Ver mas
                  </Link>
                </div>
              <button
                  onClick={() => handleToogle(pokemon)}
                  className="middle none center mr-3 h-12 w-full rounded-lg bg-gradient-to-tr from-blue-800 to-blue-600 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue  -500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                >
                <div className="flex gap-2 items-center justify-center">
                  <GoHeartFill />
                  <p className="text-sm"> Es favorito </p>
                  </div>
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}
