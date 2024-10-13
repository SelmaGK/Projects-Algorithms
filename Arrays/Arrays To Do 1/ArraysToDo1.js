// Push Front: 
function pushFront(arr, val) {
    for (let i = arr.length; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = val;
    return arr;
}

console.log(pushFront([5, 7, 2, 3], 8));
console.log(pushFront([99], 7));


function popFront(arr) {
    let firstValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    arr.length--;
    console.log(arr);
    return firstValue;
}

console.log(popFront([0, 5, 10, 15]));
console.log(popFront([4, 5, 7, 9]));


function insertAt(arr, index, val) {
    for (let i = arr.length; i > index; i--) {
        arr[i] = arr[i - 1];
    }
    arr[index] = val;
    return arr;
}

console.log(insertAt([100, 200, 5], 2, 311));
console.log(insertAt([9, 33, 7], 1, 42));


function removeAt(arr, index) {
    let removedValue = arr[index];
    for (let i = index; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length--;
    console.log(arr);
    return removedValue;
}

console.log(removeAt([1000, 3, 204, 77], 1));
console.log(removeAt([8, 20, 55, 44, 98], 3));


function swapPairs(arr) {
    for (let i = 0; i < arr.length - 1; i += 2) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    return arr;
}

console.log(swapPairs([1, 2, 3, 4]));
console.log(swapPairs(["Brendan", true, 42]));


function removeDupes(arr) {
    if (arr.length === 0) return arr;

    let uniqueIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[uniqueIndex]) {
            uniqueIndex++;
            arr[uniqueIndex] = arr[i];
        }
    }
    arr.length = uniqueIndex + 1; 
    return arr;
}

console.log(removeDupes([-2, -2, 3.14, 5, 5, 10]));
console.log(removeDupes([9, 19, 19, 19, 19, 19, 29]));
