//Sync
function sumAndPrint(a, b) {
  const sum = a + b;
  console.log(`Toplam:${sum}`);
}

sumAndPrint(3, 4);

//Async
function sumAndPrint2(a, b) {
  const sum = a + b;
  setTimeout(() => {
    console.log(`Toplam:${sum}`);
  }, 2000);
}

sumAndPrint2(3, 5);

console.log('completed');


//Generator ...
//Kapsam Dışı Anlatılmayacak...
