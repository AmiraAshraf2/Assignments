// ----------------------------------------- TASK 1 -----------------------------------------

function capitalizeWords(str) {
    if (typeof str !== "string") {
        return "Input must be a string";
    }

    // turn string into array of words using split(" ") 
    // then apply upper case to every first letter of each wrod using map()
    // finally merge the array of words into string again using join(" ")

    return str
        .split(" ")
        .map(word => {
            if (word.length === 0) return "";
            return word[0].toUpperCase() + word.slice(1);
        })
        .join(" ");
}

// ----------------------------------------- TASK 2 ----------------------------------------

function mergeSortedArrays(arr1, arr2) {

    // make sure the two values are arrays

    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Both inputs must be arrays";
    }

    let merged = arr1.concat(arr2);
    merged = merged.sort((a, b) => a - b);

    return merged;
}

// ----------------------------------------- TASK 3 ----------------------------------------

function sumOfSquares(arr) {
    if (!Array.isArray(arr)) {
        return "input must be array";
    }
    else if (arr.length == 0) {
        return 0;
    }

    let sum = arr.reduce((total, num) => total + Math.pow(num, 2));
    return sum;
}

// ----------------------------------------- TASK 4 ----------------------------------------

function filterArray(arr, callback) {
    if (!Array.isArray(arr)) {
        return "First value must be an array";
    }

    if (typeof callback !== "function") {
        return "Second value must be a function";
    }

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

// ----------------------------------------- TASK 5 ----------------------------------------

function mapArray(arr, callback) {
    if (!Array.isArray(arr)) {
        return "First value must be an array";
    }

    if (typeof callback !== "function") {
        return "Second value must be a function";
    }

    let result = [];

    for (let i = 0; i < arr.length; i++) {

        result.push(callback(arr[i]));
    }

    return result;
}

// ----------------------------------------- TASK 6 ----------------------------------------

function reduceArray(arr, callback, initialValue) {
    if (!Array.isArray(arr)) {
        return "First value must be an array";
    }

    if (typeof callback !== "function") {
        return "Second value must be a function";
    }

    let result = initialValue;

    for (let i = 0; i < arr.length; i++) {

        result += (result, callback(arr[i]));
    }

    return result;
}

// ----------------------------------------- TASK 7 ----------------------------------------

function forEachArray(arr, callback) {
    if (!Array.isArray(arr)) {
        return "First value must be an array";
    }

    if (typeof callback !== "function") {
        return "Second value must be a function";
    }

    for (let i = 0; i < arr.length; i++) {

        console.log(callback(arr[i]));
    }
}

// ----------------------------------------- TASK 8 ----------------------------------------

function findMax(arr) {
    if (!Array.isArray(arr)) {
        return "value must be an array";
    } else if (arr.length === 0) {
        return "The array must not be empty";
    }

    return Math.max(...arr);
}

// ----------------------------------------- TASK 9 ----------------------------------------

function mergeObjects(obj1, obj2) {
    if (
        typeof obj1 !== "object" || obj1 === null || Array.isArray(obj1) ||
        typeof obj2 !== "object" || obj2 === null || Array.isArray(obj2)
    ) {
        return "Both inputs must be objects and non-null";
    }

    let merged = {};

    for (let key in obj1) {
        merged[key] = obj1[key];
    }

    for (let key in obj2) {
        merged[key] = obj2[key];
    }

    return merged;
}



// ----------------------------------------- TASK 10 ----------------------------------------

function invertObject(obj) {
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
        return "input must be object and non-null";
    }

    let inverted = {}

    for (let key in obj) {
        inverted[obj[key]] = key;
    }
    return inverted;
}


// ----------------------------------------- TASK 11 ----------------------------------------

function omitKeys(obj, omit) {

    if (
        typeof obj !== "object" || obj === null || Array.isArray(obj)
    ) {
        return "first input must be object and non-null";
    }

    let result = {};

    for (let key in obj) {
        if (!omit.includes(key)) {
            result[key] = obj[key];
        }
    }

    return result;
}

// ----------------------------------------- TASK 12 ----------------------------------------

function pickKeys(obj, omit) {

    if (
        typeof obj !== "object" || obj === null || Array.isArray(obj)
    ) {
        return "first input must be object and non-null";
    }

    let result = {};

    for (let key in obj) {
        if (omit.includes(key)) {
            result[key] = obj[key];
        }
    }

    return result;
}


// ----------------------------------------- TASK 13 ----------------------------------------

function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return "value must be an array";
    }


    return arr.toReversed();
}

// ----------------------------------------- TASK 14 ----------------------------------------

function countOccurrences(arr, value) {
    if (!Array.isArray(arr)) {
        return "First value must be an array";
    }

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            count++;
        }

    }
    return count;
}
