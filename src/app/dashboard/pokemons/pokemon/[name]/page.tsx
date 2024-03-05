import { DetailPokemon } from '@/pokemons'
import { Metadata } from 'next'
import React from 'react'
import Image from 'next/image'

interface Props {
  params:{ name: string }
}

export async function generateStaticParams() {
  const staticPokemons = Array.from({ length: 151 }).map((_, i) => `${i + 1}`)
  return staticPokemons.map(id => ({ id }))
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const {id, name} = await getDetailPokemon(params.name)
    return {
      title: `#${id} - ${name}`,
      description: `pagina del pokemon ${name}`
    }
  } catch (error) {
    return {
      title: 'Pokemon not found',
      description: 'Pokemon not found'
    }
  }
}


const getDetailPokemon = async (name: string): Promise<DetailPokemon> => {
  //todo: cambiar el cache a futuro
  const detailPokemon = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, { cache: 'force-cache' })).json()
  return detailPokemon
}

export default async function PokemonDetailPage({params}: Props) {
  const pokemon = await getDetailPokemon(params.name)

  return (
  <section className="relative pt-16 bg-blueGray-50">
    <div className="container mx-auto">
      <div className="flex flex-wrap items-center">
        <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
            <Image src={pokemon.sprites.other?.showdown.front_default} width={180} height={180} alt='imagen de pokemon' className=' align-middle rounded-t-lg' />
            <blockquote className="relative p-8 mb-4">
              <h4 className="text-xl font-bold text-black">
                {pokemon.name}
              </h4>
              <p className="text-md font-light mt-2 text-black">
                Putting together a page has never been easier than matching
                together pre-made components. From landing pages presentation
                to login areas, you can easily customise and built your pages.
              </p>
            </blockquote>
          </div>
        </div>

        <div className="w-full md:w-6/12 px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 px-4">
              <div className="relative flex flex-col mt-4">
                <div className="px-4 py-5 flex-auto">
                  <h6 className="text-xl mb-1 font-semibold">Habilidades</h6>
                  <p className="mb-4 text-blueGray-500">
                    {pokemon.abilities.map(ability => ability.ability.name)}
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col min-w-0">
                <div className="px-4 py-5 flex-auto">
                  <h6 className="text-xl mb-1 font-semibold">
                    Stack
                  </h6>
                  <p className="mb-4 text-blueGray-500">
                        {pokemon.stats.map((data, index) => (
                          <div key={index}>
                            <span className='mr-2'>{data.stat.name}</span>
                            <span>{data.base_stat }</span>
                          </div>
                    ))}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 mt-4">
                <div className="px-4 py-5 flex-auto">
                  <h6 className="text-xl mb-1 font-semibold">Default</h6>
                  <p className="mb-4 text-blueGray-500">
                        <Image src={pokemon.sprites.back_default} width={100} height={100} alt='pokemon' />
                        {/* <Image src={pokemon.sprites.other?.dream_world.front_default} width={100} height={100} alt='pokemon' /> */}
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col min-w-0">
                <div className="px-4 py-5 flex-auto">
                  <h6 className="text-xl mb-1 font-semibold">otra presentaciones</h6>
                  <p className="mb-4 text-blueGray-500">
                    <Image src={pokemon.sprites.front_shiny} width={100} height={100} alt='pokemon' />
                    <Image src={pokemon.sprites.back_shiny} width={100} height={100} alt='pokemon' />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="relative bg-blueGray-50 pt-8 pb-6 mt-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-6/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Made in Colombia - cali
            </div>
          </div>
        </div>
      </div>
    </footer>
  </section>
  )
}
