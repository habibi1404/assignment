const numbers = [12,34,76,123,56,8,2,988,90,345]

sum = numbers.reduce((total, current) => total + current);
max = Math.max(...numbers)
min = Math.min(...numbers)
divisible = numbers.filter(num => num % 2 === 0).length
average = sum/numbers.length
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
console.log(order)
console.log(even)
console.log(index)
console.log(order2)


const names = ["Alice","Bob","Charlie","Darlington","Emma","Fiona","George","Hannah","Joy","Julia"]

const res = names.includes("Charlie");


const alphabetic = names.sort();

const grt = names.every(fiveCharacters)

function fiveCharacters(item){
    return item;
}

names.splice(0, 1,...['Eleanor']);

const ind = names.findIndex(findEmma);
function findEmma(value) {
    return value === "Emma"
}

const full = names.join();

console.log(res);
console.log(alphabetic);
console.log(grt);
console.log(names);
console.log(ind);
console.log(full);