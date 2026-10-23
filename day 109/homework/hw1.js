// 1)მოცემულია ობიექტი:
// let user = {
//     username: "Shadow",
//     age: 19,
//     email: "shadow@gmail.com",
//     city: "Tbilisi",
//     status: "active"
// };

// შეასრულე შემდეგი მოქმედებები:
// 1. გამოიტანე მომხმარებლის სახელი, ასაკი და ქალაქი.
// 2. შეცვალე username და მიანიჭე "DarkKnight".
// 3. შეცვალე მომხმარებლის ასაკი და მიანიჭე 21.
// 4. დაამატე ახალი თვისება phone, რომლის მნიშვნელობა იქნება "555123456".
// 5. წაშალე email თვისება.
// 6. დაამატე თვისება isVerified მნიშვნელობით true.
// 7. შეცვალე status და მიანიჭე "premium".
// 8. ბოლოს გამოიტანე განახლებული ობიექტი.


// let user = {
//     username: "Shadow",
//     age: 19,
//     email: "shadow@gmail.com",
//     city: "Tbilisi",
//     status: "active"
// };


// console.log(user.username)
// console.log(user.age)
// console.log(user.city);

// user['username'] = "DarkKnight"
// user.age = 21
// user.phone =  "555123456"
// delete user.email
// user.isVerified = true
// user.status = "premium"

// console.log(user);





// 2)let player = {
//     name: "Dragon",
//     health: 100,
//     energy: 80,
//     level: 5,
//     weapon: "Sword",
//     armor: "Basic"
// };


// შეასრულე მოქმედებები:
// 1. გამოიტანე პერსონაჟის სახელი, სიცოცხლე და იარაღი.
// 2. health შეცვალე 65-ით.
// 3. weapon შეცვალე "Bow"-ით.
// 4. დაამატე damage მნიშვნელობით 40.
// 5. დაამატე magic მნიშვნელობით true.
// 6. წაშალე armor.
// 7. level შეცვალე 6-ით.
// 8. დაამატე rank მნიშვნელობით "Gold".
// 9. წაშალე energy.
// 10. გამოიტანე საბოლოო ობიექტი.


// let player = {
//     name: "Dragon",
//     health: 100,
//     energy: 80,
//     level: 5,
//     weapon: "Sword",
//     armor: "Basic"
// };


// console.log(player.name);
// console.log(player.health);
// console.log(player.weapon);

// player.health = 65
// player.weapon = 'Bow'
// player.damage = 40
// player.magic = true
// delete player.armor
// player.level = 6
// player.rank = 'Gold'
// delete player.energy

// console.log(player);



// 3)let product = {
//     title: "Gaming Laptop",
//     price: 2500,
//     brand: "ASUS",
//     stock: 12,
//     color: "Black",
//     category: "Electronics",
//     discount: false
// };


// მოთხოვნები:
// 1. გამოიტანე პროდუქტის სახელი, ფასი და მარაგის რაოდენობა.
// 2. ფასი შეცვალე 2800-ით.
// 3. მარაგის რაოდენობა შეცვალე 8-ით.
// 4. დაამატე rating მნიშვნელობით 4.8.
// 5. დაამატე warranty მნიშვნელობით "2 years".
// 6. წაშალე color.
// 7. discount შეცვალე true-ით.
// 8. წაშალე category.
// 9. დაამატე isAvailable მნიშვნელობით true.
// 10. ბოლოს გამოიტანე ფასი, ბრენდი, რეიტინგი და მთელი ობიექტი.


// let product = {
//     title: "Gaming Laptop",
//     price: 2500,
//     brand: "ASUS",
//     stock: 12,
//     color: "Black",
//     category: "Electronics",
//     discount: false
// };


// console.log(product.title);
// console.log(product.price);
// console.log(product.stock);

// product.price = 2800
// product.stock = 8
// product.rating = 4.8
// product.warranty = '2 years'
// delete product.color
// product.discount = true
// delete product.category
// product.isAvailable = true

// console.log(product)

