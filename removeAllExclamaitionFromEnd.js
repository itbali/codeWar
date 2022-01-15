function remove(string) {
    let newString = "";
    let n = 0;
    let arrayOfSymbols = string.split("");
    while ((n = 1)) {
        if (arrayOfSymbols.length - 1 == "!") {
            arrayOfSymbols = arrayOfSymbols.slice(0, arrayOfSymbols.length - 1);
        } else {
            n = 1;
        }
    }
    arrayOfSymbols.forEach((element) => {
        newString = newString + element;
    });
    return newString;
}
