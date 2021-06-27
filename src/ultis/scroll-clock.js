const scrollClock = () => {
  const $body = document.querySelector("body");
  const classIsModalOpen = "is-modal-open";
  const classIos = "ios";
  let scrollPosition = 0;
  const sizeScrollBar =
    window.innerWidth - document.documentElement.clientWidth;
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  return {
    disableScroll() {
      scrollPosition = window.pageYOffset;
      $body.classList.add(classIsModalOpen);
      $body.style.paddingRight = `${sizeScrollBar}px`;
      if (iOS) {
        $body.classList.add(classIos);
        $body.style.top = `-${scrollPosition}px`;
      }
    },
    enableScroll() {
      $body.style.paddingRight = "";
      $body.classList.remove(classIsModalOpen);
      if (iOS) {
        $body.classList.remove(classIos);
        $body.style.removeProperty("top");
        window.scrollTo(0, scrollPosition);
      }
    },
  };
};

export default scrollClock;
