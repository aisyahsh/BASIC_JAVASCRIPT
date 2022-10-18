var theme = 2;

switch (theme) {
  case 1:
    console.log("Light");
    break;
  case 2:
    console.log("Dark");
    break;
  case 3:
    console.log("Nocturne");
    break;
  case 4:
    console.log("Terminal");
    break;
  default:
    console.log("Indigo");
}

// One line
console.log(
  theme == 1
    ? "Light"
    : theme == 2
    ? "Dark"
    : theme == 3
    ? "Nocturne"
    : theme == 4
    ? "terminal"
    : "indigo"
);
