// 1) მოცემულია მასივი numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. გამოიყენე filter(), რომ მიიღო მხოლოდ ლუწი რიცხვების მასივი.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNum = numbers.filter(x=>x%2==0)

// 2) მოცემულია სიტყვების მასივი fruits = ["ვაშლი", "მსხალი", "ატამი", "კივი", "ბანი"]. დატოვე მხოლოდ ის სიტყვები, რომელთა სიგრძეც 4 ასოზე მეტია.

// let fruits = ["ვაშლი", "მსხალი", "ატამი", "კივი", "ბანი"]
// let dd = fruits.filter(x=>x.length>4)


// 3) მოცემულია მასივი: numbers = [-5, 10, -3, 0, 8, -1, 15]. მიიღე მასივი, სადაც მხოლოდ დადებითი რიცხვები იქნება (0-ის ჩათვლით).

// numbers = [-5, 10, -3, 0, 8, -1, 15]
// let newNumbers = numbers.filter(x=>x>=0)


// 4) მოცემულია სახელების მასივი names = ["ანა", "გიორგი", "არჩილი", "დავითი", "ანანო"]. დატოვე მხოლოდ ის სახელები, რომლებიც იწყება ასო "ა"-თი (გამოიყენე .startsWith()

// names = ["ანა", "გიორგი", "არჩილი", "დავითი", "ანანო"]

// let newNames = names.filter(x=>x.startsWith('ა'))



// 5) მოცემულია მასივი list = [0, "გამარჯობა", "", null, undefined, "JS", false]. გამოიყენე filter(), რომ ამოიღო ყველა "falsy" (ცარიელი/არავალიდური) მნიშვნელობა.

// let list = [0, "გამარჯობა", "", null, undefined, "JS", false]

// let newList = list.filter(x=>x)


// 6) მოცემულია მასივი numbers = [5, 12, 45, 8, 20, 100, 33]. დატოვე მხოლოდ ის რიცხვები, რომლებიც არის 10-დან 50-მდე (10-ის და 50-ის ჩათვლით).


// let numbers = [5, 12, 45, 8, 20, 100, 33]

// let newNum = numbers.filter(x=>x>=10 && x<=50)

// 7) მოცემულია სიტყვები ["apple", "banana", "cherry", "date", "avocado"]. დატოვე მხოლოდ ის სიტყვები, რომლებიც შეიცავენ ასო "a"-ს.

// let fruits = ["apple", "banana", "cherry", "date", "avocado"]
// let newFruits = fruits.filter(x=>x.includes('a'))


// 8) მოცემულია შერეული მასივი list = [10, "ვაშლი", true, 25, "მსხალი", false, 50]. გაფილტრე ყველა ტიპი სათითაოდ string-ისთვი
//  ცალკე შექმენი ახალი მასივი ასვე number და boolean-ისთვის კიდევ ცალკე, ჯამში 3 ახალი მასივი უნდა ჰქინდეს stringList,numberList,booleanList.


// let list = [10, "ვაშლი", true, 25, "მსხალი", false, 50]

// let numberList = list.filter(x=>typeof x==='number')
// let stringList = list.filter(x=>typeof x==='string')
// let booleanList = list.filter(x=>typeof x==='boolean')
