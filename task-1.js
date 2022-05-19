// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7
function Area(a, b, c) {
  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
  console.log("Area is :", area);
}

Area(1, 1, 1);
