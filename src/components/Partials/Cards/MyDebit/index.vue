<template>
  <div class="grid-card">
    <div class="grid-card__col1">
      <card-slider />
      <div class="container-outer">
        <card-action />
      </div>
    </div>
    <div class="grid-card__col2">
      <div class="container-outer">
        <div class="container bg-white">
          <accordion class="accordion-card">
            <accordion-item class="accordion__item--card-detail">
              <template #accordion-title>
                <h3>Card details</h3>
              </template>
              <template #accordion-content>
                <card-transaction />
              </template>
              <template #accordion-footer>
                <button class="accordion-card__btn-more">
                  View all card details
                </button>
              </template>
            </accordion-item>
            <accordion-item
              :show="true"
              class="accordion__item--card-transaction"
            >
              <template #accordion-title>
                <h3>Recent transactions</h3>
              </template>
              <template #accordion-content>
                <card-transaction />
              </template>
              <template #accordion-footer>
                <button class="accordion-card__btn-more">
                  View all card transactions
                </button>
              </template>
            </accordion-item>
          </accordion>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  CardSlider,
  CardAction,
  CardTransaction,
} from "@/components/Partials/Cards/";
import { Accordion, AccordionItem } from "@/components/Accordion/";

export default {
  components: {
    CardSlider,
    CardAction,
    CardTransaction,
    Accordion,
    AccordionItem,
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/my-debit.scss";
</style>
