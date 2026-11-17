// 1)let student = ["Goga", "Chalauri", 19, "Tbilisi", 95];


// Destructuring-ის გამოყენებით:
// 1. ცალკე ცვლადებში შეინახე სახელი, გვარი, ასაკი, ქალაქი და ქულა.
// 2. გამოიტანე სტუდენტის სრული სახელი.
// 3. შეამოწმე, არის თუ არა სტუდენტის ქულა 90-ზე მეტი.
// 4. გამოიტანე წინადადება:
// Goga Chalauri is 19 years old and has 95 points.

// let student = ["Goga", "Chalauri", 19, "Tbilisi", 95];

// let [name,surname,age,city,score] = student

// console.log(name+' '+surname);

// if(score>90){
//     console.log(`${name} ${surname} is ${age} years old and has ${score} points`);
// }


// 2)
// let products = ["Laptop", 2500, "Electronics", 15, true];

// let [name,,category,,inStock] = products

// console.log(name);
// console.log(category);
// console.log(inStock);


// Destructuring-ის გამოყენებით:
// 1. შეინახე პროდუქტის სახელი.
// 2. გამოტოვე ფასი.
// 3. შეინახე კატეგორია.
// 4. გამოტოვე რაოდენობა.
// 5. შეინახე ბოლო მნიშვნელობა.
// 6. შეამოწმე, არის თუ არა პროდუქტი ხელმისაწვდომი.

// 3)
// let exam = ["Nika", 85, "Mathematics", 90, "Physics", 78];

// let [name,Mathscore,Math,physicScore,physic,score] = exam

// let scores = [score,Mathscore,physicScore]


// console.log(scores.reduce((a,x)=>a+x));

// let biggest = scores[0]
// for(let i of scores){
//     if(i>biggest){
//         biggest = i
//     }
// }


// console.log(biggest);


// 1. შეინახე მოსწავლის სახელი.
// 2. შეინახე მათემატიკის ქულა და საგნის სახელი.
// 3. შეინახე ფიზიკის საგნის სახელი და ქულა.
// 4. გამოთვალე ქულების ჯამი.
// 5. გამოიტანე, რომელ საგანში მიიღო მოსწავლემ მეტი ქულა.

// 4)
// let students = [
//     ["Goga", 19, [90, 85, 95]],
//     ["Nika", 20, [75, 88, 80]],
//     ["Saba", 18, [100, 95, 90]]
// ];

// let [fir,sec,thi] = students

// let [firName,firAge,firArr] = fir

// let [secName,secAge,secArr] = sec

// let [thiName,thiAge,thiArr] = thi

// let [firScore1,,firScore3] = firArr

// let [secScore1,,secScore3] = secArr

// let [thiScore1,,thiScore3] = thiArr

// console.log(firArr.reduce((a,x)=>a+x));

// for(let i of students){
//     for(let j of i[2]){
//         if(j>=100){
//             console.log(i[0]+' '+j);
//         }
//     }
// }

// 1. Destructuring-ის გამოყენებით დაშალე სამივე სტუდენტის ინფორმაცია.
// 2. თითოეული სტუდენტისთვის ცალკე შეინახე სახელი და ასაკი.
// 3. თითოეული სტუდენტის ქულების მასივიდან ცალკე შეინახე პირველი და მესამე ქულა.
// 4. გამოთვალე გოგას სამი ქულის ჯამი.
// 5. შეამოწმე, აქვს თუ არა რომელიმე სტუდენტს 100 ქულა.

// 5)
// let company = [
//     "TechVision",
//     [
//         "Development",
//         ["Giorgi", "Nika", "Saba"],
//         35000
//     ],
//     [
//         "Marketing",
//         ["Ana", "Mariam"],
//         12000
//     ]
// ];

// let [name,departament1,departament2] = company

// let [dep1Name,staff1,dep1budget] = departament1

// let [dep1staff1,,dep1staff3] = staff1

// let [dep2Name,staff2,dep2budget] = departament2

// console.log(dep2budget+dep1budget);

// if(dep2budget>dep1budget){
//     console.log(dep2Name+' '+dep2budget);
// }else{
//     console.log(dep1Name+' '+dep1budget);
// }


// 1. შეინახე კომპანიის სახელი.
// 2. შეინახე Development დეპარტამენტის სახელი.
// 3. შეინახე მისი პირველი და მესამე თანამშრომელი.
// 4. შეინახე Development-ის ბიუჯეტი.
// 5. შეინახე Marketing-ის სახელი და თანამშრომლების სახელები.
// 6. გამოთვალე ორივე დეპარტამენტის ბიუჯეტების ჯამი.
// 7. შეადარე დეპარტამენტების ბიუჯეტები.

// 6)მოცემულია ობიექტი:
// let student = {
//     name: "Goga",
//     surname: "Chalauri",
//     age: 19,
//     city: "Tbilisi",
//     score: 95
// };


// let{name:studentName,surname,age,city,score:studentScore} = student

