

// 1)შექმენი ფუნქცია editProducts(products), რომელსაც გადაეცემა პროდუქტების სია.

// მაგალითად:

// ["Laptop", "Mouse", "Keyboard", "Monitor"]

// ფუნქციამ უნდა:

// დასაწყისში დაამატოს "Phone"
// ბოლოში დაამატოს "Headphones"
// ამოიღოს ბოლო ელემენტი
// "Mouse" ჩაანაცვლოს "Webcam"-ით
// დააბრუნოს საბოლოო სია

// function editProducts(products){
//     products.unshift('Phone')
//     products.push('Headphones')
//     products.pop()
//     products[products.indexOf('Mouse')]='Webcam'

//     return products
// }


// console.log(editProducts(["Laptop", "Mouse", "Keyboard", "Monitor"]))

// 2)შექმენი ფუნქცია organizeNumbers(numbers).

// მოცემულია:

// [10, 20, 30, 40, 50, 60, 70, 80]

// ფუნქციამ უნდა:

// slice()-ით გამოყოს პირველი 4 ელემენტი;
// slice()-ით გამოყოს ბოლო 4 ელემენტი;
// მეორე სიის დასაწყისში დაამატოს 100;
// პირველ სიას ბოლოში დაამატოს 5;
// concat()-ით გააერთიანოს ორივე;
// დააბრუნოს საბოლოო სია.


// function organizeNumbers(numbers){
//     let newNum = numbers.slice(0,4)
//     let newNum1 = numbers.slice(numbers.length-4,)
//     newNum1.unshift(100)
//     newNum.push(5)

//     return newNum.concat(newNum1)


// }

// console.log(organizeNumbers([10, 20, 30, 40, 50, 60, 70, 80]))



// 3)შექმენი ფუნქცია studentManager(students).

// ["Giorgi", "Nika", "Ana", "Luka", "Saba"]

// ფუნქციამ უნდა:

// ამოიღოს პირველი სტუდენტი;
// დაამატოს "Mariam" დასაწყისში;
// დაამატოს "Dato" ბოლოში;
// "Luka" ჩაანაცვლოს "Gabrieli"-ით splice()-ის გამოყენებით;
// საბოლოო სიიდან slice()-ით შექმნას ახალი სია, რომელიც შეიცავს მხოლოდ პირველ 4 სტუდენტს;
// დააბრუნოს ახალი სია.

// function studentManager(students){
//     students.shift()
//     students.unshift('Mariam')
//     students.push('Dato')
//     students.splice(3,1,'Gabrieli')
//     let newStudents = students.toSpliced(4,students.length-4)
//     return newStudents
// }



// console.log(studentManager(["Giorgi", "Nika", "Ana", "Luka", "Saba"]));



// 4)შექმენი ფუნქცია shoppingCart(cart).

// ["Bread", "Milk", "Cheese", "Apple", "Juice"]

// ფუნქციამ უნდა:

// დასაწყისში დაამატოს "Water";
// ბოლოში დაამატოს "Chocolate";
// ამოიღოს პირველი ელემენტი;
// splice()-ით "Cheese" ჩაანაცვლოს "Yogurt"-ით;
// slice()-ით შექმნას სიის პირველი 4 ელემენტის ასლი;
// დააბრუნოს ეს ახალი სია.

// function shoppingCart(cart){
//     cart.unshift('Water')
//     cart.push('Chocolate')
//     cart.shift()
//     cart.splice(3,1,'Yogurt')
//     let newCart = cart.slice(0,4)

//     return newCart
// }


// console.log(shoppingCart(["Bread", "Milk", "Cheese", "Apple", "Juice"]));



// 5)შექმენი ფუნქცია:

// finalList(numbers)

// მოცემულია:

// [15, 25, 35, 45, 55, 65]

// ფუნქციამ უნდა:

// შეამოწმოს Array.isArray()-ით, ნამდვილად სია გადაეცა თუ არა;
// თუ სია არ არის, დააბრუნოს "Not an array";
// თუ სიაა:
// shift()-ით ამოიღოს პირველი ელემენტი;
// unshift()-ით დასაწყისში დაამატოს 100;
// pop()-ით ამოიღოს ბოლო;
// push()-ით ბოლოში დაამატოს 200;
// splice()-ით შუაში დაამატოს 300;
// slice()-ით შექმნას საბოლოო სიის ასლი;
// დააბრუნოს ეს ასლი.


// function finalList(numbers){
//     if(!Array.isArray(numbers)){
//         return 'Not an array'
//     }else{
//         numbers.shift()
//         numbers.unshift(100)
//         numbers.pop()
//         numbers.push(200)
//         numbers.splice(numbers.length/2,1,300)
//         return numbers.slice(0,)
//     }
// }

// console.log(finalList([15, 25, 35, 45, 55, 65]));
