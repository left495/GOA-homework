


// #=========================Ternary====================
// 1)let score = 87;

// Ternary operator-ის გამოყენებით გამოიტანე:

// 90-100 → "Excellent"
// 75-89 → "Very Good"
// 60-74 → "Good"
// 40-59 → "Passed"
// 0-39 → "Failed"

// let score = 87

// if (score>=90 && score<=100){
//     console.log('Excellent')
// }else if (score>=75 && score<=89){
//     console.log('Very Good')
// }else if (score>=60 && score<=74){
//     console.log('Good')
// }else if (score>=40 && score<=59){
//     console.log('Passed')    
// }else if (score>=0 && score<=39){
//     console.log('Failed')
// }


// 2)let age = 20;
// let isStudent = true;

// Nested ternary-ის გამოყენებით განსაზღვრე:

// თუ ასაკი 18-ზე ნაკლებია → "Minor"
// თუ ასაკი 18 ან მეტია და სტუდენტია → "Adult Student"
// თუ ასაკი 18 ან მეტია და სტუდენტი არ არის → "Adult"
// თუ ასაკი 65 ან მეტია → "Senior"

// let age = 20
// let isStudent = true


// age<18 ? console.log('Minor'):
// age>=18 && isStudent===true ? console.log('Adult Student'):
// age>=18 && isStudent!==true ? console.log('Adult'):
// age>=65 ? console.log('Senior'): console.log('Wrong info')







// 3)let number = -14;

// Ternary operator-ის გამოყენებით გამოიტანე:

// თუ რიცხვი 0-ზე მეტია → "Positive"
// თუ რიცხვი 0-ზე ნაკლებია → "Negative"
// თუ რიცხვი 0-ის ტოლია → "Zero"

// შემდეგ გაართულე:

// თუ დადებითია, დამატებით განსაზღვრე ლუწია თუ კენტი:

// Positive Even
// Positive Odd
// Negative
// Zero

// let number = -14

// number>0 && number%2==0 ? console.log('Positive Even'):
// number>0 && number%2!=0 ? console.log('Positive Odd'):
// number===0 ? console.log('Zero'):
// number<0 ? console.log('Negative'): console.log('Wrong info')







// 4)let username = "adminGoga";

// ცარიელია → "Username is empty"
// იწყება "admin"-ით → "Admin"
// იწყება "user"-ით → "User"
// სხვა შემთხვევაში → "Unknown user"

// let username = "adminGoga"

// !username ? console.log("Username is empty"):
// username.startsWith('admin') ? console.log('admin'):
// username.startsWith('user') ? console.log('User'):
// console.log('Unknow user')







// 5)let temperature = 28;

// Nested ternary-ით გამოიტანე:

// 0-ზე ნაკლები → "Freezing"
// 0-10 → "Cold"
// 11-20 → "Cool"
// 21-30 → "Warm"
// 31+ → "Hot"

// let temperature = 28

// temperature<0 ? console.log("Freezing"):
// temperature>=0 && temperature<=10 ? console.log('Cold'):
// temperature>=11 && temperature<=20 ? console.log('Cool'):
// temperature>=21 && temperature<=30 ? console.log('Warm'):
// temperature>=31 ? console.log('Hot'): console.log('wrong temperature')









// 6)let a = 45;
// let b = 78;
// let c = 32;

// Math.max-ის გარეშე, მხოლოდ nested ternary-ის გამოყენებით იპოვე უდიდესი რიცხვი.


// let a = 45;
// let b = 78;
// let c = 32;


// a>b && a>c ? console.log(a):
// b>a && b>c ? console.log(b): console.log(c)





// #=========================switch====================

// 7)let day = 4;

// switch-ის გამოყენებით გამოიტანე:

// 1 → "Monday"
// 2 → "Tuesday"
// 3 → "Wednesday"
// 4 → "Thursday"
// 5 → "Friday"
// 6 → "Saturday"
// 7 → "Sunday"
// სხვა → "Invalid day"


// let day = 4

