// binary-search.ts

function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Not found
}

const sortedArray = [11, 12, 22, 25, 34, 64, 90];
const target = 25;
const index = binarySearch(sortedArray, target);
console.log(`Element ${target} found at index ${index}`);
