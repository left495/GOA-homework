// 1)
let products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 2500, rating: 4.8, inStock: true },
    { id: 2, name: "Phone", category: "Electronics", price: 1800, rating: 4.5, inStock: false },
    { id: 3, name: "Headphones", category: "Accessories", price: 300, rating: 4.2, inStock: true },
    { id: 4, name: "Keyboard", category: "Accessories", price: 450, rating: 3.9, inStock: true },
    { id: 5, name: "Monitor", category: "Electronics", price: 1200, rating: 4.9, inStock: false },
    { id: 6, name: "Mouse", category: "Accessories", price: 150, rating: 4.6, inStock: true },
    { id: 7, name: "Tablet", category: "Electronics", price: 900, rating: 3.7, inStock: true }
];


// მოთხოვნები
// 1. forEach()
// - დაბეჭდე თითოეული პროდუქტის სახელი და ფასი შემდეგი ფორმატით:
//   "Laptop costs 2500 GEL"
// - ცალკე დაბეჭდე მხოლოდ იმ პროდუქტების სახელები, რომლებიც მარაგშია (inStock: true).
// 2. filter()
// - შექმენი ახალი სია, სადაც იქნება მხოლოდ Electronics კატეგორიის პროდუქტები.
// - შექმენი ახალი სია, სადაც მოხვდება პროდუქტები, რომელთა ფასი 500-ზე მეტია და რეიტინგი 4.5-ზე მაღალია.
// - შექმენი ახალი სია, სადაც იქნება მხოლოდ ის პროდუქტები, რომლებიც მარაგში არ არის.
// 3. map()
// - შექმენი ახალი სია, რომელშიც თითოეული პროდუქტი წარმოდგენილი იქნება შემდეგი ფორმით:
//   "Laptop - 2500 GEL"
// - შექმენი ახალი სია, სადაც ყველა პროდუქტის ფასი გაზრდილი იქნება 100 ლარით. შეინარჩუნე თითოეული პროდუქტის დანარჩენი ინფორმაცია.
// 4. findIndex()
// - იპოვე იმ პროდუქტის ინდექსი, რომლის სახელია "Monitor".
// - იპოვე პირველი პროდუქტის ინდექსი, რომლის რეიტინგიც 4-ზე ნაკლებია.
// 5. some()
// - შეამოწმე, არსებობს თუ არა ისეთი პროდუქტი, რომლის ფასიც 2000-ზე მეტია.
// - შეამოწმე, არსებობს თუ არა ისეთი პროდუქტი, რომელიც მარაგში არ არის.
// 6. every()
// - შეამოწმე, ყველა პროდუქტის ფასი 100-ზე მეტია თუ არა.
// - შეამოწმე, ყველა პროდუქტის რეიტინგი 3.5-ზე მაღალია თუ არა.
// დამატებითი გამოწვევა
// გამოიყენე რამდენიმე მეთოდი ერთად:
// 1. filter()-ით მიიღე მხოლოდ მარაგში არსებული პროდუქტები.
// 2. მიღებული სიიდან map()-ით შექმენი ახალი სია, სადაც თითოეული ელემენტი იქნება პროდუქტის სახელი და ფასი.
// 3. მიღებული შედეგი დაბეჭდე forEach()-ის გამოყენებით.

// products.forEach(x=>{
//     console.log(`${x.name} costs ${x.price} GEl`);
//     if(x.inStock==true){
//         x.name
//     }
    
// })

let fil = products.filter(x=>x.category == 'Electronics')
let fil2 = products.filter(x=>x.price > 500 && x.rating > 4.5)
let fil3 = products.filter(x=>x.inStock==false)

let map = products.map(x=>x.name+' - '+x.price+' GEL')
let map2 = products.map(x=>{
    x.price+=100
    return x
})

let find = products.findIndex(x=>x.name == 'Monitor')
let find1 = products.findIndex(x=>x.rating<4)


let some = products.some(x=>x.price>2000)
let some2 = products.some(x=>x.inStock == false)

let every = products.every(x=>x.price>100)
let every2 = products.every(x=>x.rating>3.5)

let filter = products.filter(x=>x.inStock == true)
let mapped = filter.map(x=>x.name+' - '+x.price)
mapped.forEach(x=>{
    console.log(x);
})
