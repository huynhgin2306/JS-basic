function myfunction() {
    n = prompt("Nhập số khách lên xe:"); 
    if (typeof n !== "number") {
      console.log("Nhập sai");
      return -1;
    }
    if (n > 4)
    return "đề nghị gọi taxi 7 chỗ";
    if (n <= 4)
    return "Đề nghị gọi taxi 4 chỗ";

}
myfunction();
console.log(myfunction());