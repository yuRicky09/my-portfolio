import ScrollReveal from "scrollreveal";
import { onMounted } from "vue";

export function useScrollReveal(target, option) {
  onMounted(() => ScrollReveal().reveal(target, { cleanup: true, ...option }));
}