// console.log(studentName+' '+surname+' - '+age);

// if(studentScore>90){
//     console.log('score is more than 90');
// }else{
//     console.log('score is less than 90');
    
// }

// Destructuring-ის გამოყენებით:
// 1. შეინახე ყველა თვისების მნიშვნელობა ცალკეულ ცვლადებში.
// 2. name შეინახე ცვლადში სახელად studentName.
// 3. score შეინახე ცვლადში სახელად studentScore.
// 4. გამოიტანე სრული სახელი და ასაკი.
// 5. შეამოწმე, არის თუ არა სტუდენტის ქულა 90-ზე მეტი.

// 7)
// let product = {
//     title: "Gaming Laptop",
//     price: 2500,
//     category: "Electronics",
//     stock: 12,
//     available: true
// };


// let {title:productName,price:productPrice,stock:quantity,available:productAvailable} = product

// console.log(productName+' - '+productPrice);

// if(productAvailable){
//     console.log('product is available');
// }else{
//     console.log('product is not available');
    
// }


// 1. Destructuring-ით შეინახე ყველა მნიშვნელობა.
// 2. title შეინახე ცვლადში productName.
// 3. stock შეინახე ცვლადში quantity.
// 4. გამოიტანე პროდუქტის სახელი და ფასი.
// 5. თუ პროდუქტი ხელმისაწვდომია, გამოიტანე "Product is available", სხვა შემთხვევაში "Out of stock".

// 8)
// let employee = {
//     firstName: "Nika",
//     lastName: "Beridze",
//     position: "Developer",
//     salary: 3500,
//     experience: 4
// };

// let {firstName:name,lastName:surname,position:jobTitle,experience} = employee

// console.log(name+' '+surname+' - '+jobTitle);

// if(experience>3){
//     console.log('programer has high experiance');
// }else{
//     console.log('programer has not high experiance');
    
// }



// 1. დაშალე ობიექტი Destructuring-ის გამოყენებით.
// 2. firstName შეინახე name ცვლადში.
// 3. lastName შეინახე surname ცვლადში.
// 4. position შეინახე jobTitle ცვლადში.
// 5. გამოიტანე თანამშრომლის სრული სახელი და თანამდებობა.
// 6. შეამოწმე, აქვს თუ არა თანამშრომელს 3 წელზე მეტი გამოცდილება.

// 9)
// let car = {
//     brand: "BMW",
//     model: "M5",
//     year: 2023,
//     color: "Black",
//     price: 85000,
//     isElectric: false
// };


// let {brand:carbrand,model:carModel,year:productionyear,isElectric} = car

// console.log(carbrand+' '+carModel);
// if(productionyear>2020){
//     console.log('car is new');
// }else{
//     console.log('car is made before 2020');
// }

// console.log(isElectric? 'car is electric':'car is mechanic');



// 1. შეინახე ყველა მნიშვნელობა ცვლადებში.
// 2. brand შეინახე carBrand ცვლადში.
// 3. model შეინახე carModel ცვლადში.
// 4. year შეინახე productionYear ცვლადში.
// 5. გამოიტანე მანქანის სრული დასახელება.
// 6. შეამოწმე, გამოშვებულია თუ არა მანქანა 2020 წლის შემდეგ.
// 7. შეამოწმე, არის თუ არა მანქანა ელექტრო.


// // 10)
// let company = {
//     name: "TechVision",
//     employees: 45,
//     income: 120000,
//     expenses: 75000,
//     founded: 2018,
//     country: "Georgia",
//     isActive: true
// };


// let {name:companyName,employees:employeeCount,income:totalIncome,expenses:totalExpenses,founded,country,isActive} = company

// let profit = totalIncome-totalExpenses

// console.log(profit);

// if(profit>50000){
//     console.log('profit is high');
// }else{
//     console.log('profit is low');
    
// }

// if(founded<2020){
//     console.log('company has founded before 2020');
// }else{
//     console.log('company has founded after 2020');
// }

// if(isActive){
//     console.log('company is active');
// }else{
//     console.log('company is not active');
    
// }

// console.log(`total income is :${totalIncome} total expance is :${totalExpenses}`);


// Destructuring-ის გამოყენებით:
// 1. შეინახე ყველა მნიშვნელობა ცალკეულ ცვლადებში.
// 2. name შეცვალე companyName-ით.
// 3. employees შეცვალე employeeCount-ით.
// 4. income შეცვალე totalIncome-ით.
// 5. expenses შეცვალე totalExpenses-ით.
// 6. გამოთვალე კომპანიის მოგება (შემოსავალი მინუს ხარჯები).
// 7. შეამოწმე, არის თუ არა მოგება 50000-ზე მეტი.
// 8. შეამოწმე, დაარსებულია თუ არა კომპანია 2020 წლამდე.
// 9. შეამოწმე, აქტიურია თუ არა კომპანია.
// 10. გამოიტანე კომპანიის სრული ფინანსური ანგარიში.