// 1)შექმენი ფუნქცია sayHello, რომელიც აბრუნებს:
// "Hello, student!"
// შემდეგ ეს ფუნქცია შეინახე ცვლადში greeting.
// გამოიძახე greeting() და დაბეჭდე შედეგი.

// function sayHello(){
//     return "Hello, student!"
// }
// let greeting = sayHello
// console.log(greeting())


// 2)შექმენი:
// function add(a, b) {
//     return a + b;
// }
// შემდეგ:
// შექმენი calculate ცვლადი
// calculate-ს მიანიჭე add
// გამოიძახე calculate

// function add(a, b) {
//     return a + b;
// }
// let calculate = add
// console.log(calculate(9,1))


// 3)შექმენი ორი ფუნქცია:
// multiply(a, b)
// subtract(a, b)
// პირველმა უნდა დააბრუნოს ორი რიცხვის ნამრავლი, მეორემ — სხვაობა.
// შემდეგ:
// let operation = multiply;
// გამოიყენე operation 5 და 4-ზე.
// შემდეგ შეცვალე:
// operation = subtract;
// და ისევ გამოიყენე 5 და 4-ზე.

// let multiply = (a,b)=>{
//     return a*b
// }
// let subtract = (a,b)=>{
//     return a-b
// }
// let operation = multiply
// console.log(operation(5,4));
// operation = subtract
// console.log(subtract(5,4));




// 4)შექმენი სამი ფუნქცია:
// add(a, b)
// subtract(a, b)
// multiply(a, b)
// შემდეგ შექმენი ცვლადი:
// let operation;
// მას თავდაპირველად მიანიჭე add.
// გამოიძახე operation(20, 5).
// შემდეგ operation გადააკეთე multiply ფუნქციად და იგივე რიცხვებზე ისევ გამოიძახე.
// ბოლოს operation გადააკეთე subtract ფუნქციად.
// შედეგები უნდა იყოს:
// 25
// 100
// 15

// function add(a, b){
//     console.log(a+b);
// }
// function subtract(a, b){
//     console.log(a-b);
// }
// function multiply(a, b){
//     console.log(a*b);
// }
// let operation = add
// operation(20,5)
// operation = multiply
// operation(20,5)
// operation = subtract
// operation(20,5)



// 5)function calculate(a, b, operation) {
//     // აქ უნდა გამოიყენო operation
// }
// ასევე შექმენი:
// add(a, b)
// multiply(a, b)
// calculate()-ს გადასცი სხვადასხვა ფუნქცია რომელიც უნდა გახდეს operation პარამეტრის მნშვნელობა.
// მაგალითად:
// calculate(5, 3, add)
// calculate(5, 3, multiply)
// შედეგი უნდა იყოს:
// 8
// 15

// function calculate(a, b, operation) {
//     operation(a,b)
// }
// function add(a, b){
//     console.log(a+b)
// }
// function multiply(a, b){
//     console.log(a*b);
// }
// calculate(5, 3, add)
// calculate(5, 3, multiply)



// 6)double(number)
// square(number)
// negative(number)
// რომლებიც შესაბამისად:
// გააორმაგებს რიცხვს
// აიყვანს კვადრატში
// გახდის უარყოფითს
// შემდეგ შექმენი:
// function processNumber(number, operation) {
// }
// operation უნდა იყოს ფუნქცია.
// მაგალითად:
// processNumber(5, double)
// processNumber(5, square)
// processNumber(5, negative)
// მოსალოდნელი შედეგები:
// 10
// 25
// -5

// function processNumber(number, operation) {
//     operation(number)
// }
// function double(number){
//     console.log(number*2);
// }
// function square(number){
//     console.log(number**2);
// }
// function negative(number){
//     console.log(-number);
// }
// processNumber(5, double)
// processNumber(5, square)
// processNumber(5, negative)

// 7)შექმენი სამი ფუნქცია:
// passed(score)
// failed(score)
// passed უნდა დააბრუნოს:
// "Student passed"
// ხოლო failed:
// "Student failed"
// შემდეგ შექმენი:
// function showResult(score, resultFunction) {
// }
// resultFunction უნდა იყოს ფუნქცია, რომელსაც შენ გადასცემ.
// გამოიყენე:
// showResult(90, passed)
// showResult(40, failed)

// function passed(score){
//     console.log('student passed');
    
// }
// function failed(score){
//     console.log('student failed');
    
// }

// function showResult(score, resultFunction) {
//     resultFunction(score)
// }

// showResult(90, passed)
// showResult(40, failed)


// 8)მოცემულია:
// let price = 200;
// შექმენი სამი ფუნქცია:
// discount(price)
// tax(price)
// shipping(price)
// ფუნქციებმა უნდა გააკეთონ:
// discount → 20-ით შეამციროს ფასი
// tax → 18 დაუმატოს
// shipping → 30 დაუმატოს
// შემდეგ შექმენი:
// function processPrice(price, operation) {
// }
// გამოიყენე სამივე ფუნქცია ცალ-ცალკე.
// მაგალითად:
// processPrice(price, discount)
// processPrice(price, tax)
// processPrice(price, shipping)

// let price = 200;
// function discount(price){
//     console.log(price-=20)
// }
// function tax(price){
//     console.log(price+=18)
// }
// function shipping(price){
//     console.log(price+=30)
// }
// function processPrice(price, operation) {
//     operation(price)
// }
// processPrice(price, discount)
// processPrice(price, tax)
// processPrice(price, shipping)


// 9)შექმენი:
// function transform(number, operation) {
// }
// და შემდეგ ეს ოთხი ფუნქცია:
// double(number)
// square(number)
// addTen(number)
// half(number)
// transform()-მა უნდა მიიღოს რიცხვი და ფუნქცია და დააბრუნოს შესაბამისი შედეგი.
// შემდეგ შეამოწმე:
// transform(20, double)
// transform(20, square)
// transform(20, addTen)
// transform(20, half)
// დამატებითი პირობა: transform()-ში არ უნდა დაწერო არც ერთი if და არც switch

// function transform(number, operation) {
//     operation(number)
// }

// function double(number){
//     console.log(number*2);
// }
// function square(number){
//     console.log(number**2);
// }
// function addTen(number){
//     console.log(number+10);
// }
// function half(number){
//     console.log(number/2);
// }

// transform(20, double)
// transform(20, square)
// transform(20, addTen)
// transform(20, half)