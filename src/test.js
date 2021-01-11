function countSheeps(arrayOfSheep) {
  let count = 0;
  console.log(arrayOfSheep);

  for (let i = 0; i < arrayOfSheep.length; i++) {
    console.log(arrayOfSheep[i]);

    if (arrayOfSheep[i] === true) {
      count++;
    }
  }

  return count;
}

//Same solution with filter method:

const countSheeps = (sheepArray) => sheepArray.filter(Boolean).length;
