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


// add elements on page
var html = '<ul class="my-list">' +
    '<li data-id="56">Apple</li>' +
    '<li data-id="79">Tomato</li>' +
    '<li data-id="13">Banana</li>' +
    '<li data-id="55">Pineapple</li>' +
    '<li data-id="10">Orange</li>' +
    '<li data-id="89">Coconut</li>' +
    '<li data-id="75">Mango</li>' +
    '<li data-id="47">Watermellon</li>' +
'</ul>';

document.body.insertAdjacentHTML('beforeend', html);

var listPoints = document.querySelectorAll('.my-list li');

// ############### //
// looping trough a node list
for (var i = 0; i < listPoints.length; i++) {
    var single = listPoints[i];

    console.log(single.textContent);
}

// using forEach
listPoints.forEach(function (single) {
    console.log(single.textContent);
});
// ############### //