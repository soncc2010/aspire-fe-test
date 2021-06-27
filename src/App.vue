<template>
  <div class="wrapper">
    <l-sidebar />
    <main class="main">
      <div class="container">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import LSidebar from "@/components/LSidebar/";

export default {
  name: "App",
  components: {
    LSidebar,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/app";
</style>
