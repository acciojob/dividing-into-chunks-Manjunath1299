const divide = (arr, n) => {
  const result = [];
  let currentSum = 0;
  let currentSubarray = [];

  for (const num of arr) {
 
    if (currentSum + num <= n) {
      currentSum += num;
      currentSubarray.push(num);
    } else {
   
      result.push([...currentSubarray]);
      currentSum = num;
      currentSubarray = [num];
    }
  }

  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
};

// Example usage:
const arr = [1, 2, 3, 4, 1, 0, 2, 2];
// const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, parseInt(n))));
