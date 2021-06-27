<template>
  <div class="empty">
    <h2 class="heading">Payments</h2>
    <div class="empty__content">Empty content</div>
  </div>
</template>

<script>
import { useHead } from "@vueuse/head";

export default {
  setup() {
    useHead({
      title: "Payments",
    });
  },
};
</script>
