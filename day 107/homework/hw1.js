// 1)const scores = [45, 82, 67, 100, 34, 91, 76, 58, 100, 23, 88, 64];
// შეასრულე შემდეგი მოქმედებები:
// 1. filter() — შექმენი ახალი მასივი, რომელშიც იქნება მხოლოდ 60-ზე მეტი ან ტოლი ქულები.
// 2. map() — თითოეულ ქულას დაუმატე 5 ქულა.
// 3. filter() — ახალი მასივიდან დატოვე მხოლოდ ის ქულები, რომლებიც 80-ზე მეტია.
// 4. reduce() — გამოთვალე საბოლოო მასივში დარჩენილი ქულების ჯამი.
// 5. findIndex() — იპოვე თავდაპირველ მასივში პირველი 100-ქულიანი შედეგის ინდექსი.
// 6. some() — შეამოწმე, არის თუ არა თავდაპირველ მასივში 30-ზე ნაკლები ქულა.
// 7. every() — შეამოწმე, არის თუ არა ყველა ქულა 20-ზე მეტი.
// 8. forEach() — დაბეჭდე თითოეული საბოლოო ქულა ცალკე ხაზზე.

// const scores = [45, 82, 67, 100, 34, 91, 76, 58, 100, 23, 88, 64];

// let filtered = scores.filter(x=>x>=60)
// console.log(filtered);

// let mapped = filtered.map(x=>x+5)
// console.log(mapped);

// let filtered2 = mapped.filter(x=>x>80)
// console.log(filtered2);

// let reduced = filtered2.reduce((acc,curr)=>acc+curr)
// console.log(reduced);

// let findIndex = scores.findIndex(x=> x===100)
// console.log(findIndex);

// let some = scores.some(x=>x<30)
// console.log(some);

// let every = scores.every(x=>x>20)
// console.log(every);

// let forEach = scores.forEach(x=>console.log(x))
// console.log(forEach);




// 2)მოცემულია გაყიდული ნივთების ფასები:
// const prices = [120, 450, 80, 700, 250, 1200, 90, 550, 300, 1500, 60];
// 1. filter() — დატოვე მხოლოდ 200-ზე მეტი ფასები.
// 2. map() — თითოეულ ფასს გამოაკელი 50.
// 3. map() — მიღებული ფასებიდან შექმენი ახალი მასივი, რომელშიც თითოეული ფასი გაორმაგებული იქნება.
// 4. reduce() — გამოთვალე გაორმაგებული ფასების ჯამი.
// 5. findIndex() — იპოვე თავდაპირველ მასივში პირველი 500-ზე მეტი ფასი.
// 6. some() — შეამოწმე, არის თუ არა რომელიმე ფასი 1000-ზე მეტი.
// 7. every() — შეამოწმე, არის თუ არა ყველა ფასი 50-ზე მეტი.
// 8. forEach() — დაბეჭდე საბოლოო ფასები.

// const prices = [120, 450, 80, 700, 250, 1200, 90, 550, 300, 1500, 60];


// let filtered = prices.filter(x=>x>200)
// console.log(filtered);

// let mapped = filtered.map(x=>x-50)
// console.log(mapped);

// let mapped2 = mapped.map(x=>x*2)
// console.log(mapped2);

// let reduced = mapped2.reduce((acc,curr)=> acc+curr)
// console.log(reduced);

// let findIndex = prices.findIndex(x=>x>500)
// console.log(findIndex);

// let some = prices.some(x=>x>1000)
// console.log(some);

// let every = prices.every(x=>x>50)
// console.log(every);


// prices.forEach(x=>console.log(x))




// 3)const numbers = [12, 7, 24, 9, 36, 15, 42, 5, 18, 27, 30, 11];
// 1. filter() — დატოვე მხოლოდ ლუწი რიცხვები.
// 2. map() — თითოეული რიცხვი გაამრავლე 3-ზე.
// 3. filter() — მიღებული მასივიდან დატოვე მხოლოდ 50-ზე მეტი რიცხვები.
// 4. reduce() — იპოვე დარჩენილი რიცხვების ჯამი.
// 5. findIndex() — იპოვე თავდაპირველ მასივში პირველი რიცხვის ინდექსი, რომელიც 20-ზე მეტია.
// 6. some() — შეამოწმე, არის თუ არა თავდაპირველ მასივში 40-ზე მეტი რიცხვი.
// 7. every() — შეამოწმე, არის თუ არა ყველა რიცხვი დადებითი.
// 8. forEach() — დაბეჭდე საბოლოო მასივის თითოეული რიცხვი.


// const numbers = [12, 7, 24, 9, 36, 15, 42, 5, 18, 27, 30, 11];

