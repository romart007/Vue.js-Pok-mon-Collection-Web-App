<template>
  <q-page class="main-page">
    <header class="bg-fixed">
      <div class="container flex justify-between items-center">
        <h3>Top 3 Pokémon</h3>
        <ButtonDropdown />
      </div>
    </header>
    <div class="container q-px-md-lg">
      <PokemonCards />
      <PokemonList />
    </div>
  </q-page>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

// a separate chunk is created for vue component and its dependencies.
// it is only fetched on demand when the async component is
// rendered on the page.
const PokemonList = defineAsyncComponent(() =>
  import("components/PokemonList.vue")
);
const PokemonCards = defineAsyncComponent(() =>
  import("components/PokemonCards.vue")
);

const ButtonDropdown = defineAsyncComponent(() =>
  import("components/UI/ButtonDropdown.vue")
);

defineOptions({
  name: "IndexPage",
});
</script>
