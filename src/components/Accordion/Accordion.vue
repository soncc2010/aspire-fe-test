<template>
  <div class="accordion">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      Accordion: {
        count: 0,
        active: 0,
      },
    };
  },
  provide() {
    return { Accordion: this.Accordion };
  },
};
</script>

<style lang="scss" scoped>
.accordion {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
