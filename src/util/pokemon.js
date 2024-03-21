export const buildPokemonList = (response) => {
  const data = response
    .map((res) => res.data)
    .map((item) => {
      const { id, name, abilities, types, stats, sprites } = item;

      return {
        id,
        name,
        types: types.map((e) => e.type.name).join(", "),
        abilities: abilities.map((e) => e.ability.name).join(", "),
        status: ["Ready to roll", "Deprecated"][Math.floor(Math.random() * 2)],
        totalBaseStat: stats.reduce((acc, curr) => acc + curr.base_stat, 0),
        urlImg: sprites?.other?.dream_world?.front_default,
        details: ''
      };
    });
  return data;
};
