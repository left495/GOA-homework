// 1

// let makeNegative = num => num<=0 ? num : -num

// 2

// const stringToNumber = function(str){
//   return Number(str)
// }

// 3

// function greet(name){
//   return `Hello, ${name} how are you doing today?`
// }

// 4

// function makeUpperCase(str) {
//   return str.toUpperCase()
// }

// 5

// const rps = (p1, p2) => {
//   if (p1===p2){
//     return 'Draw!'
//   }else if (p1==='scissors' && p2==="paper" || p1==='paper' && p2==='rock' || p1==='rock' && p2==='scissors'){
//     return "Player 1 won!"
//   }else{
//     return "Player 2 won!"
//   }
// };

// 6

// function testEven(n) {
//     return n%2==0 ? true : false
// }

// 7)მოცემულია კოდი:

// let name = "Goga";

// function first() {
//     let age = 20;

//     function second() {
//         let city = "Tbilisi";

//         console.log(name);
//         console.log(age);
//         console.log(city);
//     }

//     second();
// }

// first();

// დავალება:

// მიუთითე თითოეული ცვლადის Scope.

// age,city--block scope; name--global scope

// რომელი ცვლადის გამოყენება შეუძლია second() ფუნქციას?

// სამივესი


// რომელი ცვლადის გამოყენება არ შეუძლია first() ფუნქციას?

// city-ს


// შეცვალე კოდი ისე, რომ city დაბეჭდო first() ფუნქციიდანაც.

// let name = "Goga";

// function first() {
//     let age = 20;
//     let city = "Tbilisi";
//     function second() {
        

//         console.log(name);
//         console.log(age);
//         console.log(city);
//     }

//     second();
// }

// first();


// 8)იპოვე შეცდომა Scope-ში
// let score = 100;

// if (score > 50) {
//     let message = "Passed";
//     console.log(message);
// }



// დავალება:
// ახსენი, რატომ იძლევა ეს კოდი შეცდომას და შეცვალე ისე, რომ "Passed" დაიბეჭდოს.

// შეცდომა არის რადგან messageცვლადი არის შექმნილი ბლოკში და იგი მხოლოდ იმ ბლოკში არსებობს სადაც შექმნილია

// 9)
// let x = 10;

// function outer() {
//     let x = 20;

//     function middle() {
//         let y = 30;

//         function inner() {
//             let x = 40;

//             console.log(x);
//             console.log(y);
//         }

//         inner();
//     }

//     middle();
// }

// outer();

// დავალება:

// რა დაიბეჭდება?-->30 და 40
// inner()-ში რომელი x გამოიყენება?-->40
// თუ inner()-დან let x = 40 წავშლით, რომელი x იქნება გამოყენებული?-->20
// თუ middle()-დანაც წავშლით let y = 30-ს, რა მოხდება console.log(y)-ზე?-->შეცდომა


// 10)
// let country = "Georgia";

// function school() {
//     let students = 20;

//     if (students > 10) {
//         let teacher = "Goga";

//         console.log(country);-->global
//         console.log(students);-->block
//         console.log(teacher);-->block
//     }
// }

// დავალება: თითოეულ console.log()-თან მიუწერე:

// country → ______ scope
// students → ______ scope
// teacher → ______ scope


// 11)კომენტარის სახით ახსსენი თუ რა არის scope როგორი სკოუპებია რსებობს და ყველა მნშვნელოვანი ინფორმაცია რაც ვისწავლეთ


// scope ინფორმაციას გვაწვდის ცვლადის შესახებ , არის თუარა ყველასთვის ხელმისაწვდომი იგი.