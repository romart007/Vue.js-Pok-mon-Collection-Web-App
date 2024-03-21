<template>
  <q-container>
    <div class="card-wrapper row q-gutter-xl">
      <PokemonCard
        v-for="(pokemon, i) in store.topPokemons"
        :key="i"
        :rank="i"
        :name="pokemon.name"
        :url="pokemon.urlImg"
        class="col"
      />
    </div>
  </q-container>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

import { usePokemonStore } from "../stores/pokemon-store";

const store = usePokemonStore();

// a separate chunk is created for vue component and its dependencies.
// it is only fetched on demand when the async component is
// rendered on the page.
const PokemonCard = defineAsyncComponent(() => import("./PokemonCard.vue"));

defineOptions({
  name: "PokemonCards",
});
</script>
<style lang="scss">
.card-wrapper {
  margin-top: -15%;
}
</style>
