function scrollingText(text) {
    let stringLength = text.length;
    let newString = "";
    let n = 0;
    let i = 0;
    let t = 0;
    while (n < stringLength) {
        while (i < stringLength) {
            if (n + i < stringLength) {
                newString = newString + text[i + n];
                i++;
            } else {
                newString = newString + text[t];
                t++;
                i++;
            }
        }
        n++;
        i = 0;
        t = 0;
        console.log(newString.toUpperCase());
        newString = "";
    }
}
