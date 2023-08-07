function processPositiveNumbers(numbers) {
    let positiveNumbers = [];
    
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 0) {
            positiveNumbers.push(numbers[i]);
        } else {
            break; 
        }
    }
    
    return positiveNumbers;
}

let numbersArray = [5, 10, 3, -2, 8, 15, -7, 12, 0, 6];


let result = processPositiveNumbers(numbersArray);
console.log("positive number: ", result);
