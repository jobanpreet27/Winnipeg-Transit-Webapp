function stopsArraySearch(arr, key) {
  let index = -1;
  const arrLength = arr.length ? arr.length : 0;
  for (let i = 0; i < arrLength; i++) {
    if (arr[i].key === key) {
      index = i;
    }
  }
  return index;
}

export default stopsArraySearch;
