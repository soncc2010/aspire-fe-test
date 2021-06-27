<template>
  <div class="card-slider">
    <carousel :items-to-show="1" :breakpoints="breakpoints">
      <slide v-for="keyCard in cards" :key="keyCard">
        <button
          :class="`card-slider__btn-show card-slider__btn-show--${keyCard}`"
        >
          Show card number
        </button>
        <card-type :class="`card-type--${keyCard}`" />
      </slide>

      <template #addons>
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script>
import { ref } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import CardType from "@/components/CardType/index.vue";

export default {
  components: {
    CardType,
    Carousel,
    Slide,
    Pagination,
  },
  setup() {
    const cards = ref(["visa", "master", "debit"]);
    return {
      cards,
      breakpoints: {
        639: {
          itemsToShow: 2,
        },
        992: {
          itemsToShow: 1,
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/card-slider.scss";
</style>
