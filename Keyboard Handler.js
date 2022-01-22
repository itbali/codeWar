let is_caps = true;
let is_shift = true;
let Key = "1";

if (
    Key.toString().length != 1 ||
    typeof Key != "string" ||
    (Key == Key.toUpperCase()) & isNaN(+Key)
) {
    console.log("KeyError");
} else {
    if (is_shift == true) {
        if (isNaN(+Key)) {
            console.log(Key.toUpperCase());
        } else {
            console.log("symbol");
        }
    } else if (is_caps == true) {
        console.log(Key.toString().toUpperCase());
    }
}
