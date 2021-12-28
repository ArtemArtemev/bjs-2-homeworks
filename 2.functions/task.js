// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  max = -Infinity;
  min = Infinity;
  sum = 0;

  for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
    max = arr[i]
    }
    if(arr[i] < min){
     min = arr[i]
	}
    sum +=arr[i] 
  }

  avg = sum / arr.length;
  avg = avg.toFixed(2);
  avg = parseFloat(avg);

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;
  sum = 0;

  for(let i = 0; i < arr.length; i++){
  sum += arr[i]
  }
  

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  let startSum;

  for(let i = 0; i < arrOfArr.length; i++){
      startSum = func(arrOfArr[i]);

      if(startSum > max){
       max = startSum;
	  }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let max = -Infinity;
  let min = Infinity;
  let difference = 0;

  for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
    max = arr[i]
    }
    if(arr[i] < min){
     min = arr[i]
	}

    difference = min - max;
    difference = Math.abs(difference)
  }

  return difference;
}
