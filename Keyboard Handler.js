let is_caps = true;
let is_shift = true;
let Key = "a";

if (
    Key.toString().length != 1 ||
    typeof Key != "string" ||
    (Key == Key.toUpperCase()) & (typeof +Key == "NaN")
) {
    console.log("KeyError");
} else {
    if (is_shift == true) {
        if (typeof +Key == "NaN") {
            console.log(Key.toUpperCase());
        } else {
            console.log("symbol");
        }
    } else if (is_caps == true) {
        console.log(Key.toString().toUpperCase());
    }
}
