<template>
  <div class="test-vue">
    <div class="container">
      <h2 class="test-vue__title">TEST FRONETEND (VUEJS)</h2>
      <ul class="test-popup">
        <li class="test-popup__item">
          <button
            class="test-popup__btn btn btn--primary"
            @click="showPopup('info', titleType.info, contactInfo)"
          >
            Show personal information
          </button>
        </li>
        <li class="test-popup__item">
          <button
            class="test-popup__btn btn btn--warning"
            @click="showPopup('kill', titleType.kill, kills)"
          >
            Show skills
          </button>
        </li>
        <li class="test-popup__item">
          <button
            class="test-popup__btn btn btn--success"
            @click="showPopup('address', titleType.address, address)"
          >
            Show directions on google map
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive, inject } from "vue";

export default {
  setup() {
    const eventBus = inject("eventBus");

    const titleType = reactive({
      info: "Personal Information",
      kill: "My Kills",
      address: "My address",
    });

    const contactInfo = reactive({
      name: "NUYEN VAN SON",
      tel: "0777759924",
      skype: "soncc2010",
      gender: "Male",
      email: "soncc2010@gmail.com",
      birthday: "20/10/1986",
    });

    const kills = reactive({
      programming: {
        php: "70%",
        nodejs: "25%",
        javascript: "80%",
        scss: "90%",
      },
      datatabse: {
        mysql: "50%",
        mongodb: "25%",
      },
      framework: {
        jquery: "90%",
        laravel: "60%",
        vuejs: "85%",
        nuxtjs: "85%",
        reactjs: "80%",
        nextjs: "80%",
      },
      cms: {
        wordpress: "75%",
      },
      software: {
        photoshop: "65%",
        insulator: "50%",
        figma: "65%",
        xd: "65%",
        sketch: "50%",
      },
    });

    const address = reactive({});

    const showPopup = (type, title, data) => {
      eventBus.emit("pass-data-popup", { type, title, data });
    };

    return {
      contactInfo,
      kills,
      showPopup,
      titleType,
      address,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/test-vue";
</style>
