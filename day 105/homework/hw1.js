// 1)მოცემულია:
// let prices = [25, 40, 15, 80, 100, 35];
// .map()-ის გამოყენებით შექმენი ახალი სია, სადაც თითოეული ფასი 20-ით გაზრდილი იქნება.
// შედეგი:
// [45, 60, 35, 100, 120, 55]

// let prices = [25, 40, 15, 80, 100, 35];
// let newPrices = prices.map(x=>x+=20)
// console.log(newPrices);


// 2)let scores = [45, 72, 91, 38, 64, 87];
// .map()-ით შექმენი ახალი სია.
// თუ ქულა 50-ზე ნაკლებია → დაამატე 10
// სხვა შემთხვევაში → ქულა დატოვე უცვლელი
// შედეგი უნდა იყოს:
// [55, 72, 91, 48, 64, 87]

// let scores = [45, 72, 91, 38, 64, 87];

// let newScoresc = scores.map(x=>{
//     if(x<50){
//         return x+=10
//     }
//     return x
// })

// console.log(newScoresc);


// 3)let names = ["nika", "ana", "gio", "mariam", "luka"];
// .map()-ით შექმენი ახალი სია, სადაც ყველა სახელი იქნება დიდი ასოებით.
// ["NIKA", "ANA", "GIO", "MARIAM", "LUKA"]

// let names = ["nika", "ana", "gio", "mariam", "luka"];

// let newNames = names.map(x=>x.toUpperCase())
// console.log(newNames);



// 4)let numbers = [2, 5, 7, 10, 12];
// .map()-ის გამოყენებით შექმენი ახალი სია, სადაც თითოეული რიცხვი თავის თავზე იქნება გამრავლებული.

// let numbers = [2, 5, 7, 10, 12];
// let newNumbers = numbers.map(x=>x*x)
// console.log(newNumbers);


// 5)let numbers = [12, 7, 20, 15, 8, 31, 44];
// .forEach()-ის გამოყენებით დაბეჭდე მხოლოდ ლუწი რიცხვები.


// let numbers = [12, 7, 20, 15, 8, 31, 44];
// numbers.forEach(x=>{
//     if(x%2==0){
//         console.log(x);
//     }
// })


// 6)let prices = [100, 250, 80, 450, 120];
// .forEach()-ით თითოეული ფასი დაბეჭდე შემდეგ ფორმატში:
// Product price: 100
// Product price: 250
// ...

// let prices = [100, 250, 80, 450, 120];
// prices.forEach(x=>{
//     console.log('Product price: '+x);
// })



// 7)let scores = [95, 67, 42, 81, 55, 30];
// .forEach()-ით თითოეულ ქულაზე დაბეჭდე:
// 95 - Excellent
// 67 - Good
// 42 - Failed
// წესი შენ თვითონ განსაზღვრე, მაგალითად:
// 80+ → Excellent
// 60–79 → Good
// 50–59 → Average
// 50-ზე ნაკლები → Failed


// let scores = [95, 67, 42, 81, 55, 30];

// scores.forEach(x=>{
//     switch(true){
//         case x>79:
//             console.log('Excellent');
//             break
//         case x>59:
//             console.log('Good');
//             break
//         case x>49:
//             console.log('Average');
//             break
//         default:
//             console.log('Failed');
//     }
// })

// 8)მოცემულია:
// let prices = [100, 200, 350, 80, 500];
// პირველ ეტაპზე .map()-ით თითოეულ ფასს დაუმატე 50.
// შემდეგ მიღებული ახალი სია .forEach()-ით დაბეჭდე.
// მაგალითად:
// New price: 150
// New price: 250
// New price: 400
// ...

// let prices = [100, 200, 350, 80, 500];
// let newPrices = prices.map(x=>x+50)
// newPrices.forEach(x=>{
//     console.log('New price: '+x );
// })


// 9)let scores = [45, 60, 72, 38, 90];
// პირველი ეტაპი — .map()
// თუ ქულა 50-ზე ნაკლებია, დაუმატე 15.
// თუ 50 ან მეტია, დაუტოვე უცვლელი.
// მეორე ეტაპი — .forEach()
// დაბეჭდე:
// Score: 60
// Score: 60
// Score: 72
// Score: 53
// Score: 90


// let scores = [45, 60, 72, 38, 90];
// let newScores = scores.map(x=>{
//     if(x<50){
//         return x+15
//     }else{
//         return x
//     }
// })
// newScores.forEach(x=>{
//     console.log('Score: '+x);  
// })



// 10)let names = ["nika", "ana", "gio", "mariam", "luka"];
// .map()-ით ყველა სახელი გადაიყვანე uppercase-ში.
// შემდეგ .forEach()-ით დაბეჭდე:
// Student: NIKA
// Student: ANA
// Student: GIO
// ...

