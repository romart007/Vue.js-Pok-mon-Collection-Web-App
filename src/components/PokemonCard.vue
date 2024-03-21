<template>
  <div>
    <q-card class="my-card">
      <q-card-section class="p">
        <div class="row no-wrap items-center">
          <span>Top {{ rank + 1 }}</span>
        </div>
        <div class="text-h6 q-mb-xs text-capitalize">{{ name }}</div>
      </q-card-section>

      <img :src="url" />
    </q-card>
  </div>
</template>

<script setup>
defineOptions({
  name: "PokemonCard",
});

const props = defineProps({
  rank: Number,
  name: String,
  url: String,
});
</script>
<style lang="scss">
.my-card {
  border-radius: 5%;

  img {
    max-height: 300px;
  }
}
</style>
