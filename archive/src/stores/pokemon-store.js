import { defineStore } from 'pinia';
import { buildPokemonList } from '../util/pokemon'
import { getPokemonList, getPokemonDetails } from "../services/ApiService";

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemonList: [],
    pokemon: {}
  }),
  getters: {
    topPokemons: (state) => {
      return state.pokemonList.slice(0, 3)
    },
  },
  actions: {
    async fetchPokemonList(limit = 50) {
      try {
        const response = await getPokemonList(limit); // Fetching Pokémon list
        this.pokemonList = buildPokemonList(response);
      } catch (error) {
        console.error("Failed to fetch Pokémon list:", error);
      }
    },
    async fetchPokemonData(id) {
      try {
        const response = await getPokemonDetails(id); // Fetching Pokémon data
        this.pokemon = response;
      } catch (error) {
        console.error("Failed to fetch Pokémon data:", error);
      }
    }
  },
});
