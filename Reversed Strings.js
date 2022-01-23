function solution(str) {
    let array = str.split("");
    let i = array.length;
    let newStr = "";
    while ((i > 0, i--)) {
        newStr = newStr + array[i];
    }
    return newStr;
}
