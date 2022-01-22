let Key = "a";
let isCaps = true;
let isShift = true;

if (
    Key.toString().length != 1 ||
    typeof Key != "string" ||
    (Key == Key.toUpperCase()) & isNaN(+Key)
) {
    return "KeyError";
} else {
    if (isShift == true) {
        if (isNaN(+Key)) {
            returnKey.toUpperCase();
        } else {
            switch (Key) {
                case "1":
                    return "!";
                    break;
                case "2":
                    return "@";
                    break;
                case "3":
                    return "#";
                    break;
                case "4":
                    return "$";
                    break;
                case "5":
                    return "%";
                    break;
                case "6":
                    return "^";
                    break;
                case "7":
                    return "&";
                    break;
                case "8":
                    return "*";
                    break;
                case "9":
                    return "(";
                    break;
                case "0":
                    return ")";
                    break;

                default:
                    return Key;
                    break;
            }
        }
    } else if (isCaps == true) {
        return Key.toString().toUpperCase();
    } else {
        return Key;
    }
}
