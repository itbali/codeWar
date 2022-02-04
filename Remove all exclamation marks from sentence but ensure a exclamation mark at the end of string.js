function remove(string) {
    if (string[string.length - 1] != "!") {
        string = string.split("!").join("");
    } else {
        string = string.split("!").join("") + "!";
    }
    return string;
}
