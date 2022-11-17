function myfunction() {
  const age = ; //nhâp tuổi
  if (typeof age !== "number" || (typeof age == "number" && age <= 0)) {
    console.log("Nhập sai");
    return -1;
  }
  if (6 > age || age >= 70) {
    console.log("Giá vé 0");
    return "Giá vé 0";
  }
  if (age >= 6 || age < 12) {
    console.log("Giá vé là 20.000 VND");
    return "Giá vé là 20.000 VND";
  }
  if (age > 12) {
    console.log("Giá vé 50.000 VND");
    return "Giá vé 50.000 VND";
  }
}

myfunction();
