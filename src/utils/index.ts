export function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// shuffle array and return new array
export function shuffleArrayAndReturn(array: any[]) {
  const result = [...array];
  shuffleArray(result);
  return result;
}
