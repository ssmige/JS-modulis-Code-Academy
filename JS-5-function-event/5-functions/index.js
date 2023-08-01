function sayHello (name, age = 10) {
    console.log("Hello " + name + age);
    console.log('Your age is ' + age);
}

sayHello('Marius ' , 20);

sayHello('Andrius ');

function addNumbers(x, y) {
    const sum = x + y;
    return sum; //funkcijos vykdymas ties ta vienta sustoja
}

const sum = addNumbers(3, 5);
// console.log(sum);
console.log(addNumbers(6, 9));

function findBiggest(x, y){
 
    if (x > y) { return x;
    } else {
        return y;
    }
 }
 console.log(findBiggest(6, 7));

function checkAge(age) {
    if (age > 18) {
        return true;
       {} else
    }
}
