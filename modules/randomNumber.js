//module one
//will not have any dependencies
//function to find a random number between 100 and 1000000
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

module.exports = randomNumber(100, 1000000);
