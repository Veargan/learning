function binarySearch(arr, item) {
  if (!arr || arr.length === 0) {
    return null;
  }
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = parseInt((low + high) / 2);
    let guess = arr[mid];

    if (guess === item) {
      return mid;
    } else if (guess < item) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return null;
}
