// 1)შექმენით სია და შეიყვანეთ სახელები , შენი დავალებაა while loop იითაც და do while ითაც გამოიტანო სიის ისეთ ელემენტები რომლბის სიგრძე ნაკლებია 4 ზე

// 2)შექმენი სია სადაც მოათავსებ რიცხვებს , შენი დავალებაა რომ გადაუარო 
// for ით ამ სიას და გააჩერო ლუპი მაშინ როდესაც შეხვდები 50 ზე მაღალ რიცხვს,
// გამოიტანე მანამ ყველა რიცხვი სანამ ასეთ რიცხვს იპოვი , თუ ასეთ რიცხვს იპოვი break ამდე დააკონსოლე რომ num which is greater than 50 is found + NUM 

let arr = ['tsotne','nika','goga','akaki','tekla']
let i = 0
while(i<arr.length){
    if(arr[i].length<4){
        console.log(arr[i]);
        i++
    }
}

do{
    if(arr[i].length<4){
        console.log(arr[i]);
        
    }
    i++
}while(i<arr.length)

let num = [21,-74,1,9753,9065432,12,-5313,3]

for(let i = 0;i<num.length;i++){
    if(num[i]>50){
        console.log(`num which is greater than 50 is found ${num[i]}`);
        break
    }
    console.log(num[i]);
    
}