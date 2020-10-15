function createPhoneNumber(numbers = [1, 2, 3, 3, 6, 7, 8, 9, 0, 5]){
    const numbresString = numbers.join().replace(/,/g, "");
    return `(${numbresString.substring(0,3)}) ${firstGroup(numbresString)}-${secondGroup(numbresString)}`;
}

function firstGroup(numbers){
    return numbers.length === 10 ? numbers.substring(3,6) : numbers.substring(3,5)
}

function secondGroup(numbers){
    return numbers.length === 10 ? numbers.substring(6,10) : numbers.substring(5,9)
}

console.log(createPhoneNumber());