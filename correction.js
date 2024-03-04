const names = ["Alice","Bob","Charlie","Darlington","Emma","Fiona","George","Hannah","Joy","Julia"]

function count(arrNames){
    return arrNames.length;
}

function incCharlie(arrNames) {
    return arrNames.includes("Charlie");
}

function longest(arrNames){
    return arrNames.sort((a,b)=> a.length-b.length)[9];
}

function shortest(arrNames){
    return arrNames.sort((a,b)=> b.length-a.length)[8]
}

function capital(arrNames){
    return arrNames.map(name => name.toUpperCase())
}

function order(arrNames){
    return arrNames.sort()
}

function greater(arrNames){
    return arrNames.map(name=> name.length >5)[0]
}

function replc(arrNames){
    return arrNames.map(name => name === "Alice" ? "Eleanor" : name)
}

function ind(arrNames){
    return arrNames.indexOf("Emma")
}

function conc(arrNames){
    return arrNames.join()
}

console.log(count(names));
console.log(incCharlie(names));
console.log(longest(names));
console.log(shortest(names))
console.log(capital(names))
console.log(order(names))
console.log(greater(names))
console.log(replc(names))
console.log(ind(names))
console.log(conc(names))