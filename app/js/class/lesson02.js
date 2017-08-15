/*
let obj={};
obj[Symbol.iterator]=function* (){
    yield 1;
    yield 2;
    yield 3;
};

for(let value of obj){
    console.log('value',value);
}

*/

let obj = {};
obj[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};

for(let value of obj){
    console.log(value);
}