// switch (day){
//     case 1:
//         console.log('Monday')
//         break
//     case 2:
//         console.log('Tuesday')
//         break
//     case 3:
//         console.log('Wednesday')
//         break
//     case 4:
//         console.log('Thursday')
//         break
//     case 5:
//         console.log('Friday')
//         break
//     case 6:
//         console.log('Saturday')
//         break
//     case 7:
//         console.log('sunday')
//         break
//     default:
//         console.log('Invalid day')


// 8)let grade = "B";


// switch-ით:

// "A" → "Excellent"
// "B" → "Very Good"
// "C" → "Good"
// "D" → "Passed"
// "F" → "Failed"
// სხვა → "Invalid grade"

// let grade = "B"

// switch (grade){
//     case 'A':
//         console.log("Excellent")
//         break
//     case 'B':
//         console.log("Very Good")
//         break
//     case 'C':
//         console.log("Good")
//         break
//     case 'D':
//         console.log("Passed")
//         break
//     case 'F':
//         console.log("Failed")
//         break
//     default:
//         console.log('Invalid grade')
        
// }


// 9)ეს დავლაება როგორ შეიძლება გამარტივდეს switch ებით შეგიძლიათ მოიძიოთ და დაწეროთ/მაგრამ გაიაზრეთ და შემდეგზე ჩავიბარებ აუცილებლად

// let month= 8;

// switch-ის გამოყენებით განსაზღვრე სეზონი:

// 12, 1, 2 → "Winter"
// 3, 4, 5 → "Spring"
// 6, 7, 8 → "Summer"
// 9, 10, 11 → "Autumn"

// სხვა შემთხვევაში:

// let month = 8

// switch (month){
//     case 12,1,2:
//         console.log('Winter')
//         break
//     case 3,4,5:
//         console.log('Spring')
//         break
//     case 6,7,8:
//         console.log('Summer')
//         break
//     case 9,10,11:
//         console.log('Autumn')
//         break
//     default:
//         console.log('Invalid month')

// }


// 10)let a = 20;
// let b=5;
// let operator = "*";

// switch-ის გამოყენებით შეასრულე ოპერაცია:

// "+" → შეკრება
// "-" → გამოკლება
// "*" → გამრავლება
// "/" → გაყოფა
// "%" → ნაშთი
// სხვა ოპერატორზე:
// "Invalid operator" 

// let a = 20;
// let b=5;
// let operator = "*";

// switch(operator){
//     case '+':
//         console.log(a+b)
//         break
//     case '-':
//         console.log(a-b)
//         break
//     case '*':
//         console.log(a*b)
//         break
//     case '/':
//         console.log(a/b)
//         break
//     case '%':
//         console.log(a%b)
//         break
//     default:
//         console.log('Invalid operator')
        
// }


// 11)let action = "withdraw";
// let balance = 500;
// let amount = 200;

// switch-ით შექმენი ATM-ის სისტემა:

// "balance" → 
// აჩვენოს ბალანსი
// "deposit" → 
// დაამატოს თანხა
// "withdraw" → 
// გამოაკლოს თანხა
// "exit" → "Goodbye"

// მაგრამ withdraw-ის დროს:

// თუ თანხა ბალანსზე მეტია → "Insufficient balance"
// თუ საკმარისი თანხაა → გამოაკლოს
// საბოლოოდ 
// აჩვენოს დარჩენილი ბალანსი.

// შეზღუდვა: მოქმედების არჩევისთვის გამოიყენე switch, ხოლო თანხის საკმარისობის შესამოწმებლად შეგიძლია გამოიყენო if ან ternary

// let action = "withdraw";
// let balance = 500;
// let amount = 200;

// switch (action){
//     case 'balance':
//         console.log(balance)
//         break
//     case 'deposit':
//         console.log(balance+amount)
//         break
//     case 'withdraw':
//         if (balance>amount){
//             console.log(balance-amount)
//         }else{
//             console.log( "Insufficient balance")
//         }
//         break
//     case 'exit':
//         console.log('Goodbye')
//         break
//     default:
//         console.log('Invalid action')
        
        
// }
