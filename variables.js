/** vedantsagolale12 */

/*
Variables declared with let have Block Scope
Variables declared with let must be Declared before use
Variables declared with let cannot be Redeclared in the same scope
*/

// let keyword 
// global scope
let scope = "global";
const _scope= "global";

console.log(scope+" "+_scope);

// block-scope or local-scope
function _letblockScope(){
    let scope="local";
    let _scope="local";
    console.log(scope+" "+_scope);
}

_letblockScope();

/*
Variables defined with const cannot be Redeclared
Variables defined with const cannot be Reassigned
Variables defined with const have Block Scope
*/

// const keyword 
// global scope
const pi=3.141592653589793;
console.log(pi);

function _constblockScope(){
    const pi=3.14;
    console.log(pi);
}

_constblockScope();


/** let and const doesn't support hoisting */

// variable hoisting
console.log(todayDate.getDate());
var todayDate=new Date();

// functional Hoisting
console.log(client());
function client(api="https://example.com/api/"){
    return this.api=api;
}