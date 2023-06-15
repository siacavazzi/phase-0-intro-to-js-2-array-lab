// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];


 function destructivelyAppendCat(name) { 
    cats.push(name);
 }

 function destructivelyPrependCat(name) {
    cats.unshift(name);
 }

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}


function appendCat(name) {
    let copy = [...cats]
    copy.push(name);
    return copy;
    
}

function prependCat(name) {
    let copycat = [...cats];
    copycat.unshift(name);
    return copycat;
}

function removeLastCat(name) {
    let copycat = [...cats];
    copycat.pop();
    return copycat;
    
}

function removeFirstCat(name) {
    let copycat = [...cats];
    copycat.shift();
    return copycat;
    
}

