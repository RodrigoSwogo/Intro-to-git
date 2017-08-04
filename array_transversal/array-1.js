var myArr = [
    'John',
    'Mike',
    'Wayne',
    'Stark',
    'Josh'
];

myArr.pop();

myArr.push('Jared');

myArr.shift();

myArr.unshift('Kush');

// reversing array
myArr.reverse();

// reset array


// ############### //
// looping trough an array with for loop
for (var i = 0; i < myArr.length; i++) {
    var single = myArr[i];

    console.log(single, i);
}

// forEach loop
myArr.forEach(function (single, i) {
    console.log(single, i);
});
// ############### //


// ############### //
// mapping an array with loop
for (var i = 0; i < myArr.length; i++) {
    myArr[i] = myArr[i][0]
}
console.log(myArr);

// reset array

// using map
console.log(
    myArr.map(function (single) {
        return single[0]
    })
);
// ############### //


// ############### //
// filtering an array
var newArr = []
for (var i = 0; i < myArr.length; i++) {
    if (myArr[i][0] === 'J')
        newArr.push(myArr[i]);
}
console.log(newArr);

// using filter
console.log(
    myArr.filter(function (single) {
        return single[0] === 'J';
    })
);
// ############### //