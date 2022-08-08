// # Task

// Provide 3 unique implementations of the following function.

// **Input**: `n` - any integer 

// *Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`*.

// **Output**: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`.

var sum_to_n_a = function(n) {
    let sum = 0
    for (let i = 1; i <= n; i +=1){
      sum += i
    }
  return sum
};

var sum_to_n_b = function(n) {
  let sum = 0, i = 1  
  while (i<= n){
    sum += i  
    i += 1
  }
  return sum
};

var sum_to_n_c = function(n) {
    return n >= 0 ? sum_to_n_c(n-1) + n : 0
};

console.log(sum_to_n_a(5))
console.log(sum_to_n_b(5))
console.log(sum_to_n_c(5))