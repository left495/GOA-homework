
// 1)

// შექმენით ობიექტი სახელად product სადაც შეინახავ შემდეგ ქიებს(მნიშვნელობა თქვენით მოუფიქრეთ) --> 
// productName , price , quantity , inStock(მიანჭეთ ბულეანი) , 

// ქვემოთ შექმენით მეთოდი სახელად allProdPrice() რომელიც დააბრუნებს ობიექტში მყოფ მთლიანი
//  პროდუქტების ფასის ჯამს(დაფიქრდით ამისთვის რაუნდა გააკეთოთ)

// შემდეგ შექმენი შემდეგი მეთოდი isStock() რომელიც ტერნარი ოპერატორით შეამოწმებს თუ inStock 
// არის true მაშინ დააბრუნოს "yes we have this nproduct" სხვა შემთვევაში "no we dont have this product"
//  გამოიძახეთ ორივე მეთოდი და ნახეთ შედეგი



// let product = {
//     productName:'smartWatch',
//     price:1000,
//     quantity:5,
//     inStock:true,
//     allProdPrice(){
//         return product.quantity*product.price
//     },
//     isStock(){
//         return product.inStock === true ?"yes we have this nproduct": "no we dont have this product"
//     }
// }



// console.log(product.allProdPrice())

// console.log(product.isStock())


// 2)


// let university = {
//     name: "Tbilisi University",
//     address: {
//         city: "Tbilisi",
//         building: {
//             number: 10,
//             floors: 6
//         }
//     },
//     department: {
//         name: "Computer Science",
//         students: ["Nika", "Ana", "Gio", "Mariam"],
//         teacher: {
//             name: "Luka",
//             subjects: ["JavaScript", "Python", "React"]
//         }
//     },
//     library: {
//         books: {
//             programming: ["JavaScript Basics", "Learn Python"],
//             databases: ["SQL Guide", "MongoDB Basics"]
//         }
//     }
// };





// --- გამოიტანე კონსოლში რიცხვი 10
// --- შეცვალე Tbilisi --> Qutaisi ით
// --- წაშალე floor : 6 ფროფერთი მთლიანად
// --- გამოიტანე Python 
// --- subject სიის ბოლოში დაამატე c++
// --- "luka" შეცვალე შენი სახელით
// --- წაშალე programming : ["JavaScript Basics", "Learn Python"] books ობიექტიდან
// --- გამოიტანე databases სიიდან ისეთი ელემენტები რომლის სიგრძე მეტია 10 ზე(გამოიყენე for)



let university = {
    name: "Tbilisi University",
    address: {
        city: "Tbilisi",
        building: {
            number: 10,
            floors: 6
        }
    },
    department: {
        name: "Computer Science",
        students: ["Nika", "Ana", "Gio", "Mariam"],
        teacher: {
            name: "Luka",
            subjects: ["JavaScript", "Python", "React"]
        }
    },
    library: {
        books: {
            programming: ["JavaScript Basics", "Learn Python"],
            databases: ["SQL Guide", "MongoDB Basics"]
        }
    }
};

console.log(university.address.building.number)
university.address.city = 'Qutaisi'
delete university.address.building.floors
console.log(university.department.teacher.subjects[1]);
university.department.teacher.subjects.push('c++')
university.department.teacher.name = 'tsotne'
delete university.library.books.programming

for (let i = 0;i<university.library.books.databases.length;i++){
    if(university.library.books.databases[i].length>10){
        console.log(university.library.books.databases[i])
    }
}

// --- გამოიტანე კონსოლში რიცხვი 10
// --- შეცვალე Tbilisi --> Qutaisi ით
// --- წაშალე floor : 6 ფროფერთი მთლიანად
// --- გამოიტანე Python 
// --- subject სიის ბოლოში დაამატე c++
// --- "luka" შეცვალე შენი სახელით
// --- წაშალე programming : ["JavaScript Basics", "Learn Python"] books ობიექტიდან
// --- გამოიტანე databases სიიდან ისეთი ელემენტები რომლის სიგრძე მეტია 10 ზე(გამოიყენე for)
