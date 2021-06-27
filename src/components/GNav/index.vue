<template>
  <nav class="g-nav">
    <ul class="g-nav__ls">
      <li class="g-nav__item">
        <router-link to="/" class="g-nav__link g-nav__link--home"  exact-to="/cards"
          >Home</router-link
        >
      </li>
      <li class="g-nav__item">
        <router-link
          :to="{ name: 'Cards' }"
          class="g-nav__link g-nav__link--card"
          >Cards</router-link
        >
      </li>
      <li class="g-nav__item">
        <router-link
          :to="{ name: 'Payments' }"
          class="g-nav__link g-nav__link--payment"
          >Payments</router-link
        >
      </li>
      <li class="g-nav__item">
        <router-link
          :to="{ name: 'Credit' }"
          class="g-nav__link g-nav__link--credit"
          >Credit</router-link
        >
      </li>
      <li class="g-nav__item">
        <router-link
          :to="{ name: 'Setting' }"
          class="g-nav__link g-nav__link--setting"
          >Settings</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import "./styles/g-nav";
</style>
