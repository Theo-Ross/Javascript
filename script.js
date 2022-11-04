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