<template>
  <q-table
    flat
    bordered
    title="Pokémon"
    row-key="name"
    class="q-my-xl"
    :rows="rows"
    :filter="filter"
    :columns="columns"
    v-model:pagination="pagination"
    hide-pagination
  >
    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td v-for="rowKeys in columns" :key="rowKeys.field" :props="props">
          <span>{{ props.row[rowKeys.field] }} </span>
          <q-btn
            v-if="rowKeys.field.includes(customField)"
            color="white"
            text-color="black"
            label="See Details"
            no-caps
            @click="handleBtnRowClick(props.row.id)"
          />
        </q-td>
      </q-tr>
    </template>
    <template v-slot:top-right>
      <q-input
        borderless
        dense
        debounce="300"
        v-model="filter"
        placeholder="Search"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </template>
  </q-table>

  <div class="row justify-start q-mt-md">
    <q-pagination
      v-model="pagination.page"
      direction-links
      color="grey-8"
      active-color="blue"
      outline
      :ellipses="true"
      :max="pagesNumber"
      size="sm"
      gutter="7px"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

defineOptions({
  name: "PaginatedTable",
});

const props = defineProps({
  rows: Array,
  columns: Array,
  showDetails: {
    type: Boolean,
    default: false,
  },
  // field to show when showDetails is enabled
  customField: {
    type: String,
    default: null,
  },
});

// define initial pagination
const pagination = ref({
  sortBy: "desc",
  descending: false,
  page: 1,
  rowsPerPage: 5,
});

// get pages number reactively
const pagesNumber = computed(() =>
  Math.ceil(props.rows?.length / pagination.value.rowsPerPage)
);

// handle button click on each row
const emit = defineEmits(["onBtnRowClick"]);

function handleBtnRowClick(e) {
  emit("onBtnRowClick", e);
}

// define filter for search
const filter = ref("");
</script>