// let filtered = numbers.filter(x=>x%2==0)
// console.log(filtered);

// let mapped = filtered.map(x=>x*3)
// console.log(mapped);

// let filtered2 = mapped.filter(x=>x>50)
// console.log(filtered2);

// let reduced = filtered2.reduce((acc,curr)=>acc+curr)
// console.log(reduced);

// let findIndex = numbers.findIndex(x=>x>20)
// console.log(findIndex);

// let some = numbers.some(x=>x>40)
// console.log(some);

// let every = numbers.every(x=>x>=0)
// console.log(every);

// filtered2.forEach(x=>console.log(x))



// 4)const words = [
//   "javascript",
//   "html",
//   "programming",
//   "css",
//   "developer",
//   "react",
//   "computer",
//   "code",
//   "algorithm"
// ];
// 1. filter() — დატოვე მხოლოდ ის სიტყვები, რომელთა სიგრძეც 5 სიმბოლოზე მეტია.
// 2. map() — ყველა დარჩენილი სიტყვა გადაიყვანე დიდ ასოებში toUpperCase() მეთოდით.
// 3. filter() — მიღებული სიტყვებიდან დატოვე მხოლოდ ისინი, რომელთა სიგრძეც 8 სიმბოლოზე მეტია.
// 4. reduce() — გამოთვალე საბოლოო მასივში არსებული ყველა სიმბოლოს საერთო რაოდენობა. გამოიყენე word.length.
// 5. findIndex() — იპოვე თავდაპირველ მასივში პირველი სიტყვის ინდექსი, რომლის სიგრძეც 8-ზე მეტია.
// 6. some() — შეამოწმე, არსებობს თუ არა 10 სიმბოლოზე გრძელი სიტყვა.
// 7. every() — შეამოწმე, არის თუ არა ყველა სიტყვა მინიმუმ 3 სიმბოლოსგან შემდგარი.
// 8. forEach() — დაბეჭდე საბოლოო სიტყვები.

// const words = [
//   "javascript",
//   "html",
//   "programming",
//   "css",
//   "developer",
//   "react",
//   "computer",
//   "code",
//   "algorithm"
// ];


// let filtered = words.filter(x=>x.length>5)
// console.log(filtered);

// let mapped = filtered.map(x=>x.toUpperCase())
// console.log(mapped);

// let filtered2 = mapped.filter(x=>x.length>8)
// console.log(filtered2);

// let reduced = filtered2.reduce((acc,curr)=>acc.length+curr.length)
// console.log(reduced);

// let findIndex = words.findIndex(x=>x.length===8)
// console.log(findIndex);

// let some = words.some(x=>x.length>10)
// console.log(some);

// let every = words.every(x=>x.length>=3)
// console.log(every);


// filtered2.forEach(x=>console.log(x))




// 5)const numbers = [14, 28, 35, 42, 19, 56, 63, 70, 25, 84, 91, 100, 32];
// შექმენი პროგრამა, რომელიც:
// 1. filter()-ით დატოვებს მხოლოდ 20-ზე მეტ რიცხვებს.
// 2. map()-ით თითოეულ მათგანს დაუმატებს მის ინდექსს გაფილტრულ მასივში.
// 3. filter()-ით მიღებული შედეგებიდან დატოვებს მხოლოდ ლუწ რიცხვებს.
// 4. map()-ით თითოეულ დარჩენილ რიცხვს გაამრავლებს 2-ზე.
// 5. reduce()-ით გამოთვლის საბოლოო მასივის ჯამს.
// 6. reduce()-ით იპოვის საბოლოო მასივის უდიდეს რიცხვს.
// 7. findIndex()-ით იპოვის თავდაპირველ მასივში პირველი რიცხვის ინდექსს, რომელიც 60-ზე მეტია.
// 8. some()-ით შეამოწმებს, არის თუ არა საბოლოო მასივში 200-ზე მეტი რიცხვი.
// 9. every()-ით შეამოწმებს, არის თუ არა საბოლოო მასივის ყველა რიცხვი ლუწი.
// 10. forEach()-ით დაბეჭდავს საბოლოო მასივის თითოეულ ელემენტს.

// const numbers = [14, 28, 35, 42, 19, 56, 63, 70, 25, 84, 91, 100, 32];

// let fil = numbers.filter(x=>x>20)
// console.log(fil);

// let mapped = fil.map((x,index)=>x+index)
// console.log(mapped);

// let fil2 = mapped.filter(x=>x%2==0)
// console.log(fil2);

// let mapped2 = fil2.map(x=>x*2)
// console.log(mapped2);

// let red = mapped2.reduce((acc,curr)=>acc+curr)
// console.log(red);

