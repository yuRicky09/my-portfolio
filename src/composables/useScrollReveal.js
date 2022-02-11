import ScrollReveal from "scrollreveal";
import { onMounted, onBeforeUnmount } from "vue";

export function useScrollReveal(target, option) {
  onMounted(() => ScrollReveal().reveal(target, option));
  onBeforeUnmount(() => ScrollReveal().clean(target));
}
