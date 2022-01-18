function symmetricPoint(p, q) {
    let p = [0, 0];
    let q = [1, 1];

    let pd = [];

    if (p[0] - q[0]) {
        pd[0] = q[0] - p[0];
    } else {
        pd[0] = p[0] - q[0];
    }

    if (p[1] - q[1]) {
        pd[1] = q[1] - p[1];
    } else {
        pd[1] = p[1] - q[1];
    }

    let p1 = [q[0] + pd[0], q[1] + pd[1]];
    console.log(p1);
}
