let newStr = "";
let stringOfNum = "252525252";
function FakeBin(stringOfNumbers) {
    let arrayOfNumbers = stringOfNumbers.split("");
    arrayOfNumbers.forEach((element) => {
        if (+element < 5) {
            newStr += 0;
        } else {
            newStr += 1;
        }
    });
    console.log(newStr);
}
