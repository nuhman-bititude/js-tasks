let repeat = (array) => {
  temp = array[0];
  count = 0;
  for (var i = 0; i < array.length; i++) {
    let tempCount = 0;
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] == array[j]) {
        tempCount++;
      }
    }
    if (count < tempCount) {
      count = tempCount;
      temp = array[i];
    }
  }
  return temp;
};
console.log(repeat([9, 3, 3, 9, 6, 6, 8, 3, 9, 9]));
