function well(x) {
    if (
        x.filter(function (element) {
            return element == "bad";
        }).length == 0
    ) {
        return "Fail!";
    } else if (
        ar.filter(function (element) {
            return element == "bad";
        }).length == 1
    ) {
        return "Publish!";
    } else {
        return "I smell a series!";
    }
}
