let x1 = -5;
let y1 = 7;
let radius1 = 11;
let x2 = 3;
let y2 = 3;
let radius2 = 4;

let firstSide = bigSide(x1, x2);
let secondSide = bigSide(y1, y2);

let gipotenusa = Math.sqrt(firstSide * firstSide + secondSide * secondSide);

console.log(firstSide, secondSide, gipotenusa);

function bigSide(a, b) {
    if (a > b) {
        return a - b;
    } else {
        return b - a;
    }
}

if (gipotenusa > radius1 + radius2) {
    console.log("neperesek");
} else {
    console.log("peresek");
}
