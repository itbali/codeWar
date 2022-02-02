function well(x) {
    if (
        x.filter(function (element) {
            return element == "good";
        }).length == 0
    ) {
        return "Fail!";
    } else if (
        x.filter(function (element) {
            return element == "good";
        }).length == 1 ||
        x.filter(function (element) {
            return element == "good";
        }).length == 2
    ) {
        return "Publish!";
    } else {
        return "I smell a series!";
    }
}
