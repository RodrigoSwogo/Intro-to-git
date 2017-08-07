/* We wanna make a programs that countes from 1 to 100 and outputs the numbers,
but every time one number is divisible by 3 we print out "Fizz"
and every time one number is divisible by 5 we print out "Buzz"
if the number is divisible by both we print out "FizzBuzz" */

/* Expected output
1
2
"Fizz"
4
"Buzz"
"Fizz"
7
8
"Fizz"
"Buzz"
11
"Fizz"
13
14
"FizzBuzz"
etc...
*/



for (var i = 1; i <= 100; i++) {

    if (!(i % 3) && !(i % 5)) {
        console.log("Fizz");
   }  else if (!(i % 5)) {
        console.log("Buzz");          
    } else if (!(i % 3)) {
        console.log("FizzBuzz");
    } else {
        console.log(i);
    }
}