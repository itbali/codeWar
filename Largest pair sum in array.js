let numbers = [-100, -29, -24, -19, 19];

let num1 = Math.max(...numbers);
let newar = [];
numbers.forEach((element) => {
    if (num1 != element) {
        newar.push(element);
    } else {
        num1 = undefined;
    }
});
let sum = Math.max(...numbers) + Math.max(...newar);
console.log(sum);
