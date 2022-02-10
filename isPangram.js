function isPangram(string) {
    return string.toLowerCase().match(/([a-z])(?!.*\1)/g).length == 26
        ? true
        : false;
}
