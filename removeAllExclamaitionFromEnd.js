function remove(string) {
    let newString = "";
    let arrayOfSymbols = string.split("");
    while (arrayOfSymbols[arrayOfSymbols.length - 1] == "!") {
        arrayOfSymbols.splice(-1, 1);
    }
    arrayOfSymbols.forEach((element) => {
        newString = newString + element;
    });
    return newString;
}
