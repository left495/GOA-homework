



// 1)შექმენი function expression სახელად checkNumber, რომელსაც გადაეცემა რიცხვი.

// ფუნქციამ უნდა დააბრუნოს:

// "Positive Even" — დადებითი და ლუწი
// "Positive Odd" — დადებითი და კენტი
// "Negative Even" — უარყოფითი და ლუწი
// "Negative Odd" — უარყოფითი და კენტი
// "Zero" — თუ რიცხვი 0-ია , use ternary


// const checkNumber = function(number){
//     number%2==0 && number>0 ? console.log('dadebiti luwi') :
//     number%2!=0 && number>0 ? console.log('dadebiti kenti'):
//     number%2==0 && number<0 ? console.log('uaryofiti luwi'):
//     number%2!=0 && number<0 ? console.log('uaryofiti kenti'): console.log('Zero')
// }

// checkNumber(10)
// checkNumber(0)
// checkNumber(-10)


// 2)შექმენით arrow ფუნქცია რომელსაც გადაეცემა ერთ პარამეტრი name
//  ფუნქციამ უნდა შეამოწმოს if else ით იწყება თუ არა ეს სახელი "გ" ასოზე ,
//   თუ იწყება დააბრუნე good name სხვა შემთხვევაში დააბრუნე "still good name"


const functionName = name =>{
    if (name.startsWith('g')){
        console.log('good name')
    }else{
        console.log('still good name');
        
    }
}


functionName('goga')
functionName('tsotne')


// 3)შექმენით arrow ფუნქცია რომელსაც გადაეცემა ერთ პარამეტრი num , 
// შენი დავალებაა შეამოწმო ეს რიცხვი ლუწია თუ კენტია , use ternary 
// and single line block stytax



const evenOdd = num => num%2==0 ? 'luwi': 'kenti'


console.log(evenOdd(1))
console.log(evenOdd(2))