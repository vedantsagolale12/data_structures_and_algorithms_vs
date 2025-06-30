/** vedantsagolale12 */

/** concepts covered : fucntions and arrow functions */

/**
 * A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)

The code to be executed, by the function, is placed inside curly brackets: {}
 */

let player = startGame();

function startGame(){
    return "Welcome to the game";
}

console.log(player);

/**
 * Arrow functions are a shorter way to write functions. They are defined with the arrow operator =>, followed by the parameter list and the function body.
The arrow operator is used to define a function that is a single expression. It is often used as a shorthand for a function that only returns a value.
 */

attack =() =>{
    return "You attacked the enemy";
}

cover = () =>{
    return "You covered the enemy";
}

gameOver = () => {
    return "Game Over";
}

// example usage 
console.log(attack());
console.log(cover());
console.log(gameOver());


