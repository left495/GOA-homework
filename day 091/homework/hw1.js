  


// 1)მოცემულია:

// let age = 16;

// დაწერე პროგრამა, რომელიც:

// 0–12 → "ბავშვი"
// 13–17 → "მოზარდი"
// 18–59 → "ზრდასრული"
// 60+ → "პენსიონერი"
// სხვა შემთხვევაში → "არასწორი ასაკი"

// let age = 16

// if (age>0 && age<13){
//     console.log("ბავშვი")
// }else if (age>12 && age<18){
//     console.log("მოზარდი")
// }else if (age>17 && age<60){
//     console.log("ზრდასრული")
// }else if (age>59){
//     console.log("პენსიონერი")
// }else{
//     console.log("არასწორი ასაკი")
    
// }




// 2)let number = -7;

// გამოიტანე:

// თუ რიცხვი 0-ზე მეტია → "დადებითი"
// თუ 0-ზე ნაკლებია → "უარყოფითი"
// თუ 0-ის ტოლია → "ნულია"

// let number = -7

// if (number>0){
//     console.log("დადებითი")
// }else if (number<0){
//     console.log("უარყოფითი")
// }else{
//     console.log("ნულია")
    
// }



// 3)let age = 20;
// let price = 150;
// let isStudent = true;

// პირობები:

// თუ price > 100 და isStudent არის true → "30% discount"
// თუ price > 100 ან age < 18 → "20% discount"
// თუ age >= 60 → "15% discount"
// სხვა შემთხვევაში → "No discount"

// let age = 20;
// let price = 150;
// let isStudent = true;


// if (price > 100 && isStudent == true){
//     console.log("30% discount")
// }else if (price > 100 || age < 18){
//     console.log("20% discount")
// }else if (age >= 60){
//     console.log("15% discount")
// }else{
//     console.log("No discount")
// }


// 4)let username = "adminGoga";
// თუ username არის falsy → "Username is empty"
// თუ იწყება "admin"-ით → "Admin"
// თუ იწყება "user"-ით → "User"
// სხვა შემთხვევაში → "Unknown user"

// გამოიყენე .startsWith().

// let username = "adminGoga"

// if (username == false){
//     console.log("Username is empty")
// }else if (username.startsWith('admin')){
//     console.log('Admin')
// }else if(username.startsWith('user')){
//     console.log('User')
// }else{
//     console.log("Unknown user")
    
// }


// 5)let password = "JavaScript";
// თუ password falsy არის → "Password is empty"
// თუ სიგრძე 6-ზე ნაკლებია → "Too short"
// თუ სიგრძე 6–10-ის ფარგლებშია → "Medium password"
// თუ 10-ზე მეტია → "Strong password"

// let password = "JavaScript"

// if (password == false){
//     console.log("Password is empty")
// }else if (password.length < 6){
//     console.log("Too short")
// }else if (password.length>5 && password.length<11){
//     console.log("Medium password")
// }else{
//     console.log("Strong password")
    
// }


// 6)let city = "TBILISI";

// ჯერ გამოიყენე .toLowerCase() და შემდეგ:

// თუ "tbilisi" არის → "თბილისი"
// თუ "batumi" არის → "ბათუმი"
// თუ "kutaisi" არის → "ქუთაისი"
// სხვა შემთხვევაში → "უცნობი ქალაქი"

// let city = "TBILISI"

// city=city.toLowerCase()


// if (city == 'tbilisi'){
//     console.log('თბილისი')
// }else if (city == 'batumi'){
//     console.log('ბათუმი')
// }else if (city == 'kutaisi'){
//     console.log('ქუთაისი')
// }else{
//     console.log('უცნიბუ ქალაქი')
    
// }

// 7)let age = 19;
// let isStudent = true;
// თუ ასაკი 18-ზე ნაკლებია → "Minor"
// თუ ასაკი 18 ან მეტია და სტუდენტია → "Adult student"
// თუ ასაკი 18 ან მეტია მაგრამ სტუდენტი არ არის → "Adult"
// თუ ასაკი არასწორია → "Invalid age"

// გამოიყენე && და !

// let age = 19
// let isStudent = true

// if (age<18){
//     console.log('Minor')
// }else if (age>=18 && isStudent==true){
//     console.log('Adult student')    
// }else if (age>=18 && isStudent!=true){
//     console.log("Adult")
// }else{
//     console.log('Invalid age')
    
// }



// 8)let username = "User123";
// თუ username falsy არის → "Empty"
// თუ იწყება "admin"-ით და სიგრძე 10-ზე მეტია → "Strong admin username"
// თუ იწყება "user"-ით → "Regular user"
// თუ სიგრძე 5-ზე ნაკლებია → "Too short"
// სხვა შემთხვევაში → "Valid username"

// let username = "User123"

// if (username==false){
//     console.log('Empty')  
// }else if (username.startsWith('admin') && username.length>10){
//     console.log("Strong admin username")
// }else if (username.startsWith('user')){
//     console.log("Too short")   
// }else{
//     console.log("Valid username")
// }


// 9)let username = "ADMIN_GOGA";
// let age = 25;
// let isActive = true;

// შექმენი პირობითი სისტემა:

// თუ username ცარიელია → "No username"
// username გადაიყვანე პატარა ასოებში
// თუ username იწყება "admin"-ით და age >= 18 და isActive არის true → "Admin access"
// თუ username იწყება "user"-ით და age >= 18 → "User access"
// თუ age < 18 → "Access denied"
// სხვა შემთხვევაში → "Unknown account"


}// let username = "ADMIN_GOGA";
// let age = 25;
// let isActive = true;

// username=username.toLowerCase


// if (username==false){
//     console.log("No username")
// }else if (username.startsWith('admin') && age>=18 && isActive==true){
//     console.log("Admin access")
// }else if (username.startsWith('user') && age>=18){
//     console.log("User access")
// }else if (age<18){
//     console.log("Access denied")
// }else{
//     console.log("Unknown account")
// }