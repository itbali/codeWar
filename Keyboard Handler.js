let small = /[a-z]/;
let numbers = /[0-9]/;
let symbols = /[\-=\[\];'\\,.\/`]/;

if (small.test(Key) & (Key.length == 1)) {
    if (isCaps) {
        if (isShift) {
            return Key;
        } else {
            return Key.toUpperCase();
        }
    } else if (isShift) {
        return Key.toUpperCase();
    } else {
        return Key;
    }
} else if (numbers.test(Key) & (Key.length == 1)) {
    if (isShift) {
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
    } else {
        return Key;
    }
} else if (symbols.test(Key) & (Key.length == 1)) {
    if (isShift) {
        switch (Key) {
            case "-":
                return "_";
                break;
            case "=":
                return "+";
                break;
            case "[":
                return "{";
                break;
            case "]":
                return "}";
                break;
            case ",":
                return "<";
                break;
            case ".":
                return ">";
                break;
            case "/":
                return "?";
                break;
            case "\\":
                return "|";
                break;
            case "`":
                return "~";
                break;
            case ";":
                return ":";
                break;
            case "'":
                return '"';
                break;

            default:
                return Key;
                break;
        }
    } else {
        return Key;
    }
} else {
    return "KeyError";
}
