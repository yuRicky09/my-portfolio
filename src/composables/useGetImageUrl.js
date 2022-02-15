export function useGetImageUrl(imgName) {
  return new URL(`../assets/images/${imgName}.png`, import.meta.url).href;
}
