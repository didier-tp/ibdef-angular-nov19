let tabCh: string[] = [];
tabCh.push("abc");
tabCh.push("def");
tabCh.push("ijk");
//let tabCh2 = [ "abc" , "def" , "ijk"];

for (let ch of tabCh) {
    let chBis= `ch=${ch} , en majuscule = ${ch.toUpperCase()} `;
    console.log(chBis);
}