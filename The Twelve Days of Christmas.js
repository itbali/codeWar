function f() {
    let days = [
        "On the First day of Christmas",
        "On the Second day of Christmas",
        "On the Third day of Christmas",
        "On the Fourth day of Christmas",
        "On the Fivth day of Christmas",
        "On the Sixs day of Christmas",
        "On the Sevens day of Christmas",
        "On the Eights day of Christmas",
        "On the Nines day of Christmas",
        "On the Tens day of Christmas",
        "On the Elevens day of Christmas",
        "On the Twelfth day of Christmas",
    ];

    let gifts = [
        "A partridge in a pear tree",
        "Two turtle doves",
        "Three French hens",
        "Four calling birds",
        "Five gold rings",
        "Six geese a-laying",
        "Seven swans a-swimming",
        "Eight maids a-milking",
        "Nine ladies dancing",
        "Ten lords a-leaping",
        "Eleven pipers piping",
        "Twelve drummers drumming",
    ];

    let giftSum = [];
    for (let i = 0; i < 12; i++) {
        if (i === 0) {
            giftSum.push(gifts[i]);
            console.log(days[i] + "My true love sent to me\n" + gifts[i]) +
                "\n";
        } else {
            giftSum.push(gifts[i]);

            for (let i2 = 1; i2 < i; i2++) {
                let result =
                    days[i] +
                    "\nMy true love sent to me\n" +
                    giftSum[i] +
                    ", and\n" +
                    giftSum[i - 1] +
                    "\n";
            }

            console.log(result);
        }
    }

    return "On the First day of Christmas...";
}

// My true love sent to me
