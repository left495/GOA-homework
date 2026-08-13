//   3)შექმენი ცლადი , შენი დავალებაა შეამოწმო თუ ცვლადში შენახული რიცხვი მეტია 0 ზე და არის ლუწი კონსოლში დაბეჭდე --> "positive and even"

// სხვა შემთთხვევაში დალოგე --> "other number"

let num=4

if (num>0 && num%2==0){
    console.log("positive and even")
}else{
    console.log("other number")
    
}



// 4)შექმენი ცვლადი და შეინახე შენი სახელი , შემდეგ შეამოწმე თუ ცვლადში შენახული სახელი იწყება აო "g" თი ან 
// ცვლადში შენახული სახელი უდრის "levani" ს დაბეჭდე "good name" , თუ ცვლდში შენახული 
// სახელი იწყება ასო "a" თი და ასევე ეს სახელი უდრის "akaki" ს დალოგე --> excellent name სხვა შემთხვევაში დალოგე -->other name



let name = 'tsotne'

if (name.startsWith('g')||name=='levani'){
    console.log('good name')
}else if (name.startsWith('a')&& name=='akaki'){
    console.log('excellent name')
}else{
    console.log('other name')
    
}
