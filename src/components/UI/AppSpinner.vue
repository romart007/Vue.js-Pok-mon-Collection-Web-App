<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="dialog" :backdrop-filter="backdropFilter">
      <q-card-section>
        <q-spinner-gears size="100px" color="primary" />
      </q-card-section>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";

const dialog = ref(true);
const backdropFilter = "blur(1px)";
</script>
