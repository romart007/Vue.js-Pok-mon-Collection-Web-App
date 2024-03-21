// services/pokemonService.js
import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

// Function to fetch a list of Pokémon with pagination
export const getPokemonList = async (limit = 50, offset = 0) => {
  try {
    const promises = [];
    for (let i = 1; i <= limit; i++) {
      const url = await axios.get(`${BASE_URL}/pokemon/${i}`);
      promises.push(url);
    }

    return Promise.all(promises);
  } catch (error) {
    console.error('Error fetching Pokémon list:', error);
    throw error;
  }
};

// Function to fetch details of a specific Pokémon by its name
export const getPokemonDetails = async (pokemonName) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon/${pokemonName}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for ${pokemonName}:`, error);
    throw error;
  }
};
