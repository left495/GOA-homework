// ================ პირველი დავალება ==================




// let bankAccount = {
//     _owner:'Goga',
//     _pin:'1234',
//     _balance:2500,
//     _isBlocked:false,
//     get owner(){
//         return this._owner
//     },
//     set owner(keyWord){
//         if(keyWord){
//             this._owner = keyWord
//         }else{
//             console.log( "Invalid owner name!");
//         }
//     },
//     get balance(){
//         return this._balance
//     },
//     set balance(keyNum){
//         if(typeof keyNum == "number" && keyNum>0){
//             this._balance = keyNum
//         }else{
//             console.log("Invalid balance!");
//         }
//     },
//     get pin(){
//         return 'PIN is hidden'
//     },
//     set pin(pin){
//         if(pin.length==4){
//             this._pin = keyWord
//         }else{
//             console.log("PIN must contain exactly 4 digits!");
//         }
//     },
//     get accaontStatus(){
//         if(this._isBlocked == true){
//             return 'Blocked'
//         }else{
//             return 'Active'
//         }
//     },
//     set deposit(num){
//         if(this._isBlocked == true){
//             if(num>0){
//                 this._balance+=num
//             }else{
//                 console.log("Invalid deposit amount!")
//             }
//         }else{
//             console.log("Account is blocked!")
//         }
//     },
//     set withDraw(num){
//         if(this._isBlocked == true){
//             if(num>0 && num<=this._balance){
//                 this._balance-=num
//             }else{
//                 console.log("Insufficient balance!")
//             }
//         }
//     }
// }



// bankAccount.owner = 'tsotne'
// console.log(bankAccount.owner);


// bankAccount.balance = 3000
// console.log(bankAccount.balance);

// bankAccount.pin = '444'
// console.log(bankAccount.pin);

// console.log(bankAccount.accaontStatus);


// bankAccount.deposit = 123
// console.log(bankAccount.balance);


// 1)შექმენი ობიექტი bankAccount, რომელსაც ექნება შემდეგი თვისებები:
// - _owner — "Goga"
// - _balance — 2500
// - _pin — "1234"
// - _isBlocked — false
// შექმენი შემდეგი getter-ები და setter-ები:
// 1. owner
// - Getter-მა უნდა დააბრუნოს ანგარიშის მფლობელის სახელი.
// - Setter-მა უნდა მიიღოს ახალი სახელი, მაგრამ შეცვალოს მხოლოდ მაშინ, თუ ახალი მნიშვნელობა სტრიქონია და ცარიელი არ არის.
// - თუ მნიშვნელობა არასწორია, გამოიტანე შეტყობინება: "Invalid owner name!"
// 2. balance
// - Getter-მა უნდა დააბრუნოს მიმდინარე ბალანსი.
// - Setter-მა უნდა მიიღოს ახალი ბალანსი, მაგრამ ცვლილება დაუშვას მხოლოდ მაშინ, თუ ახალი მნიშვნელობა რიცხვია და 0-ზე ნაკლები არ არის.
// - თუ მნიშვნელობა არასწორია, გამოიტანე "Invalid balance!"
// 3. pin
// - Getter-მა არასოდეს უნდა დააბრუნოს PIN-ის ნამდვილი მნიშვნელობა. მან უნდა დააბრუნოს "PIN is hidden".
// - Setter-მა ახალი PIN უნდა მიიღოს მხოლოდ მაშინ, თუ ის ოთხნიშნა სტრიქონია.
// - სხვა შემთხვევაში გამოიტანე "PIN must contain exactly 4 digits!"
// 4. accountStatus — მხოლოდ Getter
// - თუ _isBlocked არის true, დააბრუნოს "Blocked".
// - სხვა შემთხვევაში დააბრუნოს "Active".
// 5. deposit — მხოლოდ Setter
// - Setter-მა მიიღოს თანხა და დაამატოს ბალანსს.
// - თანხა უნდა იყოს რიცხვი და 0-ზე მეტი.
// - თუ ანგარიში დაბლოკილია, თანხის დამატება არ უნდა მოხდეს.
// - არასწორი თანხის შემთხვევაში გამოიტანე "Invalid deposit amount!"
// - დაბლოკილი ანგარიშის შემთხვევაში გამოიტანე "Account is blocked!"
// 6. withdraw — მხოლოდ Setter
// - Setter-მა მიიღოს გასატანი თანხა.
// - თანხა უნდა იყოს 0-ზე მეტი და ბალანსზე ნაკლები ან მისი ტოლი.
// - დაბლოკილი ანგარიშიდან თანხის გატანა არ უნდა შეიძლებოდეს.
// - არასაკმარისი თანხის შემთხვევაში გამოიტანე "Insufficient balance!"


// ==================მეორე დავალება==================

// let player = {
//     _name:'Shadow',
//     _health:100,
//     _energy:80,
//     _level:1,
//     _experiance:0,
//     _isAlive:true,
//     get name(){
//         return this._name
//     },
//     set name(keyWord){
//         if(typeof keyWord == 'string' &&  keyWord.length>=3){
//             this._name = keyWord
//         }else{
//             console.log("Name must contain at least 3 characters!")
//         }
//     },
//     get health(){
//         return this._health
//     },
//     set health(num){
//         if(typeof num == 'number' && num>=0 && num<=100){
//             this._health+=num
//         }else{
//             console.log("Invalid health!")
//         }

