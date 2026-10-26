let company = {
    name: "TechVision",
    founded: 2010,

    headquarters: {
        country: "Georgia",
        city: "Tbilisi",

        address: {
            street: "Chavchavadze",
            building: {
                number: 25,
                floors: 8,

                departments: {
                    firstFloor: {
                        name: "Reception",
                        employees: 4
                    },

                    fifthFloor: {
                        name: "Development",
                        employees: 35,

                        manager: {
                            name: "Giorgi",
                            age: 32,

                            contact: {
                                email: "giorgi@techvision.com",
                                phone: "555123456"
                            }
                        }
                    }
                }
            }
        }
    },

    projects: {
        project1: {
            name: "Website",
            budget: 15000,

            team: {
                leader: "Nika",
                members: 8,

                technology: {
                    frontend: "React",
                    backend: "Node.js",
                    database: "MongoDB"
                }
            }
        },

        project2: {
            name: "Mobile App",
            budget: 25000,

            team: {
                leader: "Ana",
                members: 12,

                technology: {
                    frontend: "React Native",
                    backend: "Python",
                    database: "PostgreSQL"
                }
            }
        }
    }
};

console.log(company.name)
console.log(company.founded)

console.log(company.headquarters.country)
console.log(company.headquarters.city)

console.log(company.headquarters.address.building.number)
console.log(company.headquarters.address.building.floors)

console.log(company.headquarters.address.building.departments.firstFloor.name)
console.log(company.headquarters.address.building.departments.firstFloor.employees)

console.log(company.headquarters.address.building.departments.fifthFloor.name)
console.log(company.headquarters.address.building.departments.fifthFloor.employees)

console.log(company.headquarters.address.building.departments.fifthFloor.manager.name)
console.log(company.headquarters.address.building.departments.fifthFloor.manager.age)

console.log(company.headquarters.address.building.departments.fifthFloor.manager.contact.email)
console.log(company.headquarters.address.building.departments.fifthFloor.manager.contact.phone)

console.log(company.projects.project2.team.members);
console.log(company.projects.project2.team.technology);

console.log(company.projects.project2.team.technology.frontend);
console.log(company.projects.project2.team.technology.backend);
console.log(company.projects.project2.team.technology.database);




// -------გამოტანა--------
// 1. გამოიტანე კონსოლში კომპანიის სახელი და დაარსების წელი.
// 2. გამოიტანე კომპანიის შტაბ-ბინის ქალაქი და ქვეყანა.
// 3. გამოიტანე შენობის ნომერი და სართულების რაოდენობა.
// 4. გამოიტანე პირველი სართულის განყოფილების სახელი და თანამშრომლების რაოდენობა.
// 5. გამოიტანე მეხუთე სართულზე არსებული განყოფილების სახელი და თანამშრომლების რაოდენობა.
// 6. გამოიტანე მეხუთე სართულის მენეჯერის სახელი და ასაკი.
// 7. გამოიტანე მენეჯერის ელფოსტა და ტელეფონის ნომერი.
// 8. გამოიტანე პირველი პროექტის სახელი, ბიუჯეტი და გუნდის ხელმძღვანელის სახელი.
// 9. გამოიტანე მეორე პროექტის გუნდის წევრების რაოდენობა და გამოყენებული მონაცემთა ბაზა.
// 10. გამოიტანე მეორე პროექტის სამივე ტექნოლოგია: frontend, backend და database.




company.name = "TechWorld"
company.headquarters.city = 'Batumi'
company.headquarters.address.building.number = 40
company.headquarters.address.building.floors = 10
company.headquarters.address.building.departments.firstFloor.employees = 7
company.headquarters.address.building.departments.fifthFloor.name = "Software Development"
company.headquarters.address.building.departments.fifthFloor.manager.age = 35
company.headquarters.address.building.departments.fifthFloor.manager.contact.phone = "599123456"
company.projects.project1.budget = 20000
company.projects.project2.team.leader = 'Giorgi'
company.projects.project2.team.members = 15
company.projects.project1.team.technology.frontend = 'Vue.js'
company.projects.project1.team.technology.database = 'MySQL'

// -----შეცვლა---------
// 11. კომპანიის სახელი შეცვალე "TechWorld"-ით.
// 12. შტაბ-ბინის ქალაქი შეცვალე "Batumi"-ით.
// 13. შენობის ნომერი შეცვალე 40-ით, ხოლო სართულების რაოდენობა — 10-ით.
// 14. პირველი სართულის თანამშრომლების რაოდენობა შეცვალე 7-ით.
// 15. მეხუთე სართულის განყოფილების სახელი შეცვალე "Software Development"-ით.
// 16. მენეჯერის ასაკი შეცვალე 35-ით.
// 17. მენეჯერის ტელეფონის ნომერი შეცვალე "599123456"-ით.
// 18. პირველი პროექტის ბიუჯეტი შეცვალე 20000-ით.
// 19. მეორე პროექტის გუნდის ხელმძღვანელი შეცვალე "Giorgi"-ით, ხოლო გუნდის წევრების რაოდენობა — 15-ით.
// 20. პირველი პროექტის frontend შეცვალე "Vue.js"-ით, ხოლო database — "MySQL"-ით.


