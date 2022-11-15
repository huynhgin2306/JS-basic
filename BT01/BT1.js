const age = prompt("Please enter your age:");
//alert(age);
if (6>age && age>70) {
  prompt("Giá vé o");
  return "Giá vé 0";
} 
if (age>=6 && age<12) {
    prompt("Giá vé là 20.000 VND")
    return "Giá vé là 20.000 VND"
}
if (age>12) {
  prompt("Giá vé 50.000 VND")
  return "Giá vé 50.000 VND"
}