//         this._health<=0? this._isAlive = false:this._isAlive = true
//     },
//     get energy(){
//         return this._energy
//     },
//     set energy(num){
//         if(typeof num =='number' && num>=0 && num<=100){
//             this._energy += num
//         }
//     },
//     get experience(){
//         return this._experiance
//     },
//     set experience(num){
//         if(typeof num == 'number' && num>=0){
//             this._experiance+=num
//         }
//         if(this._experiance > 100){
//             let lev = 0
//             while(true){
//                 if(this._experiance<100){
//                     break
//                 }
//                 this._experiance -=1
//                 lev+=1
//             }
//             this._level+=lev
//         }

//     },
//     get level(){
//         return this._level
//     },
//     get status(){
//         if(this._isAlive == true){
//             if(this._energy >= 0){
//                 return 'Ready'
//             }else if(this._energy == 0){
//                 return 'Exhausted'
//             }else{
//                 return 'Dead'
//             }
//         }
//     },
//     set attack(num){
//         if(this._isAlive == false){
//             if(num>this._energy){
//                 console.log("Not enough energy!")
//             }else{
//                 this._energy -= num
//                 console.log("Attack successful!")
//             }
//         }
//     }

// }

// player.name = 'tsotne'
// console.log(player.name);

// player.health = 30
// console.log(player.health);

// player.energy 
// console.log(player.energy);

// player.experience = 250
// console.log(player.experience);

// console.log(player.level);

// console.log(player.status);

// player.attack = 30

// 2)შექმენი ობიექტი player, რომელსაც ექნება შემდეი თვისებები:
// - _name—"Shadow"
// - _health—100
// - _energy—80
// - _level—1
// - _experience—0
// - _isAlive—true
// შექმენი შემდეგი getter-ები და setter-ები.
// 1. name
// - Getter-მა დააბრუნოს მოთამაშის სახელი.
// - Setter-მა სახელი შეცვალოს მხოლოდ მაშინ, თუ მნიშვნელობა სტრიქონია და სიგრძე მინიმუმ 3 სიმბოლოა.
// - სხვა შემთხვევაში გამოიტანოს "Name must contain at least 3 characters!"
// 2. health
// - Getter-მა დააბრუნოს ჯანმრთელობა.
// - Setter-მა მიიღოს ახალი ჯანმრთელობა მხოლოდ 0-დან 100-ის ჩათვლით.
// - თუ ჯანმრთელობა 0 გახდება, _isAlive ავტომაურად უნდა გახდეს false.
// - თუ ჯანმრთელობა 0-ზე მეია, _isAlive უნდა გახდეს true.
// - სხვა მნიშვნელობის შემთხვევაში გამოიტანოს "Invalid health!"
// 3. energy
// - Getter-მა დააბრუნოს ენერგია.
// - Setter-მა ენერგია შეცვალს მხოლოდ 0-დან 100-ის ჩათვით.
// - არასწორი მნიშვნელობის შემთხვევაში გამოიტანოს "Invalid energy!"
// 4. experience
// - Getter-მა დააბრუნოს მიმდინარე გამოცდილება.
// - Setter-მა მიიღოს მხოლოდ 0 ან მეტი რიცხვი.
// - როდესაც გამოცდილება 100-ს ან მეტს მიაღწევს, მოთამაშის დონე უნდა გაიზარდოს 1-ით და გამოცდილებას უნდა გამოაკლდეს 100.
// - თუ დარჩენილი გამოცილებაც 100-ს ან მეია, დონე კვლავ უნდა გაიზარდოს. მაგალითად, 250 გამოცდილების მიღებისას მოთამაშემ უნდა მოიმატოს 2 დონე და დარჩეს 50 გამოცდილება.
// 5. level — მხოლოდ Getter
// - დააბრუნოს მოთამაშის მიმდინარე დონე.
// - დონის პირდაპირ შეცვლა Getter-ის საშუალებით შეუძლებელი უნდა იყოს.
// 6. status — მხოლოდ Getter
// - თუ მოთამაშე ცოცხალია და ენერგია 0-ზე მეტია, დააბრუნოს "Ready".
// - თუ მოთამაშე ცოცხალია, მაგრამ ენრგია 0 აქვს, დააბრუნოს "Exhausted".
// - თუ ჯანმელობა 0 აქვს, დააბრუნოს "Dead".
// 7. attack — მხოლოდ Setter
// - Setter-მა მიიღოს შეტევის ენერგიის ღირებულება.
// - თუ მოთამაშე მკვდარია, შეტევა არ უნდა შესრულდეს.
// - თუ ენერგია მოთხოვნილ ღირებულებაზე ნაკლებია, გამოიტანოს "Not enough energy!"
// - წინააღმდეგ შემთვევაში ენერგია უნდა შემცირდეს შეტევის ღირებულებით და გამოიტანოს "Attack successful!"
// - შეტევა უნდა მიიღებოდეს მხოლოდ დადებთი რიცხვის შემთხვვაში.