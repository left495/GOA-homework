


// 1)შექმენი ფუნქცია calculatePrice(price, quantity).

// price — პროდუქტის ფასი
// quantity — რაოდენობა
// ფუნქციამ უნდა დააბრუნოს საბოლოო ფასი.
// თუ quantity არ გადაეცა, default მნიშვნელობა იყოს 1.
// ფუნქცია გამოიძახე მინიმუმ 3 სხვადასხვა არგუმენტით.

// function calculatePrice(price, quantity=1){
//     return price*quantity
// }


// console.log(calculatePrice(2,3))
// console.log(calculatePrice(4,7))
// console.log(calculatePrice(1,8))


// 2)შექმენი ფუნქცია getResult(name, score).

// ფუნქციამ უნდა დააბრუნოს:

// თუ ქულა 90 ან მეტია → "name: Excellent"
// თუ 70–89 → "name: Good"
// თუ 50–69 → "name: Passed"
// თუ 50-ზე ნაკლებია → "name: Failed"

// score თუ არ გადაეცა, default მნიშვნელობა იყოს 0.

// გამოიძახეთ ფუნქცია სხვადასხვა არგუმენტებით 


// function getResult(name, score=0){
//     if (score>=90){
//         return name+': Excellent'
//     }else if (score>=70){
//         return name+': Good'
//     }else if (score>=50){
//         return name+': Passed'
//     }else{
//         return name+': Failed'
//     }
// }



// console.log(getResult('tsotne',70));
// console.log(getResult('giorgi',100));
// console.log(getResult('irakli'));



// 3)შექმენი ფუნქცია:

// calculateShipping(price, shipping = 10)

// წესი:

// თუ პროდუქტის ფასი 100 ან მეტია → მიწოდება უფასოა.
// სხვა შემთხვევაში დაემატოს shipping.
// ფუნქციამ უნდა დააბრუნოს საბოლოო თანხა.

// გამოიძახე სხვადასხვა სიტუაციაში, მათ შორის საკუთარი shipping მნიშვნელობის გადაცემით.

// function calculateShipping(price, shipping = 10){
//     if (price>=100){
//         return price
//     }else {
//         return price+shipping
//     }
// }


// console.log(calculateShipping(110,20))
// console.log(calculateShipping(90))
// console.log(calculateShipping(37,63))



// 4)შექმენი ფუნქცია:

// checkAge(name, age = 18)

// ფუნქციამ უნდა დააბრუნოს:

// 18 ან მეტი → "name is adult"
// 18-ზე ნაკლები → "name is minor"

// შემდეგ გამოიძახე ფუნქცია მინიმუმ 4-ჯერ.

// function checkAge(name, age = 18){
//     if(age>=18){
//         return name+' is adult'
//     }else{
//         return name+' is minor'
//     }
// }

// console.log(checkAge('tsotne',15))

// console.log(checkAge('akaki'))

// console.log(checkAge('vaxo',5))



// 5)შექმენი ფუნქცია:

// addPoints(score, points = 10)

// ფუნქციამ უნდა:

// მიიღოს არსებული ქულა.
// დაამატოს points.
// დააბრუნოს ახალი ქულა.


// function addPoints(score, points = 10){
//     return score+points
// }

// console.log(addPoints(1000,-940))
// console.log(addPoints(53,30))



// 6)შექმენი ფუნქცია:

// createMessage(name, message = "Hello")

// ფუნქციამ უნდა დააბრუნოს:

// Hello, Goga!

// ან თუ სხვა message გადაეცა:

// Welcome, Goga!

// function createMessage(name, message = "Hello"){
//     return message+', '+name
// }

// console.log(createMessage('tsotne','welcome'))
// console.log(createMessage('goga'))



// 7)შექმენი ფუნქცია:

// calculateDiscount(price, discount = 10)

// ფუნქციამ უნდა გამოითვალოს ფასდაკლების შემდეგ დარჩენილი თანხა.

// function calculateDiscount(price, discount = 10){
//     return price-discount
// }

// console.log(calculateDiscount(159,29))
// console.log(calculateDiscount(35))
// console.log(calculateDiscount(259,59))



// 8)შექმენი ფუნქცია:

// convertTemperature(value, type = "C")

// თუ type არის "C" → Celsius გადააკეთე Fahrenheit-ში.

// ფორმულა:

// F = C * 9 / 5 + 32

// თუ type არის "F" → Fahrenheit გადააკეთე Celsius-ში.

// ფორმულა:

// C = (F - 32) * 5 / 9

// function convertTemperature(value, type = "C"){
//     if (type==='C'){
//         return value*9/5+32
//     }else{
//         return (value-32)*5/9
//     }
// }


// console.log(convertTemperature(35,'C'));
// console.log(convertTemperature(97,'F'));




// 9)შექმენი ფუნქცია calculateSalary(salary, bonus = 0).

// ფუნქციამ უნდა:

// მიიღოს ხელფასი;
// თუ ბონუსი არ გადაეცა, ბონუსი იყოს 0;
// თუ ხელფასი 1000-ზე ნაკლებია, ბონუსი დაუმატოს ორმაგად;
// სხვა შემთხვევაში ჩვეულებრივ დაუმატოს;
// დააბრუნოს საბოლოო ხელფასი.

// მაგალითად:

// calculateSalary(800, 100)  // 1000
// calculateSalary(1500, 200) // 1700
// calculateSalary(900)       // 900


// function calculateSalary(salary, bonus = 0){
//     if (salary<1000){
//         return salary+2*bonus
//     }else {
//         return salary+bonus
//     }
// }


// console.log(calculateSalary(800,100));
// console.log(calculateSalary(1500,200));
// console.log(calculateSalary(900));
