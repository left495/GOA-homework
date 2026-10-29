// 1)
// let student = {
//     name: "Giorgi",
//     math: 85,
//     english: 92,
//     physics: 74,
//     chemistry: 88,
//     history: 60
// };


// მოთხოვნები:
// 1. for...in-ის გამოყენებით დაბეჭდე ყველა გასაღები და შესაბამისი მნიშვნელობა.
// 2. დაითვალე, რამდენ საგანში მიიღო მოსწავლემ 80 ან მეტი ქულა.
// 3. იპოვე ყველა საგნის ქულების ჯამი.
// 4. იპოვე ყველაზე დაბალი ქულა და დაბეჭდე მისი შესაბამისი საგნის სახელი.
// 5. დაითვალე, რამდენ საგანში მიიღო მოსწავლემ 70-ზე ნაკლები ქულა.


// let student = {
//     name: "Giorgi",
//     math: 85,
//     english: 92,
//     physics: 74,
//     chemistry: 88,
//     history: 60
// };

// let moreThan80 = 0
// let lessThan70 = 0
// let sum = 0
// let min = student.math


// for(let i in student){
//     console.log(i+' '+student[i]);
//     if(student[i] != student[name]){
//         sum+=student[i]
//         if(student[i]>80){
//             moreThan80++
//         }else if(student[i]<70){
//             lessThan70++
//         }

//         if(min>student[i]){
//             min = student[i]
//         }
//     }
// }

// console.log(sum);
// console.log(moreThan80);
// console.log(lessThan70);
// console.log(min);




// 2)
// let products = {
//     laptop: 2500,
//     phone: 1800,
//     headphones: 250,
//     keyboard: 150,
//     monitor: 900,
//     mouse: 80
// };

// მოთხოვნები:
// 1. დაბეჭდე ყველა პროდუქტის სახელი და ფასი.
// 2. დაითვალე, რამდენი პროდუქტი ღირს 500 ლარზე მეტი.
// 3. იპოვე ყველა პროდუქტის საერთო ღირებულება.
// 4. იპოვე ყველაზე ძვირადღირებული პროდუქტი და მისი ფასი.
// 5. შექმენი ახალი ცარიელი ობიექტი expensiveProducts და for...in-ის გამოყენებით დაამატე მასში მხოლოდ ის პროდუქტები, რომელთა ფასიც 500 ლარზე მეტია.

// let products = {
//     laptop: 2500,
//     phone: 1800,
//     headphones: 250,
//     keyboard: 150,
//     monitor: 900,
//     mouse: 80
// };

// let values = Object.values(products)

// let moreThan5 = 0
// let sum = 0
// let max = Math.max(...values)

// let expensiveProducts = {}


// for(let i in products){
//     console.log(i+' : '+products[i]);
//     if(products[i]>500){
//         moreThan5++
//         expensiveProducts[i] = products[i]
//     }
//     sum+=products[i]
// }

// console.log(moreThan50);
// console.log(sum);
// console.log(max);

// console.log(expensiveProducts);




// 3)
// let user = {
//     username: "Goga123",
//     age: 19,
//     city: "Tbilisi",
//     score: 450,
//     active: true,
//     gamesPlayed: 35
// };

// მოთხოვნები:
// 1. დაბეჭდე ყველა გასაღები და მნიშვნელობა.
// 2. დაითვალე, რამდენი მნიშვნელობაა ტიპით number.
// 3. დაითვალე, რამდენი გასაღების სახელი შეიცავს 5-ზე მეტ სიმბოლოს.
// 4. შექმენი ახალი ობიექტი numericInfo, რომელშიც მხოლოდ რიცხვითი მნიშვნელობები მოხვდება.
// 5. იპოვე ყველა რიცხვითი მნიშვნელობის ჯამი.

// let user = {
//     username: "Goga123",
//     age: 19,
//     city: "Tbilisi",
//     score: 450,
//     active: true,
//     gamesPlayed: 35
// };
// let num = 0
// let moreThan5 = 0
// let sum = 0
// let numericInfo = {

