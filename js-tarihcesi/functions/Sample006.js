function sum(numbers){
    let toplam=0; numbers.forEach(el=>toplam+=el);return toplam;
}
console.log(sum([2,4,6,5])); //17



function sumRest(...numbers){
   let toplam=0; numbers.forEach(el=>toplam+=el);return toplam; 
}
console.log(sumRest(2,4,6,5))//17