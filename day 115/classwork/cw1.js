
// 1)შექმენით factory ფუნქცია რომელიც დააბრუნებს ობიექტს შემდეგი property ებით --> 
// name , surname , age , adress , hobby

// გადაეცით ამავე რაოდენობის პარამეტრი ფუქნციას რომ გადასცეთ ქიებს მნიშვნელობებად , 
// ამ ობიექტს დაამატეთ ასევე მეთოდი სახელად displayUsersName() რომელიც დააბრუნებს 
// მომხმარრებლის სახელს გვარს და მისამართს

// შექმენი ასეთი 4 ობიექტი სხვადასხვა მნიშვენლობებით და 4 ივე მათგანზე გამოიძახეთ displayUsersName()
//  მეთოდი , ასევე თითოეული ობიექტი შეინახეთ ცვლადებში და თვითონ ეს ცვლადებიც(ობიექტები) ც
//  გამოიტანეთ კონსოლში


function factory(name , surname , age , adress , hobby){
    return {
        name:name,
        surname:surname,
        age:age,
        adress:adress,
        hobby:hobby,
        displayUsersName(){
            return `${this.name} ${this.surname} ${this.adress}`
        }
    }
}

let person = factory('tsotne','photskhveria',15,'tbilisi','pin-pong')


console.log(person.displayUsersName());
console.log(person);


let person2 = factory('irakli','dokvadze',20,'batumi','basketball')


console.log(person2.displayUsersName());
console.log(person2);


let person3 = factory('tekla','nikuradze',30,'qutaisi','golf')


console.log(person3.displayUsersName());
console.log(person3);



let person4 = factory('akaki','wurwumia',55,'tbilisi','chess')


console.log(person4.displayUsersName());
console.log(person4);

