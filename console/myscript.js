console.log("Hello World")

for (var i = 0; i <= 20; i = i + 1) {
if ( (i + 2) % 2 == 0 ) {
console.log(i + " is even");
} else {
console.log(i);}
};

var cars = ["Fred", "Mary", "Joe"];
console.log(cars.length);
for ( var n = 2; n >= 0; n = n - 1 ) {
  console.log(cars[n]);
  console.log([n])
document.getElementById("jOutput").innerHTML =
  document.getElementById("jOutput").innerHTML + " " + cars[n];
};

var numset1 = [2, 6, 9, 8];
var numset2 = [11, 1236, 9000, 434];
var numset3 = [];
for (y = 0; y < numset1.length; y++) {
  console.log (numset1[y] + numset2[y]);
  numset3[y] = numset1[y] + numset2[y];
  document.getElementById("array").innerHTML = numset3[y];
}

console.log(numset3);
