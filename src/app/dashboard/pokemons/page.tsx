import { Metadata } from 'next';
import PokemonGrid from '@/pokemons/components/PokemonGrid';
import { Suspense } from 'react';
import Loading from './loading';

export const metadata: Metadata = {
  title: "Pokemons",
  description: "Generating Pokemons",
};

export default function PokemonPage() {
  return (
    <Suspense fallback={<Loading />}>
      <div className='grid gap-9 justify-items-center'>
        <PokemonGrid />
      </div>
    </Suspense>
  )
}




