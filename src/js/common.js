let add = (a, b) => a + b;
console.log(add(4, 5));

const factorial = (n) => {
    if (n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  };