// 4)
// let movie = {
//     title: "Interstellar",
//     director: "Christopher Nolan",
//     year: 2014,
//     rating: 8.7,
//     genre: "Sci-Fi",
//     duration: 169,
//     language: "English"
// };

// შეასრულე შემდეგი მოქმედებები:
// 1. გამოიტანე ფილმის სათაური, რეჟისორი და გამოსვლის წელი.
// 2. rating შეცვალე 9.0-ით.
// 3. duration შეცვალე 170-ით.
// 4. genre შეცვალე "Science Fiction"-ით.
// 5. დაამატე country მნიშვნელობით "USA".
// 6. დაამატე availableOnPlatform მნიშვნელობით true.
// 7. წაშალე language.
// 8. წაშალე year.
// 9. დაამატე releaseYear მნიშვნელობით 2014.
// 10. გამოიტანე ყველა დარჩენილი და დამატებული თვისება.


// let movie = {
//     title: "Interstellar",
//     director: "Christopher Nolan",
//     year: 2014,
//     rating: 8.7,
//     genre: "Sci-Fi",
//     duration: 169,
//     language: "English"
// };
// console.log(movie.title);
// console.log(movie.director);
// console.log(movie.year);

// movie.rating = 9.0
// movie.duration = 170
// movie.genre = "Science Fiction"
// movie.country = 'USA'
// movie.availableOnPlatform = true
// delete movie.language
// delete movie.year
// movie.releaseYear = 2014

// console.log(movie);


// 5)
// let computer = {
//     brand: "Lenovo",
//     model: "Legion 5",
//     ram: 16,
//     storage: 512,
//     processor: "Intel i5",
//     graphicsCard: "RTX 3060",
//     price: 3200,
//     isGaming: true
// };


// მოთხოვნები:
// 1. გამოიტანე კომპიუტერის ბრენდი, მოდელი და ფასი.
// 2. ram შეცვალე 32-ით.
// 3. storage შეცვალე 1024-ით.
// 4. processor შეცვალე "Intel i7"-ით.
// 5. დაამატე screenSize მნიშვნელობით 15.6.
// 6. დაამატე hasWarranty მნიშვნელობით true.
// 7. წაშალე graphicsCard.
// 8. წაშალე isGaming.
// 9. price შეცვალე 3500-ით.
// 10. დაამატე operatingSystem მნიშვნელობით "Windows 11".
// 11. გამოიტანე ram, storage, processor და operatingSystem.
// 12. გამოიტანე საბოლოო ობიექტი.

// let computer = {
//     brand: "Lenovo",
//     model: "Legion 5",
//     ram: 16,
//     storage: 512,
//     processor: "Intel i5",
//     graphicsCard: "RTX 3060",
//     price: 3200,
//     isGaming: true
// };
// console.log(computer.brand);
// console.log(computer.model);
// console.log(computer.price);
// computer.ram = 32
// computer.storage = 1024
// computer.processor = 'Intel i7'
// computer.screenSize = 15.6
// computer.hasWarranty = true
// delete computer.graphicsCard
// delete computer.isGaming
// computer.price = 3500
// computer.operatingSystem = "Windows 11"

// console.log(computer.ram);
// console.log(computer.storage);
// console.log(computer.processor);
// console.log(computer.operatingSystem);

// console.log(computer);



// 6)
// let game = {
//     playerName: "Shadow",
//     level: 12,
//     health: 85,
//     coins: 450,
//     weapon: "Sword",
//     armor: "Steel",
//     isAlive: true,
//     rank: "Silver"
// };


// შეასრულე მოქმედებები მოცემული თანმიმდევრობით:
// 1. playerName, health და rank გამოიტანე bracket notation-ით.
// 2. level შეცვალე 15-ით bracket notation-ის გამოყენებით.
// 3. coins შეცვალე 700-ით dot notation-ის გამოყენებით.
// 4. weapon შეცვალე "Dragon Sword"-ით bracket notation-ით.
// 5. დაამატე magicPower მნიშვნელობით 90 bracket notation-ის გამოყენებით.
// 6. დაამატე pet მნიშვნელობით "Wolf" dot notation-ის გამოყენებით.
// 7. წაშალე armor bracket notation-ის გამოყენებით.
// 8. წაშალე isAlive dot notation-ის გამოყენებით.
// 9. დაამატე achievements მნიშვნელობით 5.
// 10. rank შეცვალე "Gold"-ით bracket notation-ის გამოყენებით.
// 11. გამოიტანე ყველა შეცვლილი და დამატებული თვისება.
// 12. დაბეჭდე საბოლოო ობიექტი.


