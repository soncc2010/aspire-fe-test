<template>
  <nav class="card-action">
    <ul class="card-action__ls">
      <li class="card-action__item">
        <a href="#" class="card-action__link">
          <span class="card-action__icon card-action__icon--freeze"></span>
          <span class="card-action__txt">Freeze card</span>
        </a>
      </li>
      <li class="card-action__item">
        <a href="#" class="card-action__link">
          <span
            class="card-action__icon card-action__icon--set-spent-limit"
          ></span>
          <span class="card-action__txt">Set spend limit</span>
        </a>
      </li>
      <li class="card-action__item">
        <a href="#" class="card-action__link">
          <span class="card-action__icon card-action__icon--gpay"></span>
          <span class="card-action__txt">Add to GPay</span>
        </a>
      </li>
      <li class="card-action__item">
        <a href="#" class="card-action__link">
          <span class="card-action__icon card-action__icon--replace"></span>
          <span class="card-action__txt">Replace card</span>
        </a>
      </li>
      <li class="card-action__item">
        <a href="#" class="card-action__link">
          <span class="card-action__icon card-action__icon--cancel"></span>
          <span class="card-action__txt">Cancel card</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import "./styles/card-action.scss";
</style>
