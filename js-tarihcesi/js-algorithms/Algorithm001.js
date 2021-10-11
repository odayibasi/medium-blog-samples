let dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

dayNames.forEach((el, index) =>
  console.log(`Index:${index} ${dayNames[index]}`)
);

function dayOfX(dayName, X) {
   console.log('dayOfX func called', dayName, X);
   const index = dayNames.findIndex((el) => el == dayName);
   const newIndex = (index + X) % 7;
   console.log('index:' + index + ' newIndex:' + newIndex);
   return dayNames[newIndex];
}

console.log('Day Of X Wed', dayOfX('Wed', 2));
console.log('Day Of X Sat', dayOfX('Sat', 5));
