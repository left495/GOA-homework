// 1)
// let company = {
//     name: "TechVision",
//     employees: 45,
//     founded: 2015,
//     city: "Tbilisi",
//     departments: 4,
//     budget: 120000,
//     active: true,
//     projects: 8
// };

// შენი დავალებაა, გამოიყენო Object.keys() და Object.values() და შეასრულო შემდეგი მოთხოვნები:
// 1. მიიღე ობიექტის ყველა გასაღები და შეინახე ცალკე მასივში.
// 2. მიიღე ობიექტის ყველა მნიშვნელობა და შეინახე სხვა მასივში.
// 3. დაბეჭდე გასაღებების რაოდენობა.
// 4. დაბეჭდე მნიშვნელობების რაოდენობა.
// 5. დაბეჭდე ყველა გასაღები ცალ-ცალკე, for...of ციკლის გამოყენებით.
// 6. დაბეჭდე ყველა მნიშვნელობა ცალ-ცალკე, for...of ციკლის გამოყენებით.
// 7. შექმენი ახალი მასივი, რომელშიც მოხვდება მხოლოდ ის მნიშვნელობები, რომლებიც ტიპით არის number. გამოიყენეთ filter
// 8. იპოვე ყველა რიცხვითი მნიშვნელობის ჯამი და დაბეჭდე შედეგი.

// let company = {
//     name: "TechVision",
//     employees: 45,
//     founded: 2015,
//     city: "Tbilisi",
//     departments: 4,
//     budget: 120000,
//     active: true,
//     projects: 8
// };

// let keys = Object.keys(company)
// let values  = Object.values(company)
// console.log(keys.length);
// console.log(values.length);

// for(let i in company){
//     console.log(i);
    
// }

// for(let i in company){
//     console.log(company[i]);
    
// }

// let values2 = values.filter(x=>typeof x === 'number')

// console.log(values2);

// let sum = 0

// for(let i of values2){
//     sum+=i
// }
// console.log(sum);

// 2)
// let company = {
//     name: "TechVision",
//     employees: 45,
//     founded: 2015,
//     budget: 120000,
//     marketing: 15000,
//     development: 45000,
//     design: 12000,
//     support: 8000,
//     active: true
// };

// 1. for...in ციკლის გამოყენებით დაბეჭდე ობიექტის ყველა გასაღები და შესაბამისი მნიშვნელობა.
// 2. დაითვალე ობიექტში არსებული რიცხვითი მნიშვნელობების რაოდენობა.
// 3. შეკრიბე ყველა რიცხვითი მნიშვნელობა,მიღებული ჯამი შეინახე total ცვლადში.
// 4. დაითვალე, რამდენი გასაღების სახელია 6 სიმბოლოზე მეტი სიგრძის.

let company = {
    name: "TechVision",
    employees: 45,
    founded: 2015,
    budget: 120000,
    marketing: 15000,
    development: 45000,
    design: 12000,
    support: 8000,
    active: true
};


for(let i in company){
    console.log(i,company[i]);
}

let values = Object.values(company)

let values2 = values.filter(x=>typeof x === 'number')
console.log(values2);
let total = 0
for(let i of values2){
    total+=i
}

console.log(total);

let values6 = 0
for(let i in company){
    if(i.length>6){
        values6++
    }

}

console.log(values6);
