let dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

function dayOfX(dayName,X){
   const index=dayNames.findIndex(el=>el==dayName);
   const newIndex= (index+X)%7;
   return dayNames[newIndex];
}


console.log(dayOfX('Wed',2));
console.log(dayOfX('Sat',5));