// let red2 = mapped2.reduce((acc,curr)=>acc>curr?acc:curr)
// console.log(red2);

// let find = numbers.findIndex(x=>x>60)
// console.log(find);

// let some = mapped2.some(x=>x>200)
// console.log(some);

// let every = mapped2.every(x=>x%2==0)
// console.log(every);

// mapped2.forEach(x=>console.log(x))



// 6)const scores = [
//   45, 88, 72, 96, 54, 100, 63, 81,
//   39, 92, 77, 68, 85, 49, 98, 59
// ];
// შექმენი პროგრამა შემდეგი მოთხოვნებით:
// 1. filter() — დატოვე 60 ან მეტი ქულა.
// 2. map() — თითოეულ ქულას დაუმატე 7.
// 3. filter() — დატოვე მხოლოდ 80 ან მეტი შედეგი.
// 4. map() — თითოეული შედეგიდან გამოაკელი მისი ინდექსი მიმდინარე მასივში.
// 5. filter() — დატოვე მხოლოდ კენტი რიცხვები.
// 6. reduce() — გამოთვალე საბოლოო შედეგების ჯამი.
// 7. reduce() — გამოთვალე საბოლოო შედეგების საშუალო არითმეტიკული.
// 8. findIndex() — იპოვე საწყის მასივში პირველი ქულა, რომელიც 90-ზე მეტია.
// 9. some() — შეამოწმე, არის თუ არა საბოლოო მასივში 90-ზე ნაკლები რიცხვი.
// 10. every() — შეამოწმე, არის თუ არა ყველა საბოლოო შედეგი 70-ზე მეტი.
// 11. forEach() — თითოეული საბოლოო ქულა დაბეჭდე და მიუწერე "ჩააბარა", თუ 80 ან მეტია, სხვა შემთხვევაში — "ვერ ჩააბარა".



// const scores = [45, 88, 72, 96, 54, 100, 63, 81,39, 92, 77, 68, 85, 49, 98, 59];

// let fil = scores.filter(x=>x>=60)
// console.log(fil);

// let map = fil.map(x=>x+7)
// console.log(map);

// let fil2 = map.filter(x=>x>=80)
// console.log(fil2);

// let map2 = fil2.map((x,ind)=>x-ind)
// console.log(map2);

// let fil3 = map2.filter(x=>x%2!=0)
// console.log(fil3);

// let red = fil3.reduce((acc,curr)=>acc+curr)
// console.log(red);

// let red2 = red/fil3.length
// console.log(red2);

// let find = scores.findIndex(x=>x>90)
// console.log(find);

// let some = fil3.some(x=>x<90)
// console.log(some);

// let every = fil3.every(x=>x>70)
// console.log(every);

// fil3.forEach(x=>x>=80?console.log('ჩააბარა'):console.log('ვერ ჩააბარა'))







// 7)Master Challenge

// მოცემულია:
// const numbers = [
//   18, 45, 72, 91, 34, 120, 57, 86,
//   103, 64, 39, 150, 77, 98, 25, 132
// ];


// შეასრულე შემდეგი მოქმედებები:
// 1. filter() — დატოვე 30-ზე მეტი რიცხვები.
// 2. map() — თითოეულ რიცხვს დაუმატე მისი ინდექსი ამ ახალ მასივში.
// 3. filter() — დატოვე მხოლოდ ლუწი რიცხვები.
// 4. map() — ლუწ რიცხვებს დაუმატე 20, ხოლო კენტებს გამოაკელი 10. ამ ეტაპზე გამოიყენე ternary operator.
// 5. filter() — დატოვე 100-ზე მეტი შედეგები.
// 6. reduce() — გამოთვალე საბოლოო მასივის ჯამი.
// 7. reduce() — გამოთვალე საბოლოო მასივის საშუალო არითმეტიკული.
// 8. reduce() — იპოვე უდიდესი ელემენტი.
// 9. findIndex() — იპოვე საწყის მასივში პირველი 100-ზე ნაკლები ლუწი რიცხვის ინდექსი.
// 10. some() — შეამოწმე, არსებობს თუ არა საწყის მასივში 140-ზე მეტი რიცხვი.
// 11. every() — შეამოწმე, არის თუ არა საბოლოო მასივის ყველა ელემენტი 100-ზე მეტი და ლუწი.
// 12. forEach() — დაბეჭდე საბოლოო მასივის ყველა ელემენტი, ინდექსი და ის, არის თუ არა რიცხვი 200-ზე მეტი.
// 13. საბოლოოდ დაბეჭდე საწყისი მასივის ელემენტების რაოდენობა, საბოლოო მასივის ელემენტების რაოდენობა, მათი ჯამი და საშუალო არითმეტიკული.