// }

// for(let i in user){
//     console.log(i+' : '+user[i]);
//     if(typeof user[i] == 'number'){
//         numericInfo[i] = user[i]
//         num++
//     }
//     if(i.length>5){
//         moreThan5++
//     }
//     sum+=user[i]
// }

// console.log(user);
// console.log(num);
// console.log(moreThan5);
// console.log(sum);
// console.log(numericInfo);




// 4)
// let exam = {
//     Nika: 95,
//     Ana: 68,
//     Giorgi: 82,
//     Mariam: 45,
//     Luka: 73,
//     Saba: 30,
//     Elene: 88
// };

// მოთხოვნები:
// 1. for...in-ის გამოყენებით დაბეჭდე თითოეული მოსწავლის სახელი და ქულა.
// 2. თუ მოსწავლის ქულა 70 ან მეტია, დაბეჭდე "ჩააბარა", სხვა შემთხვევაში — "ვერ ჩააბარა".
// 3. დაითვალე ჩაბარებული და ვერჩაბარებული მოსწავლეების რაოდენობა.
// 4. იპოვე ყველაზე მაღალი ქულა და იმ მოსწავლის სახელი, რომელმაც ეს ქულა მიიღო.
// 5. გამოთვალე ყველა მოსწავლის ქულების საშუალო არითმეტიკული.

// let exam = {
//     Nika: 95,
//     Ana: 68,
//     Giorgi: 82,
//     Mariam: 45,
//     Luka: 73,
//     Saba: 30,
//     Elene: 88
// };

// let passed = 0
// let failed = 0
// let sum = 0
// let max = 0
// let maxName = ''

// let values = Object.values(exam)

// for(let i in exam){
//     console.log(i+' : '+exam[i]);
//     if(exam[i]>70){
//         console.log('ჩააბარა');
//         passed++
//     }else{
//         console.log('ვერ ჩააბარა');
//         failed++
//     }
//     if(max<exam[i]){
//         max = exam[i]
//         maxName = i
//     }
//     sum+=exam[i]
// }


// console.log(sum/values.length);
// console.log(max,maxName);
// console.log(failed);
// console.log(passed);




// 5)
// let student = {
//     math: 85,
//     english: 92,
//     physics: 67,
//     chemistry: 78,
//     history: 55,
//     biology: 90
// };

// მოთხოვნები:
// 1. Object.keys()-ის გამოყენებით მიიღე ყველა საგნის სახელი და შეინახე ცალკე მასივში.
// 2. Object.values()-ის გამოყენებით მიიღე ყველა ქულა და შეინახე სხვა მასივში.
// 3. დაბეჭდე საგნების რაოდენობა.
// 4. დაითვალე, რამდენ საგანში მიიღო მოსწავლემ 80 ან მეტი ქულა.
// 5. გამოთვალე ყველა ქულის ჯამი.
// 6. იპოვე ყველაზე მაღალი ქულა და დაბეჭდე შესაბამისი საგნის სახელიც.


// let student = {
//     math: 85,
//     english: 92,
//     physics: 67,
//     chemistry: 78,
//     history: 55,
//     biology: 90
// };
// let moreThan80 = 0
// let i = 0
// let sum = 0
// let keys = Object.keys(student)
// let values = Object.values(student)
// console.log(keys);
// console.log(values);
// console.log(keys.length);

// for(let i of values){
//     if(i>80){
//         moreThan80++
//     }
//     sum+=i
// }

// console.log(moreThan80);
// console.log(Math.max(...values));


// 6)
// let employees = {
//     Nika: 2500,
//     Ana: 3200,
//     Luka: 1800,
//     Mariam: 4000,
//     Saba: 2200,
//     Elene: 3500
// };

