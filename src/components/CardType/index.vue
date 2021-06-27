<template>
  <div class="card-type">
    <div class="card-type__logo">
      <img src="@/assets/images/logo_card.svg" alt="aspire" />
    </div>
    <h3 class="card-type__name">Mark Hennry</h3>
    <ul class="card-type__code">
      <li class="card-type__code-item">
        <span class="card-type__code-dot"></span>
        <span class="card-type__code-dot"></span>
        <span class="card-type__code-dot"></span>
      </li>
      <li class="card-type__code-item">
        <span class="card-type__code-dot"></span>
        <span class="card-type__code-dot"></span>
        <span class="card-type__code-dot"></span>
      </li>
      <li class="card-type__code-item">
        <span class="card-type__code-dot"></span>
        <span class="card-type__code-dot"></span>
        <span class="card-type__code-dot"></span>
      </li>
      <li class="card-type__code-item">2020</li>
    </ul>
    <div class="card-type__expire">
      <dl class="card-type__expire-item">
        <dt class="card-type__expire-name">Thru:</dt>
        <dd class="card-type__expire-cnt">12/20</dd>
      </dl>
      <dl class="card-type__expire-item">
        <dt class="card-type__expire-name">CVV:</dt>
        <dd class="card-type__expire-cnt card-type__expire-cnt--cw">***</dd>
      </dl>
    </div>
    <div class="card-type__type">
      <img src="@/assets/images/visa_card.svg" alt="Visa" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./styles/card-type.scss";
</style>
