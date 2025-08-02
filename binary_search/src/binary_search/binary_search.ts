export const binarySearch = (array: number[], target: number): number => {
  let left = 0,
    right = array.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (target < array[mid]) {
      right = mid - 1;
    } else if (target > array[mid]) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};
