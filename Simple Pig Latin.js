function pigIt(str) {
    let newar = str.split(" ");
    let collar = [];
    newar.forEach((element) => {
        collar.push((element + element[0] + "ay" + " ").substring(1));
    });
    console.log(collar);
}