// მოთხოვნები:
// 1. მიიღე თანამშრომლების სახელების მასივი და ხელფასების მასივი.
// 2. დაბეჭდე თანამშრომლების საერთო რაოდენობა.
// 3. დაითვალე, რამდენი თანამშრომლის ხელფასია 3000 ლარზე მეტი.
// 4. გამოთვალე ხელფასების საშუალო არითმეტიკული.
// 5. იპოვე ყველაზე დაბალი ხელფასი.
// 6. იპოვე იმ თანამშრომლის სახელი, რომელსაც ყველაზე მაღალი ხელფასი აქვს.


// let employees = {
//     Nika: 2500,
//     Ana: 3200,
//     Luka: 1800,
//     Mariam: 4000,
//     Saba: 2200,
//     Elene: 3500
// };
// let keys = Object.keys(employees)
// let values = Object.values(employees)
// console.log(keys);
// console.log(values);
// console.log(keys.length);
// let sum = 0
// let moreThan3 = 0
// let max = 0

// for(let i of values){
//     if(i>3000){
//         moreThan3++
//     }
//     sum+=i
    
// }

// for(let i in employees){
//     if(employees[i]>max){
//         max = employees[i]
//     }
// }
// console.log(max);

// console.log(Math.min(...values));
// console.log(sum/values.length);




// 7)
// let user = {
//     username: "Shadow123",
//     age: 21,
//     city: "Tbilisi",
//     score: 750,
//     active: true,
//     gamesPlayed: 45,
//     premium: false
// };

// მოთხოვნები:
// 1. Object.keys()-ით მიიღე ყველა გასაღები.
// 2. Object.values()-ით მიიღე ყველა მნიშვნელობა.
// 3. დაითვალე, რამდენი გასაღების სახელი შეიცავს 5-ზე მეტ სიმბოლოს.
// 4. დაითვალე, რამდენი მნიშვნელობაა ტიპით number.
// 5. დაითვალე, რამდენი მნიშვნელობაა ტიპით boolean.
// 6. შექმენი ახალი ობიექტი numberInfo, რომელშიც მხოლოდ რიცხვითი მნიშვნელობები მოხვდება.


// let user = {
//     username: "Shadow123",
//     age: 21,
//     city: "Tbilisi",
//     score: 750,
//     active: true,
//     gamesPlayed: 45,
//     premium: false
// };

// let keys = Object.keys(user)
// let values = Object.values(user)
// console.log(keys);
// console.log(values);

// let moreThan5 = 0
// let typeNum = 0
// let typeBool = 0

// let numberInfo = {}

// for(let i in user){
//     if(i.length>5){
//         moreThan5++
//     }
//     if(typeof user[i] == 'number'){
//         typeNum++
//     }else if(typeof user[i] == 'boolean'){
//         typeBool++
//     }
// }

// console.log(moreThan5);
// console.log(typeNum);
// console.log(typeBool);




// 8)
// let company = {
//     marketing: 12000,
//     development: 35000,
//     design: 9000,
//     support: 7000,
//     sales: 18000,
//     research: 15000
// };

// მოთხოვნები:
// 1. მიიღე განყოფილებების სახელების მასივი და ბიუჯეტების მასივი.
// 2. გამოთვალე კომპანიის მთლიანი ბიუჯეტი.
// 3. დაითვალე, რამდენ განყოფილებას აქვს 15000 ლარი ან მეტი.
// 4. იპოვე ყველაზე დიდი ბიუჯეტის მქონე განყოფილება.
// 5. იპოვე ყველაზე პატარა ბიუჯეტის მქონე განყოფილება.

// let company = {
//     marketing: 12000,
//     development: 35000,
//     design: 9000,
//     support: 7000,
//     sales: 18000,
//     research: 15000
// };

// let values = Object.values(company)
// let keys = Object.keys(company)
// console.log(values);
// console.log(keys);

// let sum = values.reduce((a,x)=>a+x)
// console.log(sum);

// let moreThan15 = values.filter(x=>x>15000)
// console.log(moreThan15);

// console.log(Math.max(...values));
// console.log(Math.min(...values));
