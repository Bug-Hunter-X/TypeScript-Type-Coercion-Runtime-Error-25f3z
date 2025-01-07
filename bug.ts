function add(a: number, b: number): number {
  return a + b;
}

const result = add(1, "2"); // This will cause a runtime error
console.log(result); // This line might not even execute