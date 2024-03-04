const numbers = [12,34,76,123,56,8,2,988,90,345]

sum = numbers.reduce((a, b) => a + b);
max = Math.max(...numbers)
min = Math.min(...numbers)
divisible = numbers.filter(num => num % 2 === 0).length
average = (sum/numbers.length).toFixed(2)
greater = numbers.filter(num => num > 50);
order = numbers.slice().sort((a,b)=> a - b);
even = numbers.every(num => num % 2 === 0);
index = numbers.indexOf(76);
order2 = numbers.slice().reverse()



console.log(sum)
console.log(max);
console.log(min);
console.log(divisible)
console.log(average);
console.log(greater);
console.log(order)
console.log(even)
console.log(index)
console.log(order2)
