function odd_even(num) {
    if (typeof num !== 'number' || !Number.isInteger(num)) {
      return "Invalid input. Please provide an integer.";
    }
  
    if (num % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  
  // Example usage:
  console.log(odd_even(4)); // Output: "Even"
  console.log(odd_even(7)); // Output: "Odd"
  console.log(odd_even(0)); // Output: "Even"
  console.log(odd_even(-3)); // Output: "Odd"
  console.log(odd_even("hello")); // Output: "Invalid input. Please provide an integer."
  