<template>
  <transaction v-for="(item, index) in items" :key="index" :item="item" />
</template>

<script>
import { ref } from "vue";
import Transaction from "@/components/Transaction/";
export default {
  components: {
    Transaction,
  },
  setup() {
    const items = ref([
      {
        name: "Hamleys",
        date: "20 May 2020",
        price: 150,
        type: "storage",
      },
      {
        name: "Hamleys",
        date: "20 May 2020",
        price: -150,
        type: "flight",
      },
      {
        name: "Hamleys",
        date: "20 May 2020",
        price: -150,
        type: "megaphone",
      },
      {
        name: "Hamleys",
        date: "20 May 2020",
        price: -150,
        type: "storage",
      },
    ]);
    return {
      items,
    };
  },
};
</script>
