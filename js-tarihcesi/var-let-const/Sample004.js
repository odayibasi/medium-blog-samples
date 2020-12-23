function calcSumAfterDouble(arr){
  var sum=0;
  for(var i=0;i<arr.length;i++){
     var doubleVal=arr[i]*2;
     sum+=doubleVal;
  }
  
  console.log(i);
  console.log(doubleVal)
  console.log(sum);
  return sum;
}

console.log(calcSumAfterDouble([2,3,4]));

