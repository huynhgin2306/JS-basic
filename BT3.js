function comparENumberS(a, b) {
    a = prompt("Nhập số a");
    b = prompt("Nhập số b"); 

    a = parseInt(a);
    b = parseInt(b);

    if (a>b)
    return 1;
    if (a=b)
    return 0;
    if (a<b)
    return -1;

}
comparENumberS(a, b)
console.log(comparENumberS(a, b));
