// 1)codacademy დაასრულეთ function თავი თლიანად

// 2)რიცხვის შემოწმება — Arrow Function

// შექმენი checkNumber single-line Arrow Function-ის სახით.

// ფუნქციამ მიიღოს რიცხვი და დააბრუნოს:

// "Positive" — თუ რიცხვი დადებითია
// "Negative" — თუ უარყოფითია
// "Zero" — თუ 0-ია



// let checkNumber = num => num>0 ? 'Positive' : num<0 ? 'Negative' : 'Zero'


// console.log(checkNumber(-9))
// console.log(checkNumber(0))
// console.log(checkNumber(9))


// 3)შექმენი getGrade ფუნქცია Function Expression-ის გამოყენებით.

// მიიღოს score და დააბრუნოს:

// 90–100 → "A"
// 80–89 → "B"
// 70–79 → "C"
// 60–69 → "D"
// 0–59 → "F"

// თუ ქულა 0-ზე ნაკლებია ან 100-ზე მეტია → "Invalid score".

// let getGrade = function(score){
//     switch (true){
//         case score>89 && score<101:
//             return 'A'
//         case score>79:
//             return 'B'
//         case score>69:
//             return 'C'
//         case score>59:
//             return 'D'
//         case score>=0:
//             return 'F'
//         default:
//             return "Invalid score"
//     }
// }

// console.log(getGrade(90))
// console.log(getGrade(80))
// console.log(getGrade(70))
// console.log(getGrade(60))



// 4)შექმენი checkWord multi-line Arrow Function-ის გამოყენებით.

// ფუნქციამ მიიღოს სიტყვა და:

// გადაიყვანოს lowercase-ში
// შეამოწმოს იწყება თუ არა "a"-თი
// თუ იწყება → დააბრუნოს "Starts with A"
// წინააღმდეგ შემთხვევაში → "Does not start with A"

// let checkWord = word =>{
//     word=word.toLowerCase()
//     return word.startsWith('a') ? "Starts with A" : "Does not start with A"
// }

// console.log(checkWord('tsotne'))
// console.log(checkWord('andria'))


// 5)შექმენი analyzeNumbers Function Expression-ის გამოყენებით.

// ფუნქციამ მიიღოს 3 რიცხვი და დააბრუნოს ყველაზე დიდი რიცხვი.

// მაგალითად:

// analyzeNumbers(15, 42, 27) //42

// let analyzeNumbers=function(num1,num2,num3){
//     if(num1>num2 && num1>num3){
//         return num1
//     }else if (num2>num1 && num2>num3){
//         return num2
//     }else{
//         return num3
//     }
// }


// console.log(analyzeNumbers(13,20,19))
// console.log(analyzeNumbers(50,38,10))
// console.log(analyzeNumbers(63,14,90))



// 6)შექმენი analyzeText multi-line Arrow Function.

// ფუნქციამ მიიღოს ტექსტი და დაკონსოლოს:

// ტექსტის სიგრძე
// uppercase ფორმა
// იწყება თუ არა "Hello"-თი


// let analyzeText = text =>{
//     console.log(text.length)
//     console.log(text.toUpperCase())
//     if(text.startsWith('Hello')){
//         return 'Start with Hello'
//     }else{
//         return 'Doesnt start with Hello '
//     }
// }

// console.log(analyzeText('Hello world'))
// console.log(analyzeText('my name is tsotne'))


// 7)მიიღოს:

// price, discount

// წესები:

// თუ discount ≥ 50 → "Discount too high"
// თუ discount < 0 → "Invalid discount"
// სხვა შემთხვევაში გამოითვალოს საბოლოო ფასი.

// function finalPrice(price,discount){
//     return discount>=50 ? "Discount too high" :
//     discount<0 ? "Invalid discount": price*discount/100
// }

// console.log(finalPrice(100,60))
// console.log(finalPrice(100,30))
// console.log(finalPrice(100,-10))


// 8)შექმენი validatePassword multi-line Arrow Function-ის გამოყენებით.

// ფუნქციამ მიიღოს პაროლი და შეამოწმოს:

// სიგრძე მინიმუმ 8 სიმბოლოა?
// შეიცავს თუ არა "@" სიმბოლოს?(მოიძიეთ საჭირო მეთოდი)
// იწყება თუ არა დიდი ასოთი?

// დააბრუნოს:

// "Strong password" — თუ სამივე პირობა სრულდება
// "Weak password" — სხვა შემთხვევაში

// let validatePassword=password=>{
//     if(password.length>=8 && password.includes('@') && password.startsWith(password[0].toUpperCase())){
//         return "Strong password"
//     }else{
//         return "Weak password"
//     }
// }


// console.log(validatePassword('Javascript@'))
// console.log(validatePassword('javascript@'))



// 9)შექმენი validateUser multi-line Arrow Function-ის სახით.

// მიიღოს:

// username, age, password

// შეამოწმოს:

// username ცარიელი არ არის
// age არის 18 ან მეტი
// password-ის სიგრძე მინიმუმ 8-ია

// თუ ყველაფერი სწორია:

// "User is valid"

// თუ რომელიმე პირობა არ შესრულდა:

// "User is invalid"

// let validateUser=(username,age,password)=>{
//     if(username && age>=18 && password.length>=8){
//         return "User is valid"
//     }else{
//         return "User is invalid"
//     }
// }

// console.log(validateUser('solomoni',20,'solomoni123'))
// console.log(validateUser('soso',15,'soso123'))
