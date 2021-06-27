<template>
  <card-top />
  <card-tab />
</template>
<script>
import { useHead } from "@vueuse/head";
import { CardTop, CardTab } from "@/components/Partials/Cards/";

export default {
  components: {
    CardTop,
    CardTab,
  },
  setup() {
    useHead({
      title: "Cards",
    });
  },
};
</script>
