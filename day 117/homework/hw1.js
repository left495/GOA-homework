
// 3)
// let student = {
//     name: "Nika",
//     age: 17,
//     grade: 11,
//     scores: [90, 85, 95]
// };

// let {name,age,scores} = student

// let [fir,sec,thi] = scores

// console.log(name,age,fir,sec,thi);

// console.log(scores.reduce((x,a)=>a+x));



// დავალება:
// 1. Object Destructuring-ის გამოყენებით შეინახეთ name, age და scores ცვლადებში.
// 2. Array Destructuring-ის გამოყენებით scores მასივიდან შეინახეთ სამივე ქულა ცალკე ცვლადში.
// 3. კონსოლში გამოიტანეთ მოსწავლის სახელი, ასაკი და თითოეული ქულა.
// 4. გამოიტანეთ ქულების ჯამი.

// 4)
// let character = {
//     username: "Shadow",
//     level: 15,
//     stats: [100, 80, 45],
//     weapons: ["Sword", "Bow", "Dagger"]
// };


// let {username,level,stats,weapons} = character
// let [health,energy,damage] = stats
// let [firWeapon,secWeapon] = weapons

// console.log(username,level,health,energy,damage,firWeapon,secWeapon);

// if(health<50){
//     console.log('Low Health!');
// }else{
//     console.log("Character is Ready!");
// }

// დავალება:
// 1. Object Destructuring-ით მიიღეთ username, level, stats და weapons.
// 2. Array Destructuring-ით stats მასივიდან მიიღეთ:
//    - health
//    - energy
//    - damage
// 3. Array Destructuring-ით weapons მასივიდან მიიღეთ პირველი ორი იარაღი.
// 4. გამოიტანეთ პერსონაჟის სრული ინფორმაცია.
// 5. თუ health 50-ზე ნაკლებია, გამოიტანეთ "Low Health!", სხვა შემთხვევაში "Character is Ready!".

// 5)
// let product = {
//     title: "Gaming Laptop",
//     price: 2500,
//     specifications: ["16GB RAM", "512GB SSD", "RTX 4060"],
//     colors: ["Black", "White", "Gray"]
// };

// let {title,price,specifications,colors} = product
// let [fir,sec,thi] = specifications

// let [firCol,,thiCol] = colors

// console.log(product);

// if(price>2000){
//     console.log("Expensive Product");
// }else{
//     console.log("Affordable Product")
// }


// დავალება:
// 1. Object Destructuring-ით მიიღეთ title, price, specifications და colors.
// 2. specifications მასივიდან ცალკე ცვლადებში შეინახეთ სამივე მახასიათებელი.
// 3. colors მასივიდან შეინახეთ პირველი და მესამე ფერი.
// 4. კონსოლში გამოიტანეთ პროდუქტის სრული ინფორმაცია.
// 5. თუ ფასი 2000-ზე მეტია, გამოიტანეთ "Expensive Product", სხვა შემთხვევაში "Affordable Product".


// // 6)
// let school = {
//     schoolName: "Future Academy",
//     location: "Tbilisi",
//     students: [
//         ["Nika", 16, 90],
//         ["Ana", 17, 95],
//         ["Gio", 15, 75]
//     ],
//     subjects: ["Math", "English", "Programming"]
// };


// let {schoolName,location,students,subjects} = school

// let [sub1,sub2,sub3] = subjects

// let [firstudent,secstudent] = students


// console.log(schoolName,location,firstudent,secstudent);

// if(firstudent[2]>80){
//     console.log('first student has more than 80 score');
    
// }else{
//     console.log('not more than 80 score');
    
// }

// დავალება:
// 1. Object Destructuring-ით მიიღეთ schoolName, location, students და subjects.
// 2. Array Destructuring-ით subjects მასივიდან შეინახეთ სამივე საგანი ცალკე ცვლადში.
// 3. students მასივიდან Array Destructuring-ის გამოყენებით მიიღეთ პირველი მოსწავლის სახელი, ასაკი და ქულა.
// 4. იგივე გააკეთეთ მეორე მოსწავლისთვის.
// 5. გამოიტანეთ სკოლის სახელი, მდებარეობა და ორივე მოსწავლის ინფორმაცია.
// 6. შეამოწმეთ, აქვს თუ არა პირველ მოსწავლეს 80-ზე მეტი ქულა.

// 7)
// let company = {
//     name: "TechVision",
//     address: "Tbilisi",
//     employees: [
//         {
//             fullName: "Giorgi",
//             position: "Developer",
//             details: [25, 3000, "Frontend"]
//         },
//         {
//             fullName: "Nika",
//             position: "Designer",
//             details: [23, 2500, "UI/UX"]
//         },
//         {
//             fullName: "Ana",
//             position: "Manager",
//             details: [28, 4000, "Management"]
//         }
//     ],
//     departments: ["Development", "Design", "Management"]
// };

// let {name,address,employees,departments} = company

// let [firDep,secDep,thiDep] = departments

// let {fullName,position,details}  = employees[0]
// let [age,salary,spec] = details
// let {fullName:name2,position:position2,details:details2}  = employees[1]
// let [age2,sal2,spec2] = details2

// console.log(employees[0]);

// console.log(employees[1]);

// if(salary>sal2){
//     console.log(fullName+' has more salary');
// }else{
//     console.log(name2+' has more salary');
    
// }


// დავალება:
// 1. Object Destructuring-ით მიიღეთ კომპანიის სახელი, მისამართი, თანამშრომლები და დეპარტამენტები.
// 2. Array Destructuring-ით მიიღეთ სამივე დეპარტამენტის სახელი.
// 3. პირველი თანამშრომლის ობიექტიდან Object Destructuring-ით მიიღეთ fullName, position და details.
// 4. details მასივიდან Array Destructuring-ით მიიღეთ ასაკი, ხელფასი და სპეციალიზაცია.
// 5. იგივე გააკეთეთ მეორე თანამშრომლისთვის.
// 6. გამოიტანეთ ორივე თანამშრომლის სრული ინფორმაცია.
// 7. შეამოწმეთ, რომელი თანამშრომლის ხელფასია მეტი.
// 8. თუ რომელიმე თანამშრომლის ხელფასი 3000-ზე მეტია, გამოიტანეთ მისი სახელი და "High Salary".