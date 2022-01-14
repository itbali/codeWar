let a = { Mike: "aye", Joe: "nay", Johnson: "aye", Peter: "aye" };
let numberOfPrirates = Object.keys(a).length;
let i = 0;

for (elem in a) {
    console.log(a[elem]);
    if (a[elem] == "aye") {
        i = i + 1;
    }
}
if (numberOfPrirates == i) {
    console.log("Fire");
} else {
    console.log("Shiver me timbers!");
}
