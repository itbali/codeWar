String.prototype.toAlternatingCase = function () {
    this.split("")
        .map((el) =>
            el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()
        )
        .join("");
    // Define your method here :)
};
