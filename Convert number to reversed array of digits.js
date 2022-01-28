function digitize(n) {
    //code here
    let newar = [];
    let ar = n.toString().split("").reverse();
    ar.forEach((element) => {
        newar.push(+element);
    });
    return newar;
}
