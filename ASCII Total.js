function uniTotal(string) {
    let array = string.split("");
    let total = 0;

    array.forEach((element) => {
        total = total + element.charCodeAt(0);
    });

    return total;
}
