function iceBrickVolume(radius, bottleLength, rimLength) {
    let gipotenusa = radius * 2;
    let singleSide = Math.sqrt((gipotenusa * gipotenusa) / 2);
    let area = singleSide * singleSide;
    let volume = area * (bottleLength - rimLength);
    return Math.fround(volume);
}
