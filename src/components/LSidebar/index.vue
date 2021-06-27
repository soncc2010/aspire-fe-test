<template>
  <div class="sidebar">
    <h1 class="sidebar__logo">
      <router-link to="/" class="sidebar__logo-link"
        ><img src="@/assets/images/logo.png" alt="Aspire"
      /></router-link>
    </h1>
    <p class="sidebar__des">
      Trusted way of banking for 3,000+ SMEs and startups in Singapore
    </p>
    <g-nav />
  </div>
</template>
<script>
import GNav from "@/components/GNav/";
export default {
  components: {
    GNav,
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/sidebar";
</style>
