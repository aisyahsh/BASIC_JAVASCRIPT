// Various condition
var i = 1;
var j = 1;
console.log("perulangan for");
for (; i <= 5; ) {
  console.log(i);
  i += 1;
}
console.log("\n");

// While looping
console.log("perulangan while");
while (j <= 51) {
  console.log(j);
  j += 1;
}
console.log("\n");

// Do while looping
console.log("perulangan do while");
var k = 1;
do {
  console.log(k);
  k += 1;
} while (k <= 3);

// perulangan dengan break
console.log("perulangan break");
var i = 1;
for (l = 1; l <= 5; l++) {
  console.log(l);
  if (l == 2) {
    break;
  }

  // perulangan dengan continue
  console.log("perulangan continue");
  var m = 1;
  for (m = 1; m <= 8; m++) {
    if (m == 2) {
      continue;
    }
  }
}
