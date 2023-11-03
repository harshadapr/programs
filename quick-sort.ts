
function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = arr.filter((item) => item < pivot);
  const equal = arr.filter((item) => item === pivot);
  const right = arr.filter((item) => item > pivot);

  return quickSort(left).concat(equal, quickSort(right));
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray);
