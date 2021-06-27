<template>
  <div class="card-top">
    <div class="card-top__left">
      <div class="total-balance">
        <p class="total-balance__title">Available balance</p>
        <dl class="total-balance__bx">
          <dt class="total-balance__bage">S$</dt>
          <dd class="total-balance__val">3,000</dd>
        </dl>
      </div>
    </div>
    <div class="card-top__right">
      <button class="btn btn--primary btn--add">
        <span class="btn__txt">New card</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./styles/card-top.scss";
</style>
