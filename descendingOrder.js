function descendingOrder(n) {
    //...
    let arrayFromString = n.toString().split("");
    let sortedArray = arrayFromString.sort();
    let sortedString = "";
    sortedArray.forEach((element) => {
        sortedString = element + sortedString;
    });
    console.log(sortedString);
}
