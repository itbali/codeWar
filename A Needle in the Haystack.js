function findNeedle(haystack) {
    let i = 0;
    let needlePosition = 0;
    haystack.forEach((element) => {
        if (element == "needle") {
            needlePosition = i;
        }
        i++;
    });
    return "found the needle at position " + needlePosition;
}
