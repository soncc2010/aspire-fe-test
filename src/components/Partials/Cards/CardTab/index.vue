<template>
  <nav>
    <ul class="card-tab">
      <li class="card-tab__item">
        <a
          href="#"
          @click="currentTab = 'my-debit'"
          :class="[
            'card-tab__link',
            { 'is-active': currentTab === 'my-debit' },
          ]"
          ><span class="card-tab__txt">My debit cards</span></a
        >
      </li>
      <li class="card-tab__item">
        <a
          href="#"
          @click="currentTab = 'all-company'"
          :class="[
            'card-tab__link',
            { 'is-active': currentTab === 'all-company' },
          ]"
          ><span class="card-tab__txt">All company cards</span></a
        >
      </li>
    </ul>
  </nav>
  <div class="card-body">
    <transition name="component-fade" mode="out-in">
      <component :is="currentTab"></component>
    </transition>
  </div>
</template>

<script>
import { ref } from "vue";
import { MyDebit, AllCompany } from "@/components/Partials/Cards/";

export default {
  components: {
    "my-debit": MyDebit,
    "all-company": AllCompany,
  },
  setup() {
    const currentTab = ref("my-debit");
    return {
      currentTab,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/card-tab.scss";
</style>
