



// 1)შექმენით ცვლადი სახელად name სადაც არაფერს შეინახავთ

// ქვემოთ შექმენით ცვლადი nameForGreeting და მასში შეინახეთ ---> name ცვლადი(თუ name ცვლადში ინახება რაიმე მნშვნელობა ) ან "guest"

// შემდეგ დააკონსოლეთ შემდეგი წინადადება --> hello {nameForGreeting} , how you doing?

// ახსენით მოკლედ კომენტარის სახით თუ რა მოხდა

// 2)შექმენი ცვლადი სადაც შეინახავ რაიმე სტრინგს

// შენი დავალებაა ტერნარი ოპერატორის დახმარებით შეამოწმო --> თუ სახელის სიგრძე უდრის 6 ს დააკონსოლე --> medium length

// თუ სახელის სიგრძე მეტია 6 ზე დააკონსოლლოგე --> "long length"

// სხვა შემთხვევაშ დააკონსოლლოგე --> "short name"


let name

let nameForGreeting = name|| 'guest'

console.log(`hello ${nameForGreeting} , how you doing?`)

// name ცვლადში არაფერია , ანუ არის falsy. guest კი არის trusy მნიშვნელობა, trusy || falsy == trusy ანუ guest

let sen = 'tsotne'

sen.length === 6 ? console.log('medium length') : sen.length > 6 ? console.log("long length") : console.log("short name")


