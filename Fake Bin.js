let newStr = "";
function FakeBin(stringOfNumbers) {
    let arrayOfNumbers = stringOfNumbers.toString().split("");
    arrayOfNumbers.forEach((element) => {
        if (+element < 5) {
            newStr += 0;
        } else {
            newStr += 1;
        }
    });
    console.log(newStr);
}
