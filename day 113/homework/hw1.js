// 1)


// მოთხოვნები:
// 1. filter()-ის გამოყენებით შექმენი ახალი სია, სადაც მხოლოდ აქტიური სტუდენტები იქნებიან.
// 2. forEach()-ით გამოიტანე ყველა სტუდენტის სახელი და ქულა.
// 3. map()-ით შექმენი ახალი სია, სადაც თითოეული ელემენტი იქნება სტუდენტის სახელი და მისი სტატუსი (Passed ან Failed). ჩათვალე, რომ ჩაბარების ზღვარია 50 ქულა.
// 4. findIndex()-ით იპოვე სტუდენტის ინდექსი, რომლის სახელია "Mariam".
// 5. some()-ით შეამოწმე, არსებობს თუ არა სტუდენტი, რომელსაც 90-ზე მეტი ქულა აქვს.
// 6. every()-ით შეამოწმე, ყველა სტუდენტი არის თუ არა 16 წლის ან უფროსი.

// let students = [
//     { name: "Nika", age: 17, score: 85, active: true },
//     { name: "Ana", age: 19, score: 45, active: false },
//     { name: "Giorgi", age: 21, score: 92, active: true },
//     { name: "Mariam", age: 18, score: 67, active: true },
//     { name: "Luka", age: 16, score: 38, active: false },
//     { name: "Saba", age: 20, score: 74, active: true }
// ];



// let fil = students.filter(x=>x.active == true)
// fil.forEach(x=>console.log(x.name+' - '+x.score))
// let map = students.map(x=>{
//     if(x.score>=50){
//         return x.name+' - Passed'
//     }else{
//         return x.name+' - Failed'
//     }
// })
// let find = students.findIndex(x=>x.name == 'Mariam')
// let some = students.some(x=>x.score>90)
// let every = students.every(x=>+x.age>=16)


// console.log(fil);
// console.log(map);
// console.log(find);
// console.log(some);
// console.log(every);


// 2)


// მოთხოვნები:
// 1. filter()-ით მიიღე მხოლოდ ის პროდუქტები, რომლებიც მარაგშია.
// 2. forEach()-ით გამოიტანე თითოეული პროდუქტის სახელი და ფასი.
// 3. map()-ით შექმენი ახალი სია, სადაც ყველა პროდუქტის ფასი გაზრდილი იქნება 100 ლარით.
// 4. findIndex()-ით იპოვე "Headphones"-ის ინდექსი.
// 5. some()-ით შეამოწმე, არის თუ არა პროდუქტი, რომლის ფასიც 2000 ლარზე მეტია.
// 6. every()-ით შეამოწმე, ყველა პროდუქტს აქვს თუ არა მარაგში მინიმუმ ერთი ცალი.

// let products = [
//     { name: "Laptop", price: 2500, stock: 5, category: "Electronics" },
//     { name: "Phone", price: 1800, stock: 0, category: "Electronics" },
//     { name: "Book", price: 40, stock: 12, category: "Education" },
//     { name: "Headphones", price: 250, stock: 8, category: "Electronics" },
//     { name: "Notebook", price: 15, stock: 0, category: "Education" },
//     { name: "Monitor", price: 900, stock: 3, category: "Electronics" }
// ];


// let fil = products.filter(x=>x.stock>0)
// products.forEach(x=>console.log(x.name+' - '+x.price))
// let map = products.map(x=>{
//     x.price+=100
//     return x
// })
// let find = products.findIndex(x=>x.name == 'Headphones')
// let some = products.some(x=>x.price>2000)
// let every = products.every(x=>x.stock>0)

// console.log(fil);
// console.log(map);
// console.log(find);
// console.log(some);
// console.log(every);



// 3)

// მოთხოვნები:
// 1. filter()-ით შექმენი ახალი სია, სადაც მხოლოდ ცოცხალი პერსონაჟები იქნებიან.
// 2. forEach()-ით გამოიტანე თითოეული პერსონაჟის სახელი და Health.
// 3. map()-ით შექმენი ახალი სია, სადაც თითოეულ პერსონაჟს ექნება სახელი და ახალი Health, რომელიც იქნება არსებული Health + 20.
// 4. findIndex()-ით იპოვე "Wizard" პერსონაჟის ინდექსი.
// 5. some()-ით შეამოწმე, არსებობს თუ არა პერსონაჟი, რომლის Level 18-ზე მეტია.
// 6. every()-ით შეამოწმე, ყველა პერსონაჟი ცოცხალია თუ არა.

// let characters = [
//     { name: "Shadow", health: 85, level: 10, alive: true },
//     { name: "Dragon", health: 0, level: 15, alive: false },
//     { name: "Knight", health: 60, level: 7, alive: true },
//     { name: "Wizard", health: 100, level: 20, alive: true },
//     { name: "Hunter", health: 25, level: 5, alive: true },
//     { name: "Ghost", health: 0, level: 12, alive: false }
// ];


// let fil = characters.filter(x=>x.alive == true)
// characters.forEach(x=>console.log(x.name+' - '+x.health))
// let map = characters.map(x=>{
//     x.health+=20
//     return x
// })
// let find = characters.findIndex(x=>x.name == 'Wizard')
// let some = characters.some(x=>x.level>18)
// let every = characters.every(x=>x.alive == true)


// console.log(fil);
// console.log(map);
// console.log(find);
// console.log(some);
// console.log(every);



// 4)