// let game = {
//     playerName: "Shadow",
//     level: 12,
//     health: 85,
//     coins: 450,
//     weapon: "Sword",
//     armor: "Steel",
//     isAlive: true,
//     rank: "Silver"
// };
// console.log(game['playerName']);
// console.log(game['health']);
// console.log(game['rank']);
// game['level'] = 15
// game.coins = 700
// game['weapon'] = "Dragon Sword"
// game['magicPower'] = 90
// game.pet = 'Wolf'
// delete game['armor']
// delete game.isAlive
// game.achievements = 5
// game['rank'] = 'Gold' 

// console.log(game['level']);
// console.log(game.coins);
// console.log(game['weapon']);
// console.log(game['magicPower']);
// console.log(game.pet);
// console.log(game.achievements);
// console.log(game['rank']);


// console.log(game);

// 7)
// let account = {
//     username: "DarkKnight",
//     password: "abc12345",
//     followers: 2500,
//     following: 430,
//     posts: 85,
//     verified: false,
//     email: "dark@gmail.com",
//     country: "Georgia",
//     theme: "dark",
//     notifications: true,
//     accountType: "personal"
// };


// ყველა მოქმედება შეასრულე მოცემული თანმიმდევრობით:
// 1. username, followers, email და accountType გამოიტანე bracket notation-ით.
// 2. username შეცვალე "NightWolf"-ით bracket notation-ის გამოყენებით.
// 3. password შეცვალე "secure9876"-ით bracket notation-ის გამოყენებით.
// 4. followers შეცვალე 5000-ით dot notation-ის გამოყენებით.
// 5. following შეცვალე 600-ით bracket notation-ით.
// 6. დაამატე likes მნიშვნელობით 12000 bracket notation-ით.
// 7. დაამატე bio მნიშვნელობით "JavaScript Developer" dot notation-ით.
// 8. დაამატე isPrivate მნიშვნელობით false bracket notation-ით.
// 9. წაშალე country bracket notation-ის გამოყენებით.
// 10. წაშალე notifications dot notation-ის გამოყენებით.
// 11. verified შეცვალე true-ით bracket notation-ის გამოყენებით.
// 12. theme შეცვალე "light"-ით bracket notation-ის გამოყენებით.
// 13. წაშალე accountType bracket notation-ის გამოყენებით.
// 14. დაამატე website მნიშვნელობით "mywebsite.com" bracket notation-ით.
// 15. გამოიტანე username, followers, likes, bio, isPrivate და website.
// 16. დაბეჭდე საბოლოო ობიექტი.


// let account = {
//     username: "DarkKnight",
//     password: "abc12345",
//     followers: 2500,
//     following: 430,
//     posts: 85,
//     verified: false,
//     email: "dark@gmail.com",
//     country: "Georgia",
//     theme: "dark",
//     notifications: true,
//     accountType: "personal"
// };



// console.log(account['username']);
// console.log(account['followers']);
// console.log(account['email']);
// console.log(account['accountType']);

// account['username'] = 'NightWolf'
// account['password'] = 'secure9876'
// account.followers = 500
// account['following'] = 600
// account['likes'] = 12000
// account.bio = "JavaScript Developer"
// account['isPrivate'] = false
// delete account['country']
// delete account.notifications
// account['verified'] = true
// account['theme'] = 'light'
// delete account['accountType']
// account['website'] = "mywebsite.com"


// console.log(account.username);
// console.log(account.followers);
// console.log(account.likes);
// console.log(account.bio);
// console.log(account.isPrivate);
// console.log(account.website);

// console.log(account);
