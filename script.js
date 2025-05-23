 //answer would be 4
/* Type of Javascript Output

1. innerHTML     -----> Element tag of Html
2. innerTEXT     -----> Text of Html
3. document.write()  -----> Testing
4. alert() ------> Alert
5. console.log()    ----->   Debugging


Variables ---> they are used to store data.

1. var  ----> Old browsers use this
2. let ----> To be used by u for  data that can be changed
3. const -----> to be used for datas that cant be changed

Pry Data types in Javascript
1. String  ----> Text (always in quote)  '' ""
2. Number ----> 5, 5.34 
3. Boolean ----> true, false.
4. Null ----> null (No)
5. Undefined ----> no value given
6. Object ----> Group of Values
7. Array  ------> same types of single values


Basic Javascript Operators
1. Arithmetic Operators ( + , - , / , *, % (Modulus) )
2. Assignment Operators ( = , += , -= )
3. Comparison Operators ( ==, ===, !=, > , <)
*/

let a;
a = 5
console.log(a)

let boy = {
    name: 'Martins',
    age: 17,
    isStudent: true,
    address: 'Abuja',
};

console.log(boy)

let fruits = ['apple', 'banana', 'Mango', 'Orange', 'Pineapple']

console.log(fruits)

console.log( 6 % 2 ) // remainder

let b = 10; // = asssign
 b += 5  // += Add assign
 b -= 7.5 // -= Substract assign

 console.log(b)


console.log ( 5 == '5')        // == equal to
console.log ( 5 === '5')        // === strict equal to
console.log ( 5 != 3 )       // != not equal to
console.log ( 5 > 3 )       // > greater than
console.log ( 2 < 5 )       // > lesser than.

let name = 'Destiny'
let age = 15
const address = 'Benin'

console.log('My name is ' + name +', I am ' + age + ' i live in ' + address);