// let names = ["nika", "ana", "gio", "mariam", "luka"];
// let newNames = names.map(x=>x.toUpperCase())
// newNames.forEach(x=>{
//     console.log('Student: '+x);
    
// })


// 11)მოცემულია:
// let numbers = [12, 5, 20, 7, 30, 11, 8];
// შეასრულე:
// 1. .map()
// თუ რიცხვი ლუწია → გაამრავლე 2-ზე
// თუ კენტია → გაამრავლე 3-ზე
// 2. .forEach()
// დაბეჭდე მიღებული თითოეული რიცხვი:
// Result: ...

// let numbers = [12, 5, 20, 7, 30, 11, 8];
// let newNumbers = numbers.map(x=>x%2==0? x*2 : x*3)
// newNumbers.forEach(x=>{
//     console.log('Result: '+x);
// })


// 12)let prices = [120, 450, 80, 300, 50, 700];
// .map()-ით:
// თუ ფასი 100-ზე ნაკლებია → დაუმატე 20
// თუ ფასი 100-დან 500-მდეა → დაუმატე 50
// თუ ფასი 500-ზე მეტია → დაუმატე 100
// შემდეგ .forEach()-ით დაბეჭდე:
// Old price → New price
// მაგალითად:
// 120 → 170
// 450 → 500
// 80 → 100

// let prices = [120, 450, 80, 300, 50, 700];
// let newPrices = prices.map(x=>x<100? x+20:x<500?x+50:x+100)
// newPrices.forEach((x,index)=>{
//     console.log(`${prices[index]} -> ${x}`)
// })



// 13)let numbers = [5, 12, 25, 8, 40, 17];
// .map()-ით თითოეული რიცხვი შეცვალე შემდეგი წესით:
// 10-ზე ნაკლები → "Small"
// 10-დან 20-მდე → "Medium"
// 20-ზე მეტი → "Large"
// შემდეგ .forEach()-ით დაბეჭდე მიღებული მნიშვნელობები.
// მაგალითად:
// Small
// Medium
// Large
// Small
// Large
// Medium

// let numbers = [5, 12, 25, 8, 40, 17];
// let newNumbers = numbers.map(x=>x<10?'Small':x<20?'Medium':'Large')
// newNumbers.forEach(x=>console.log(x))




// 14)let numbers = [10, 25, 4, 18, 33, 7, 40];
// უნდა გამოიყენო მხოლოდ .map() და .forEach().
// .map():
// თითოეული რიცხვი შეცვალე:
// თუ რიცხვი 20-ზე მეტია → გამოაკელი 5
// თუ რიცხვი 20-ზე ნაკლებია → დაუმატე 5
// თუ რიცხვი ზუსტად 20 იქნებოდა → გაამრავლე 2-ზე
// .forEach():
// თითოეულ მიღებულ რიცხვზე დაბეჭდე:
// Number: 20
// Number: 30
// ...

// let numbers = [10, 25, 4, 18, 33, 7, 40];
// let newNumbers = numbers.map(x=>x>20?x-5:x<20?x+5:x*2)
// newNumbers.forEach(x=>console.log('Number: '+x))


// 15)let numbers = [5, 12, 30, 7, 21, 40, 9, 18];
// გამოიყენე მხოლოდ .map() და .forEach().
// პირველი ეტაპი — .map()
// თითოეული რიცხვისთვის:
// თუ რიცხვი 10-ზე ნაკლებია → დაუმატე 10
// თუ რიცხვი 10-დან 20-მდეა → გაამრავლე 2-ზე
// თუ რიცხვი 20-ზე მეტია → გამოაკელი 5
// თუ მიღებული შედეგი ლუწია → კიდევ დაუმატე 2
// თუ მიღებული შედეგი კენტია → კიდევ დაუმატე 1
// მეორე ეტაპი — .forEach()
// დაბეჭდე:
// Original number: 5
// Final result: 16
// მაგრამ აქ ერთი მნიშვნელოვანი პირობაა:
// ორიგინალი რიცხვი უნდა შეინარჩუნო და შედეგი ცალკე მიიღო.
// ანუ .map()-ის შიგნით უნდა იფიქრო ისე, რომ საბოლოოდ .forEach()-ს ორივე ინფორმაცია ჰქონდეს.

// let numbers = [5, 12, 30, 7, 21, 40, 9, 18];
// let newNumbers = numbers.map(x=>x<10?x+10:x<20?x*2:x-5)
// let num = newNumbers.map(x=>x%2==0?x+2:x+1)
// num.forEach((x,index)=>{
//     console.log(`Original number: ${numbers[index]}`);
//     console.log(`Final result: ${x}`);
// })