  






//   1)შექმენი 4 ცვლადი let ის გამოყენებით,


// 1)name
// 2)surname
// 3)age
// 4)adress

// გამოიტანე შემდეგნაირი ტექსტი : hello,my name is ... ,my surname is ... and my age is ... age , i live in ... . 

// სამი წერტილის მაგივრად უნდა ჩასვათ ცვლადის მნიშვნელობები,გამოიყენეთ string interpolation --> `...${}...`

// let name = 'tsotne'
// let surname = 'photskhveria'
// let age = '14'
// let adress = 'tbilisi'

// console.log(`hello,my name is ${name},my surname is ${surname} and my age is ${age} age , i live in ${adress} .`)





// 2)typeof — მარტივი

// შექმენი 5 ცვლადი სხვადასხვა ტიპის მნიშვნელობით:

// string
// number
// boolean
// undefined
// object

// typeof-ის გამოყენებით დაბეჭდე თითოეულის ტიპი.

// let und
// let string = 'string'
// let num = 15
// let bool = true
// let obj = {
//     name:'tsotne',
//     city:'tbilisi'
// }

// console.log(typeof und)
// console.log(typeof string)
// console.log(typeof num)
// console.log(typeof bool)
// console.log(typeof obj)


// 3)შექმენი name ცვლადი. if/else-ით შეამოწმე, იწყება თუ არა სახელი "G"-ით startsWith()-ის გამოყენებით.


// let name = 'tsotne'


// if(name.startsWith('G')){
//     console.log(true)
// }else{
//     console.log(false)
    
// }

// 4)შექმენი word ცვლადი. შეამოწმე, იწყება თუ არა "Java"-თი.
// თუ კი:
// This word starts with Java
// სხვა შემთხვევაში:
// This word does not start with Java

// let word = 'Javascript'

// if(word.startsWith('Java')){
//     console.log('This word starts with Java')
// }else{
//     console.log('This word does not start with Java')
    
// }

// 5)შექმენი username. თუ username იწყება "admin"-ით, გამოიტანე:
// Welcome, admin!
// სხვა შემთხვევაში:
// Welcome, user!


// let username = 'user10294683'

// if(username.startsWith('admin')){
//     console.log('Welcome, admin!')
// }else{
//     console.log('Welcome, user!')
    
// }

// 6)შექმენი name და city. Interpolation-ის გამოყენებით გამოიტანე:
// My name is Goga and I live in Tbilisi.


// let name = 'Goga'
// let city = 'tbilisi'

// console.log(`My ${name} is Goga and I live in ${city}.`)


// 7)შექმენი username და name.

// თუ username იწყება "admin"-ით, გამოიტანე:

// Welcome, ${name}! You are an admin.

// სხვა შემთხვევაში:

// Welcome, ${name}! You are a regular user.

// let name = 'tsotne'
// let username = 'user0936821'

// if (username.startsWith('admin')){
//     console.log(`Welcome, ${name}! You are an admin.`)
// }else{
//     console.log(`Welcome, ${name}! You are a regular user.`)
    
// }


// 9)შექმენი name და username.

// თუ username იწყება "teacher"-ით:
// Hello ${name}, you are a teacher.

// სხვა შემთხვევაში:
// Hello ${name}, you are a student.


// let name = 'tsotne'
// let username = 'student0913'


// if (username.startsWith('teacher')){
//     console.log(`Hello ${name}, you are a teacher.`)
// }else{
//     console.log(`Hello ${name}, you are a student.`)
    
// }