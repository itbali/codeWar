function titleCase(title, minorWords = " ") {
    let titleArray = title.toLowerCase().split(" ");
    let minorWordsArray = minorWords.toLowerCase().split(" ");
    let result = titleArray.map((w) => {
        let checker = 0;
        for (let i = 0; i <= minorWordsArray.length; i++) {
            if (w === minorWordsArray[i]) {
                checker++;
                console.log(checker);
                return w;
            }
        }
        if (checker === 0) {
            return w.charAt(0).toUpperCase() + w.slice(1);
        }
    });
    let resultString = result.join(" ");
    return resultString.charAt(0).toUpperCase() + resultString.slice(1);
}
