// 1. Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.

function isNumberPositive(number){
    if(number >0){
        return true;
    } else {
        return false;
    }

}

console.log(isNumberPositive(3))
console.log(isNumberPositive(-3))


// 2. Write a function that takes a number of days and converts it into an age.

function convertDaysToAge(number){
    const years = (number / 365)
    return years;
}

console.log(convertDaysToAge(3650))


// 3. Write a function that takes three numbers and returns the largest of the three numbers.

function getsLargestNumber(x,y,z){
    if ((x>y) & (x>z)) {
        return x;
     } else if ((y>x) & (y>z)) {
        return y;
     } else {
        return z;
     }
}

console.log(getsLargestNumber(10,12,8))


// 4. Write a function that takes an array of names and returns the last name from the array of names.

function getsLastName([]) {
    const lastName = names[names.length-1];
    return lastName;
}


console.log(getsLastName( names = ["Theo", "Felix", "Oscar", "Tilly"]))


// 5. Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.

function allNumbersPositive([]) {
    let result = true;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] <= 0) {
            result = false;
        }
    }
    return result;
}

console.log (allNumbersPositive( [numbers = [1, 2, 4, 5, 6, ]]));