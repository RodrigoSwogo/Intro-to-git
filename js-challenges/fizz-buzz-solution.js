// simple fizz buzz
var output = '';
for (var i = 1; i < 101; i++) {
    output = '';

    if (!(i % 3)) output += 'Fizz';
    if (!(i % 5)) output += 'Buzz';

    console.log(output === '' ? i : output );
}

// forEach fizz buzz
var output = '',
    myArr = [];

for (var i = 1; i < 101; i++) {
    myArr.push(i);
}

myArr.forEach(function (num) {
    output = '';

    if (!(num % 3)) output += 'Fizz';
    if (!(num % 5)) output += 'Buzz';

    console.log(output === '' ? num : output );
});