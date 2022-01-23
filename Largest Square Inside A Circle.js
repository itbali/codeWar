function areaLargestSquare(r) {
    let gipotenusa = r * 2;
    let singleSide = Math.sqrt((gipotenusa * gipotenusa) / 2);
    let area = Math.floor(singleSide * singleSide);
    return area;
}
