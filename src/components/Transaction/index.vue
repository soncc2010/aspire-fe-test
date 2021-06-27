<template>
  <div :class="`transaction transaction--${item.type}`">
    <div class="transaction__icon">
      <span class="transaction__icon-type"></span>
    </div>
    <div class="transaction__cnt">
      <div class="transaction__bx">
        <h3 class="transaction__title">{{ item.name }}</h3>
        <p class="transaction__date">{{ item.date }}</p>
        <button class="transaction__btn" type="button">
          Charged to debit card
        </button>
      </div>
      <div>
        <p class="transaction__number transaction__number--up">+ S$ 150</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/transaction.scss";
</style>
