<template>
  <div class="accordion__item">
    <div class="accordion__bx">
      <div
        :class="['accordion__header', { 'is-active': showAccordion }]"
        @click="toggleAccordion"
      >
        <slot name="accordion-title"></slot>
      </div>

      <div class="accordion__content" v-show="showAccordion">
        <div class="accordion__inner">
          <slot name="accordion-content"></slot>
        </div>
        <slot name="accordion-footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const showAccordion = ref(props.show);
    const toggleAccordion = () => (showAccordion.value = !showAccordion.value);
    return {
      showAccordion,
      toggleAccordion,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/accordion.scss";
</style>
