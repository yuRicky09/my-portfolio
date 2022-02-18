import { defineStore } from "pinia";
import { ref } from "vue";
import { useSliderStore } from "@/stores/sliderStore";

export const useLightBoxStore = defineStore("lightBox", () => {
  const isZoomIn = ref(false);
  const zoomInImgUrl = ref(null);
  const headerEl = document.querySelector("header");
  const sliderStore = useSliderStore();

  function zoomInImg(imgUrl) {
    if (window.innerWidth < 1280) return;

    isZoomIn.value = true;
    zoomInImgUrl.value = imgUrl;

    const scrollbarWidth = getScrollbarWidth();
    removeScrollbar(scrollbarWidth);
  }

  function zoomOutImg() {
    isZoomIn.value = false;
    zoomInImgUrl.value = "";

    showScrollbar();

    sliderStore.autoPlay();
  }

  function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }

  function removeScrollbar(scrollbarWidth) {
    document.body.style.overflowY = "hidden";

    // 為了防止因scrollbar消失造成畫面偏移的問題，添加與scrollbar寬相等值的padding-right於body與header(因使用fixed)元素上。
    preventScreenShift(scrollbarWidth);
  }

  function preventScreenShift(scrollbarWidth) {
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    const paddingRight = parseInt(
      window.getComputedStyle(headerEl, null).getPropertyValue("padding-right")
    );
    headerEl.style.paddingRight = `${paddingRight + scrollbarWidth}px`;
  }

  function showScrollbar() {
    document.body.style.overflowY = "";
    document.body.style.paddingRight = "";
    headerEl.style.paddingRight = "";
  }

  return {
    isZoomIn,
    zoomInImgUrl,
    zoomInImg,
    zoomOutImg,
  };
});
