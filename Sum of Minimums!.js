function sumOfMinimums(arr) {
    let sum = 0;
    let minNum = undefined;
    arr.forEach((element) => {
        element.forEach((number) => {
            if (minNum > number) {
                minNum = number;
                console.log(number);
            } else {
            }
        });
        sum += minNum;
        console.log(sum);
    });
}
