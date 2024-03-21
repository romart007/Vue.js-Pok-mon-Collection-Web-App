<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container
      class="pokemon-details flex justify-center items-center bg-fixed"
    >
      <q-card class="my-card" flat bordered>
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
            <div class="text-overline">Overview</div>
            <div class="text-h5 q-mt-sm q-mb-xs text-capitalize">
              {{ store.pokemon.name }}
            </div>
            <div class="text-caption">
              <p>
                This Pokémon possesses an array of captivating details, each
                intricately woven into its essence.
              </p>
              <p>
                From its distinctive characteristics to its unique abilities,
                every facet contributes to its remarkable identity.
              </p>
              <div>
                Types: <q-badge color="green">{{ types }}</q-badge>
              </div>
              <div>
                Abilities: <q-badge color="green">{{ abilities }}</q-badge>
              </div>
              <div>
                Total Base Stats:
                <q-badge color="green">{{ totalBaseStats }}</q-badge>
              </div>
              <div>
                Height:
                <q-badge color="green">{{ store.pokemon.height }}</q-badge>
              </div>
              <div>
                Base experience:
                <q-badge color="green">{{
                  store.pokemon.base_experience
                }}</q-badge>
              </div>

              <div>
                Species:
                <q-badge color="green">{{
                  store.pokemon.species?.name
                }}</q-badge>
              </div>
            </div>
          </q-card-section>

          <q-card-section class="col-5 flex flex-center">
            <q-img class="rounded-borders" :src="image" />
          </q-card-section>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn flat round icon="event" />
          <q-btn flat> Checkout </q-btn>
          <q-btn flat color="primary">
            <router-link to="/">More</router-link>
          </q-btn>
        </q-card-actions>
      </q-card>
    </q-page-container>
  </q-layout>
</template>

<script async setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import { usePokemonStore } from "../stores/pokemon-store";

defineOptions({
  name: "PokemonDetails",
});

const store = usePokemonStore();

const route = useRoute();
const id = route.params.id;
store.fetchPokemonData(id);

const image = computed(
  () => store.pokemon?.sprites?.other?.dream_world?.front_default
);

const abilities = computed(() =>
  store.pokemon?.abilities?.map((item) => item.ability.name).join(", ")
);

const types = computed(() =>
  store.pokemon?.types?.map((item) => item.type.name).join(", ")
);

const totalBaseStats = computed(() =>
  store.pokemon?.stats?.reduce((acc, curr) => acc + curr.base_stat, 0)
);
</script>

<style lang="scss">
.pokemon-details {
  min-height: 100vh;
}
</style>
