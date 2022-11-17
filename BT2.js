function sayhi() {
    const languageCode = "en";
    if (typeof languageCode != "string") {
        console.log("Nhập sai");
        return -1;
    }
        if (languageCode === 'en') {
            return "Hello"
    } 
       else if (languageCode === 'vi') {
            return "Xin chào"
    }
       else if (languageCode === 'fr') {
            return "Boujour"
    }
     else   if (languageCode === 'cn') {
            return "Nǐn hǎo"
    }
      else  if (languageCode === 'ja') {
            return "konnichiwa"
    }
     else   if (languageCode === 'ko') {
            return "Anyoung haseyo"
    }
}
sayhi();
console.log(sayhi());