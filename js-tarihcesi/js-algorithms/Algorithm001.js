let dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

function dayOfX(dayName,X){
   console.log(dayName, X);
   const index=dayNames.findIndex(el=>el==dayName);
   const newIndex= (index+X)%7;
   console.log(index, newIndex);
   return dayNames[newIndex];
}


console.log(dayOfX('Wed',2));
console.log(dayOfX('Sat',5));
