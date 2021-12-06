// Code your solutions in this file

const names = ["Guadalupe", "Ollie", "Aki"];
const action = 'surprise';

function writeCards(names) {
    let newArr = [];
    for (let x=0; x < names.length; x++) {
        newArr.push(`Thank you, ${names[x]}, for the wonderful ${action} gift!`);
        debugger;
    }
    return newArr;
}
writeCards(names);

function countDown(numb) {

    while (numb >= 0) {
        console.log(numb--);
    }

}