company.employees = 150
company.headquarters.postalCode = '0108'
company.headquarters.building.hasElevator = true
company.headquarters.building.departments.firstFloor.phone = "0322000000"
company.headquarters.building.departments.fifthFloor.budget = 50000
company.headquarters.address.departments.fifthFloor.manager.salary = 6000
company.headquarters.address.departments.fifthFloor.manager.contact.linkedIn = "giorgi-techvision"
company.projects.project1.team.designer = "Mariam"
company.projects.project2.team.technology.testing = 'Jest'
company.projects.project2.status = "In Progress"
// ------დამატება-----
// 21. კომპანიის მთავარ ობიექტს დაამატე თვისება employees, რომლის მნიშვნელობა იქნება 150.
// 22. შტაბ-ბინის ობიექტს დაამატე თვისება postalCode, რომლის მნიშვნელობა იქნება "0108".
// 23. შენობის ობიექტს დაამატე თვისება hasElevator, რომლის მნიშვნელობა იქნება true.
// 24. პირველი სართულის ობიექტს დაამატე თვისება phone, რომლის მნიშვნელობა იქნება "0322000000".
// 25. მეხუთე სართულის ობიექტს დაამატე თვისება budget, რომლის მნიშვნელობა იქნება 50000.
// 26. მენეჯერის ობიექტს დაამატე თვისება salary, რომლის მნიშვნელობა იქნება 6000.
// 27. მენეჯერის საკონტაქტო ინფორმაციას დაამატე თვისება linkedIn, რომლის მნიშვნელობა იქნება "giorgi-techvision".
// 28. პირველი პროექტის team ობიექტს დაამატე თვისება designer, რომლის მნიშვნელობა იქნება "Mariam".
// 29. მეორე პროექტის technology ობიექტს დაამატე თვისება testing, რომლის მნიშვნელობა იქნება "Jest".
// 30. მეორე პროექტის ობიექტს დაამატე ახალი თვისება status, რომლის მნიშვნელობა იქნება "In Progress".


delete company.founded
delete company.headquarters.country
delete company.headquarters.address.building.floors
delete company.headquarters.address.building.departments.firstFloor.employees
delete company.headquarters.address.building.departments.fifthFloor.manager.age
delete company.headquarters.address.building.departments.fifthFloor.manager.contact.phone
delete company.projects.project1.team.technology.database
delete company.projects.project2.team.members
delete company.projects.project1.budget
delete company.projects.project2.team.technology.backend


// ----წაშლა----
// 31. წაშალე კომპანიის მთავარი ობიექტიდან founded თვისება.
// 32. წაშალე შტაბ-ბინის ობიექტიდან country თვისება.
// 33. წაშალე შენობის ობიექტიდან floors თვისება.
// 34. წაშალე პირველი სართულის ობიექტიდან employees თვისება.
// 35. წაშალე მენეჯერის ობიექტიდან age თვისება.
// 36. წაშალე მენეჯერის საკონტაქტო ინფორმაციიდან phone თვისება.
// 37. პირველი პროექტის ტექნოლოგიებიდან წაშალე database თვისება.
// 38. მეორე პროექტის გუნდის ობიექტიდან წაშალე members თვისება.
// 39. პირველი პროექტის ობიექტიდან წაშალე budget თვისება.
// 40. მეორე პროექტის ტექნოლოგიებიდან წაშალე backend თვისება.


// =================METHODS=================

// 1)გოგა, დავალებებს ოდნავ გავამარტივებ: დავტოვებ საინტერესო ლოგიკას და this-ის გამოყენებას, მაგრამ მოვაშორებ ზედმეტად რთულ პირობებს.
//  დავალებები იქნება საშუალო სირთულის და თანდათან გართულდება.
// JavaScript — ობიექტის მეთოდები (Methods)
// დავალება 1. მოთამაშის მართვა
// შექმენი ობიექტი player, რომელსაც ექნება შემდეგი თვისებები:
// let player = {
//     name: "Shadow",
//     health: 100,
//     energy: 80,
//     level: 1
// };
// დაამატე შემდეგი მეთოდები:
// 1. showInfo() — გამოიტანს მოთამაშის სახელს, ჯანმრთელობას, ენერგიასა და დონეს.
// 2. takeDamage(amount) — შეამცირებს ჯანმრთელობას გადაცემული რიცხვით.
// 3. heal(amount) — გაზრდის ჯანმრთელობას გადაცემული რიცხვით.
// 4. levelUp() — მოთამაშის დონეს გაზრდის ერთით.
// 5. useEnergy(amount) — შეამცირებს ენერგიას გადაცემული რიცხვით.
// მაგალითი --- მაგალითს სხვა დავალებებს აღარ დავურთავ თქვენით შეასრულებთ:
// player.takeDamage(20);
// player.heal(10);
// player.levelUp();
// player.showInfo();

