// Cộng Hai số (Two SUM)

// công 2 số nguyên
let twosum = (valueA, valueB) => {
    if (checkNumber(valueA) && checkNumber(valueB)) {
        return valueA + valueB;
    }
    return false;
}

let twosumfloat = (valueA, valueB) => {
    if (Number(valueA) && Number(valueB)) {
        return valueA+valueB;
    }

    return false;
}

const checkNumber = (value) => {
    if (Number.isInteger(value)) {
        return value;
    }

    return false;
}

console.log(checkNumber(5));
console.log(twosum(4, 245));
console.log(twosumfloat(23.52, 42.55));