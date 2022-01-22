function handler(Key, isCaps = false, isShift = false) {
    if (
        Key.toString().length != 1 ||
        typeof Key != "string" ||
        (Key == Key.toUpperCase()) & isNaN(+Key)
    ) {
        return "KeyError";
    } else {
        if (isShift == true) {
            if (isNaN(+Key)) {
                return Key.toUpperCase();
            } else {
                switch (Key) {
                    case "1":
                        return "!";
                    case "2":
                        return "@";
                    case "3":
                        return "#";
                    case "4":
                        return "$";
                    case "5":
                        return "%";
                    case "6":
                        return "^";
                    case "7":
                        return "&";
                    case "8":
                        return "*";
                    case "9":
                        return "(";
                    case "0":
                        return ")";

                        break;

                    default:
                        break;
                }
            }
        } else if (isCaps == true) {
            return Key.toString().toUpperCase();
        }
    }
}
