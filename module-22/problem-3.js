function paperRequirements(book1, book2, book3){
    let totalPage = book1 + book2 + book3;
    return totalPage;
}

let book1Paper = 100;
let book2Paper = 200;
let book3Paper = 300;

const totalPage = paperRequirements(book1Paper, book2Paper, book3Paper);
console.log(totalPage);

// function paperRequirements(paperRequirements){
//     return paperRequirements;
// }

// var bok1 = paperRequirements(1);
// console.log(bok1);