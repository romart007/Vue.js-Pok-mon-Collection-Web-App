<template>
  <q-container>
    <PaginatedTable
      :rows="store.pokemonList"
      :columns="tableColumn"
      showDetails
      custom-field="details"
      @on-btn-row-click="handleClick"
    />
  </q-container>
</template>

<script setup>
import { onMounted, defineAsyncComponent } from "vue";
import { usePokemonStore } from "../stores/pokemon-store";
import { useRouter } from "vue-router";

import { tableColumn } from "../data/TableHeaderConfig";

// a separate chunk is created for vue component and its dependencies.
// it is only fetched on demand when the async component is
// rendered on the page.
const PaginatedTable = defineAsyncComponent(() =>
  import("./UI/PaginatedTable.vue")
);

defineOptions({
  name: "PokemonList",
});

const store = usePokemonStore();

// Fetch data when the component mounts
onMounted(store.fetchPokemonList);

const router = useRouter();

// handle selected row and route properly
const handleClick = (id) => {
  router.push({
    path: `/pokemon/${id}`,
  });
};
</script>
