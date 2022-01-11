function compareArrays(arr1, arr2) {
  let result = arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);

  // Ваш код

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr = arr.filter((num) => num > 0).filter((num) => num % 3 === 0).map((num) => num * 10);

  // Ваш код

  return resultArr; // array
}
