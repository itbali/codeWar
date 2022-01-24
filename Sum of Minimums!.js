function sumOfMinimums(arr) {
    function sumOfMinimums(arr) {
        let sum = 0;
        arr.forEach((element) => {
            let minNum = element[0];
            element.forEach((number) => {
                if (number < minNum) {
                    minNum = number;
                } else {
                }
                // console.log("current number: " + number + "current min: " + minNum);
            });
            sum += minNum;
        });
        return sum;
    }
}
