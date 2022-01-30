function findNeedle(haystack) {
    // your code here
    haystack.forEach((element) => {
        let i = 0;
        console.log(element);
        if (element == "needle") {
            console.log("found the needle at position " + i);
            i++;
        } else {
            i++;
        }
    });
}
