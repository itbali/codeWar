let str = "Hi!! hi!!!";
let n = str.length - 1;
let newStr = "";

while (str[n] == "!") {
    newStr = str[n] + newStr;
    n--;
}
while (n >= 0) {
    if (str[n] != "!") {
        newStr = str[n] + newStr;
        n--;
    } else {
        n--;
    }
}
console.log(newStr);
