function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: Both parameters must be numbers.');
  }
  return a + b;
}

const result1 = add(1, 2); // Correct usage
console.log(result1); // Output: 3

try {
  const result2 = add(1, "2"); // Now throws an error
  console.log(result2);
} catch (error) {
  console.error(error.message); // Output: Invalid input: Both parameters must be numbers.
}

// Alternatively, use type guards or assertion functions for more robust handling: