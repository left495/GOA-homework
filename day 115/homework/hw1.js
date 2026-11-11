// 1)შექმენი Factory Function createCharacter, რომელსაც გადაეცემა სამი პარამეტრი:
// - name — პერსონაჟის სახელი
// - health — სიცოცხლის რაოდენობა
// - damage — დარტყმის ძალა
// Factory Function-მა უნდა დააბრუნოს ობიექტი შემდეგი თვისებებითა და მეთოდებით:
// 1. name
// 2. health
// 3. damage
// 4. attack(target) — უნდა შეამციროს მოწინააღმდეგის სიცოცხლე საკუთარი damage-ის მიხედვით.
//    - თუ მოწინააღმდეგის სიცოცხლე 0 ან ნაკლებია, გამოიტანოს შეტყობინება "Target is already defeated!".
//    - თუ მოწინააღმდეგის სიცოცხლე დადებითია, შეუმციროს სიცოცხლე.
// 5. heal(amount) — უნდა აღადგინოს პერსონაჟის სიცოცხლე.
//    - სიცოცხლე არ უნდა გახდეს 100-ზე მეტი.
// 6. getStatus() — დააბრუნოს პერსონაჟის ინფორმაცია სახელითა და სიცოცხლით.
// შექმენი 3 პერსონაჟი და მოახდინე მათ შორის რამდენიმე შეტევა.

// function createCharacter(name,health,damage){
//     return {
//         name:name,
//         health:health,
//         damage:damage,
//         attack(target){
//             target.health-=this.damage
//             if(target.health<=0){
//                 return "Target is already defeated!"
//             }
//         },
//         heal(amount){
//             if(health+amount>=100){
//                 health+=amount
//             }
//         },
//         getStatus(){
//             return this.name+' '+this.health
//         }
//     }
// }

// let fighter1 = createCharacter('ilia',120,25)
// let fighter2 = createCharacter('merabi',110,20)
// let fighter3 = createCharacter('daviti',100,20)

// fighter1.attack(fighter2)
// fighter2.attack(fighter3)
// fighter3.attack(fighter1)

// console.log(fighter1.heal(30));
// console.log(fighter2.heal(12));
// console.log(fighter3.heal(9));

// console.log(fighter1.getStatus());
// console.log(fighter2.getStatus());
// console.log(fighter3.getStatus());


// 2)შექმენი Factory Function createBankAccount, რომელსაც გადაეცემა:
// - owner — ანგარიშის მფლობელი
// - balance — საწყისი თანხა
// - pin — ანგარიშის PIN კოდი
// დაბრუნებულ ობიექტს უნდა ჰქონდეს:
// 1. owner
// 2. deposit(amount) — თანხის დამატება.
//    - თანხა უნდა იყოს დადებითი.
// 3. withdraw(amount, enteredPin) — თანხის გამოტანა.
//    - ჯერ უნდა შემოწმდეს PIN კოდი.
//    - თუ PIN არასწორია, გამოიტანოს "Incorrect PIN!".
//    - თუ თანხა ბალანსზე მეტია, გამოიტანოს "Not enough money!".
//    - სხვა შემთხვევაში შეამციროს ბალანსი.
// 4. getBalance() — დააბრუნოს მიმდინარე ბალანსი.
// 5. changePin(oldPin, newPin) — PIN-ის შეცვლა.
//    - ძველი PIN უნდა ემთხვეოდეს არსებულს.
//    - ახალი PIN უნდა შედგებოდეს ზუსტად 4 სიმბოლოსგან.
// შექმენი ორი საბანკო ანგარიში და შეამოწმე ყველა მეთოდი.


// function createBankAccount(owner,balance,pin){
//     return {
//         owner:owner,
//         _balance:balance,
//         pin:pin,
//         deposit(amount){
//             if(amount>=0){
//                 this._balance+=amount
//             }
//         },
//         withdraw(amount,enteredPin){
//             if(enteredPin != this.pin){
//                 return "Incorrect PIN!"
//             }else{
//                 if(amount>=this._balance){
//                     return "Not enough money!"
//                 }else{
//                     this._balance-=amount
//                 }
//             }
//         },
//         get balance(){
//             return this._balance

//         },
//         changePin(oldPin, newPin){
//             if(oldPin == this.pin && newPin.length == 4){
//                 this.pin = newPin
//             }
//         }

//     }
// }

// let acc1 = createBankAccount('goga',2000,'4444')
// let acc2 = createBankAccount('tsotne',1500,'1234')

// console.log(acc1.deposit(500));
// console.log(acc2.deposit(400));

// console.log(acc1.withdraw(400,'5555'));
// console.log(acc2.withdraw(500,'1234'));

// console.log(acc1.balance);
// console.log(acc2.balance);

// acc1.changePin('4444','1980')
// acc1.changePin('1234','12345')

// console.log(acc1.pin);
// console.log(acc2.pin);


// 3)
// 3)შექმენი Factory Function createStudent, რომელსაც გადაეცემა:
// - name
// - age
// - grades — ქულების მასივი.
// დაბრუნებულ ობიექტს უნდა ჰქონდეს:
// 1. name
// 2. age
// 3. grades
// 4. addGrade(grade) — დაამატოს ახალი ქულა მხოლოდ იმ შემთხვევაში, თუ ის 0-დან 100-მდეა.
// 5. getAverage() — დაითვალოს და დააბრუნოს საშუალო ქულა.
// 6. getResult() — საშუალო ქულის მიხედვით დააბრუნოს:
//    - 90 ან მეტი — "Excellent"
//    - 70-დან 89-მდე — "Good"
//    - 50-დან 69-მდე — "Average"
//    - 50-ზე ნაკლები — "Failed"
// 7. getInfo() — დააბრუნოს სტუდენტის სრული ინფორმაცია, მათ შორის საშუალო ქულა და შედეგი.
// შექმენი მინიმუმ 3 სტუდენტი განსხვავებული ქულებით.

// function createStudent(name,age,grades){
//     return {
//         name:name,
//         age:age,
//         grades:grades,
//         addGrade(grade){
//             if(grade>=0 && grade<100){
//                 this.grades+=grade
//             }
//         },
//         getAverage(){
//             return this.grades.reduce((a,x)=>a+x)/this.grades.length
//         },
//         getResult(){
//             return this.grades.forEach(x=>{
//                 console.log(x>=90?'Excellent':x>=70?'Good':x>=50?'Avarage':'Failed')
//             })
//         },
//         getInfo(){
//             return this
//         }
//     }
// }

// let stu1 = createStudent('tsotne',15,[50,40,70,80])
// let stu2 = createStudent('irakli',20,[90,80,95,85])
// let stu3 = createStudent('tekla',17,[80,75,89,97])

// console.log(stu1.getAverage());
// console.log(stu1.getInfo());
// console.log(stu1.getResult());

// console.log(stu2.getAverage());
// console.log(stu2.getInfo());
// console.log(stu2.getResult());

// console.log(stu3.getAverage());
// console.log(stu3.getInfo());
// console.log(stu3.getResult());



// 4)შექმენი Factory Function createCart, რომელსაც საწყისად არ გადაეცემა პარამეტრები.

// დაბრუნებულ ობიექტს უნდა ჰქონდეს:

// - items — ცარიელი მასივი.

// მეთოდები:
// 1. addProduct(name, price, quantity) — დაამატოს პროდუქტი კალათაში.
//    - თუ პროდუქტი უკვე არსებობს, გაზარდოს მისი რაოდენობა.
//    - თუ არ არსებობს, დაამატოს ახალი ობიექტი.
// 2. removeProduct(name) — წაშალოს პროდუქტი სახელის მიხედვით.
// 3. increaseQuantity(name, amount) — გაზარდოს კონკრეტული პროდუქტის რაოდენობა.
// 4. getTotal() — დაითვალოს ყველა პროდუქტის საერთო ღირებულება.
// 5. getCartInfo() — დააბრუნოს კალათაში არსებული ყველა პროდუქტის ინფორმაცია.
// შექმენი ორი დამოუკიდებელი კალათა და შეამოწმე, რომ ერთი კალათის ცვლილება მეორეზე არ მოქმედებდეს.

// function createCart(){
//     return {
//         items:[],
//         addProduct(name,price,quantity){
//             if(!name in this.items){
//                 this.items.push(name)
//             }
//         }
//     }
// }