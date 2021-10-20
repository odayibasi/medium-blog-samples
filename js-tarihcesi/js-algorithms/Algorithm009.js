const combinationUtil = (arr, data, start, end, index, r, result) => {
  if (index === r) {
    const subResult = [];
    for (let j = 0; j < r; j++) {
      subResult.push(data[j]);
    }
    result.push(subResult);
  }

  // replace index with all possible elements. The condition
  // "end-i+1 >= r-index" makes sure that including one element
  // at index will make a combination with remaining elements
  // at remaining positions
  for (let i = start; i <= end && end - i + 1 >= r - index; i++) {
    data[index] = arr[i];
    combinationUtil(arr, data, i + 1, end, index + 1, r, result);
  }
};

// The main function that prints all combinations of size r
// in arr[] of size n. This function mainly uses combinationUtil()
const fillCombination = (arr, n, r) => {
  // A temporary array to store all combination one by one
  let data = new Array(r);
  const result = [];
  // Print all combination using temporary array 'data[]'
  combinationUtil(arr, data, 0, n - 1, 0, r, result);
  return result;
};

const calculateAllCombination = (arr) => {
  const result = [];
  for (let i = 0; i <= arr.length; i++) {
    result.push(fillCombination(arr, arr.length, i));
  }
  return result.flat();
};

const arr = [1, 2, 3];
const result = fillCombination(arr, 3, 2);
console.log(result);
