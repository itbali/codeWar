const cannonsReady = (gunners) => {
    let numberOfPrirates = Object.keys(gunners).length;
    let i = 0;
    let answer = "";
    for (elem in gunners) {
        if (gunners[elem] == "aye") {
            i = i + 1;
        }
    }
    if (numberOfPrirates == i) {
        answer = "Fire!";
    } else {
        answer = "Shiver me timbers!";
    }

    return answer;
};
