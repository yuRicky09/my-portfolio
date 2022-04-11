export function useGetImageUrl(imgName) {
  if (!imgName) return;

  return new URL(`../assets/images/${imgName}.png`, import.meta.url).href;
}
