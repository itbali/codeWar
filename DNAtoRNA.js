function DNAtoRNA(dna) {
    let array = dna.split("");
    let rna = "";
    array.forEach((element) => {
        if (element == "T") {
            rna = rna + "U";
        } else {
            rna += element;
        }
    });

    return rna;
}
