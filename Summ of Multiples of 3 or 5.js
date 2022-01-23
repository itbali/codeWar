function solution(number) {
    number--;
    let sum = 0;
    for (let index = 0; index < number; number--) {
        if ((number % 3 == 0) & (number % 5 == 0)) {
            sum = sum + number;
        } else if (number % 5 == 0) {
            sum = sum + number;
        } else if (number % 3 == 0) {
            sum = sum + number;
        }
    }
    return sum;
}