// 2)შექმენი ობიექტი bankAccount:
// let bankAccount = {
//     owner: "Goga",
//     balance: 1500,
//     currency: "GEL"
// };

// დაამატე შემდეგი მეთოდები:
// 1. showBalance() — გამოიტანს ანგარიშის მფლობელსა და ბალანსს.
// 2. deposit(amount) — ანგარიშზე დაამატებს მითითებულ თანხას.
// 3. withdraw(amount) — ანგარიშიდან გამოიტანს მითითებულ თანხას, თუ საკმარისი თანხაა.
// 4. showInfo() — გამოიტანს ანგარიშის ყველა თვისებას.
// პირობა: თუ ანგარიშზე საკმარისი თანხა არ არის, გამოიტანე შეტყობინება "Not enough money!".
// 3)შექმენი ობიექტი product:
// let product = {
//     name: "Laptop",
//     price: 2500,
//     quantity: 10
// };

// დაამატე შემდეგი მეთოდები:
// 1. showInfo() — გამოიტანს პროდუქტის ინფორმაციას.
// 2. calculateTotal() — დააბრუნებს ყველა პროდუქტის საერთო ღირებულებას.
// 3. sell(amount) — შეამცირებს პროდუქტის რაოდენობას.
// 4. restock(amount) — გაზრდის პროდუქტის რაოდენობას.
// 5. changePrice(newPrice) — შეცვლის პროდუქტის ფასს.
// პირობა: sell()-ის გამოყენებისას პროდუქტის რაოდენობა არ უნდა გახდეს ნულზე ნაკლები.

// 4)შექმენი ობიექტი car:
// let car = {
//     brand: "BMW",
//     model: "M5",
//     speed: 0,
//     fuel: 60
// };

// დაამატე შემდეგი მეთოდები:
// 1. showInfo() — გამოიტანს ავტომობილის ინფორმაციას.
// 2. accelerate(amount) — გაზრდის ავტომობილის სიჩქარეს.
// 3. brake(amount) — შეამცირებს სიჩქარეს, მაგრამ ნულზე ნაკლები არ უნდა გახდეს.
// 4. drive(distance) — შეამცირებს საწვავს გავლილი მანძილის მიხედვით.
// პირობა: ყოველ გავლილ 10 კილომეტრზე საწვავი შემცირდეს 1 ერთეულით.

// თუ საწვავი არ არის საკმარისი, გამოიტანე შესაბამისი შეტყობინება.

// 5)let student = {
//     name: "Nika",
//     scores: [85, 90, 70, 100]
// };

// დაამატე შემდეგი მეთოდები:
// 1. showScores() — გამოიტანს ყველა ქულას.
// 2. addScore(score) — დაამატებს ახალ ქულას მასივში.
// 3. calculateAverage() — გამოთვლის ქულების საშუალო არითმეტიკულს და დააბრუნებს შედეგს.
// 4. getHighestScore() — დააბრუნებს ყველაზე მაღალ ქულას.
// 5. getLowestScore() — დააბრუნებს ყველაზე დაბალ ქულას.

// 6)შექმენი ორი ობიექტი:
// let player = {
//     name: "Shadow",
//     health: 100,
//     attack: 25
// };

// let enemy = {
//     name: "Dragon",
//     health: 150,
//     attack: 20
// };

// player ობიექტში დაამატე მეთოდები:
// 1. showInfo() — გამოიტანს მოთამაშის ინფორმაციას.
// 2. attackEnemy(enemy) — მტრის ჯანმრთელობას შეამცირებს მოთამაშის შეტევის ძალით.
// enemy ობიექტში დაამატე მეთოდები:
// 1. showInfo() — გამოიტანს მტრის ინფორმაციას.
// 2. attackPlayer(player) — მოთამაშის ჯანმრთელობას შეამცირებს მტრის შეტევის ძალით.
// პირობა: ჯანმრთელობა ნულზე ნაკლები არ უნდა გახდეს.

// მაგალითი: