function pigIt(str) {
    let newar = str.split(" ");
    let collar = [];
    let reg = /[a-zA-Z]/;
    newar.forEach((element) => {
        if (reg.test(element)) {
            collar.push((element + element[0] + "ay").substring(1));
        } else {
            collar.push(element);
        }
    });
    console.log(collar.join(" "));
}
