import { SimplePokemon } from '@/pokemons';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface PokemonState {
  [key: string]: SimplePokemon
}

const initialState:PokemonState = {
  '1': { id: '1', name: 'Bulbasaur' },
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    TooglePokemon(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload
      const { id } = pokemon

      if (!!state[id]) {
        delete state[id]
        return
      }

      state[id] = pokemon
    },
  }
});

export const {TooglePokemon} = pokemonsSlice.actions

export default pokemonsSlice.reducer