// მოთხოვნები:
// 1. filter()-ით მიიღე მხოლოდ IT დეპარტამენტის თანამშრომლები.
// 2. forEach()-ით გამოიტანე თითოეული თანამშრომლის სახელი და ხელფასი.
// 3. map()-ით შექმენი ახალი სია, სადაც თითოეულ თანამშრომელს ექნება სახელი და გამოცდილების მიხედვით დამატებული ბონუსი:
//    - თუ გამოცდილება 5 ან მეტია, ბონუსი არის 500.
//    - სხვა შემთხვევაში ბონუსი არის 200.
// 4. findIndex()-ით იპოვე თანამშრომელი, რომლის ხელფასი 4000-ია.
// 5. some()-ით შეამოწმე, არსებობს თუ არა თანამშრომელი, რომელსაც 6 წელზე მეტი გამოცდილება აქვს.
// 6. every()-ით შეამოწმე, ყველა თანამშრომლის ხელფასი 1000-ზე მეტია თუ არა.


// let employees = [
//     { name: "Gio", salary: 2500, experience: 3, department: "IT" },
//     { name: "Nino", salary: 1800, experience: 1, department: "HR" },
//     { name: "Luka", salary: 3200, experience: 5, department: "IT" },
//     { name: "Ana", salary: 2100, experience: 2, department: "Marketing" },
//     { name: "Saba", salary: 4000, experience: 7, department: "IT" },
//     { name: "Mariam", salary: 1500, experience: 1, department: "HR" }
// ];


// let fil = employees.filter(x=>x.department == 'IT')
// employees.forEach(x=>console.log(x.name+' - '+x.salary))
// let map = employees.map(x=>{
//     if(x.experience>=5 ){
//         x.bonus = 500
//     }else{
//         x.bonus = 200
//     }

//     return x
// })
// let find = employees.findIndex(x=>x.salary == 4000)
// let some = employees.some(x=>x.experience>6)
// let every = employees.every(x=>x.salary>1000)

// console.log(fil);
// console.log(map);
// console.log(find);
// console.log(some);
// console.log(every);


// 5)


// მოთხოვნები:
// 1. filter()-ით შექმენი სია, რომელშიც მხოლოდ მიტანილი შეკვეთები იქნება.
// 2. forEach()-ით გამოიტანე ყველა შეკვეთის ID და მომხმარებლის სახელი.
// 3. map()-ით შექმენი ახალი სია, სადაც თითოეული შეკვეთის თანხა გაზრდილი იქნება 50 ლარით.
// 4. findIndex()-ით იპოვე შეკვეთა, რომლის ID არის 104.
// 5. some()-ით შეამოწმე, არსებობს თუ არა შეკვეთა, რომლის ღირებულება 700 ლარზე მეტია.
// 6. every()-ით შეამოწმე, ყველა შეკვეთის ღირებულება 100 ლარზე მეტია თუ არა.

// let orders = [
//     { id: 101, customer: "Nika", total: 350, delivered: true },
//     { id: 102, customer: "Ana", total: 120, delivered: false },
//     { id: 103, customer: "Gio", total: 750, delivered: true },
//     { id: 104, customer: "Mariam", total: 90, delivered: false },
//     { id: 105, customer: "Luka", total: 500, delivered: true },
//     { id: 106, customer: "Saba", total: 220, delivered: false }
// ];


// let fil = orders.filter(x=>x.delivered == true)
// orders.forEach(x=>console.log(x.id+' - '+x.customer))
// let map = orders.map(x=>{
//     x.total+=50
//     return x
// })
// let find = orders.findIndex(x=>x.id == 104)
// let some = orders.some(x=>x.total>700)
// let every = orders.every(x=>x.orders>100)

// console.log(fil);
// console.log(map);
// console.log(find);
// console.log(some);
// console.log(every);




// 6)


// მოთხოვნები:
// 1. filter()-ით მიიღე მხოლოდ ის ფილმები, რომელთა რეიტინგი 8-ზე მეტია.
// 2. forEach()-ით გამოიტანე ყველა ფილმის სათაური და გამოშვების წელი.
// 3. map()-ით შექმენი ახალი სია, სადაც თითოეული ფილმი წარმოდგენილი იქნება შემდეგი ფორმით: "Avatar - 8.5".
// 4. findIndex()-ით იპოვე "Interstellar"-ის ინდექსი.
// 5. some()-ით შეამოწმე, არის თუ არა ისეთი ფილმი, რომელიც ჯერ არ უნახავთ.
// 6. every()-ით შეამოწმე, ყველა ფილმის რეიტინგი 6-ზე მეტია თუ არა.

// let movies = [
//     { title: "Avatar", rating: 8.5, year: 2009, watched: true },
//     { title: "Titanic", rating: 7.9, year: 1997, watched: true },
//     { title: "Joker", rating: 8.4, year: 2019, watched: false },
//     { title: "Inception", rating: 9.0, year: 2010, watched: true },
//     { title: "Venom", rating: 6.5, year: 2021, watched: false },
//     { title: "Interstellar", rating: 9.2, year: 2014, watched: false }
// ];


// let fil = movies.filter(x=>x.rating>8)
// movies.forEach(x=>console.log(x.title+' - '+x.year))
// let map = movies.map(x=>x.title+' - '+x.rating)
// let find = movies.findIndex(x=>x.title ==  'Interstellar')
// let some = movies.some(x=>x.watched == false)
// let every = movies.every(x=>x.rating>6)


// console.log(fil);
// console.log(map);
// console.log(find);
// console.log(some);
// console.log(every);
