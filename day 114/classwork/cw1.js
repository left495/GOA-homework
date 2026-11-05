// let player = {
//     _name: "Shadow",
//     _level: 15,
//     _experience: 850,
//     _health: 75,
//     _isOnline: true,
//     get name(){
//         if(this._name.length<3){
//             return "Invalid name!"
//         }else{
//             return this._name
//         }
//     },
//     get level(){
//         if(this._level>=10){
//             return "Advanced Player"
//         }else if(this._level>=5){
//             return "Intermediate Player"
//         }else{
//             return "Beginner Player"
//         }
//     },
//     get status(){
//         if(this._health == 0){
//             return "Player is dead"
//         }else if(this._health < 30){
//             return "Critical condition"
//         }else{
//             return "Player is healthy"
//         }
//     }
// };


// console.log(player.name)
// console.log(player.level);
// console.log(player.status);


// მოთხოვნები:
// 1. შექმენი name getter, რომელიც დააბრუნებს მოთამაშის სახელს. თუ სახელი 3 სიმბოლოზე ნაკლებია, დააბრუნოს "Invalid name!".
// 2. შექმენი level getter, რომელიც შეამოწმებს მოთამაშის დონეს:
//    - თუ level მეტია ან ტოლია 10-ის, დააბრუნოს "Advanced Player".
//    - თუ level მეტია ან ტოლია 5-ის, დააბრუნოს "Intermediate Player".
//    - სხვა შემთხვევაში დააბრუნოს "Beginner Player".
// 3. შექმენი status getter, რომელიც შეამოწმებს მოთამაშის მდგომარეობას:
//    - თუ _health უდრის 0-ს, დააბრუნოს "Player is dead".
//    - თუ _health ნაკლებია 30-ზე, დააბრუნოს "Critical condition".
//    - სხვა შემთხვევაში დააბრუნოს "Player is healthy".






// let object = {
//     name:'tsotne',
//     _email:'example@gmail.com',
//     _password:'1234',
//     get password(){
//         return this._password
//     },
//     set password(keyWord){
//         this._password = keyWord
//     },
//     get email(){
//         return this._email
//     },
//     set email(keyWord){
//         this._email = keyWord
//     }
// }

// object._password = '4444'
// console.log(object.password)
// object._email = 'second@gmail.com'
// console.log(object.email);


// 2)შექმენით ობიექტის ადაც იქნება name _email და _password ფროფერთიები

// თქვენი დავალებაა შექმნა პაროლისთივსიდ და ემაილისთვის ცალ ცალკე სეტერებნი და გეთერები , 

// შეცვლაეთ ორივეს მნიშვნელობა და ასევე დააბრუნებთ მგანახლებული მნშვნელობები