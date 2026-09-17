// 1) let prices = [120, 45, 300, 80, 150, 25, 400];
// შექმენი პროგრამა, რომელიც:
// for ციკლით გადაუვლის ყველა ფასს.
// თუ ფასი 100-ზე მეტია, ფასს  20 იანფასდაკლებას გაუკეთებს.
// თუ ფასი 50-დან 100-მდეა, ფასს 10-იან ფასდაკლებას გაუკეთებს.
// სხვა შემთხვევაში ფასს არ შეცვლის.
// განაახლებს ფასებს თავდაპირველ მასივში.
// დაითვლის ფასდაკლებული პროდუქტების საერთო ღირებულებას (ჯამს).
// უკუღმა ციკლით დაბეჭდავს საბოლოო ფასებს.

// let prices = [120, 45, 300, 80, 150, 25, 400];
// let sum = 0

// for(let i = prices.length-1;i>=0;i--){
//     if(prices[i]>100){
//         sum+=prices[i]
//         prices[i]-=20
//         console.log(prices[i]);
//     }else if(prices[i]>50){
//         sum+=prices[i]
//         prices[i]-=10
//         console.log(prices[i]-10);
//     }else{
//         console.log(prices[i]);
//     }
// }
// console.log(sum)

// 2)let messages = [
//   "  Hello Goga  ",
//   "JAVASCRIPT is fun",
//   "  I LOVE CODING ",
//   "React is awesome",
//   "  Learn JavaScript  "
// ];

// შექმენი პროგრამა, რომელიც:
// თითოეულ შეტყობინებას მოაშორებს ზედმეტ სივრცეებს გვერდებიდან. 
// ყველა შეტყობინებას გადაიყვანს პატარა ასოებში.
// შეამოწმებს, შეიცავს თუ არა შეტყობინება სიტყვას "javascript" --> includes() გამოიყენეთ.
// თუ შეიცავს, დაბეჭდავს "JavaScript message found".
// დაითვლის, რამდენი შეტყობინება შეიცავს ამ სიტყვას დაგჭრდებათ count = 0 ცვლადი .
// უკუღმა ციკლით დაბეჭდავს ყველა შეტყობინებას, რომელიც 15 სიმბოლოზე გრძელია.

// let messages = [
//   "  Hello Goga  ",
//   "JAVASCRIPT is fun",
//   "  I LOVE CODING ",
//   "React is awesome",
//   "  Learn JavaScript  "
// ];
// let count = 0
// for(let i = 0;i<messages.length;i++){
//     messages[i] = messages[i].trim().toLowerCase()
//     if(messages[i].includes('javascript')){
//         count+=1
//         console.log("JavaScript message found");
//     }
// }
// console.log(count);
// for(let i = messages.length-1;i>=0;i--){
//     if(messages[i].length>15){
//         console.log(messages[i]);
//     }
// }

// 3)მოცემულია:
// let numbers = [12, 5, 18, 7, 24, 9, 30, 11, 6, 21];
// შექმენი პროგრამა, რომელიც:
// დაბეჭდავს ყველა ლუწ რიცხვს.
// დაითვლის ყველა კენტი რიცხვის ჯამს.
// იპოვის ყველაზე დიდ რიცხვს.
// იპოვის ყველაზე პატარა რიცხვს.
// თუ რიცხვი 10-ზე მეტია და 25-ზე ნაკლებია, დაბეჭდავს "Special number".
// უკუღმა ციკლით დაბეჭდავს ყველა რიცხვს, რომელიც 3-ის ჯერადია.

// let numbers = [12, 5, 18, 7, 24, 9, 30, 11, 6, 21];

// let odd = 0
// let min = numbers[0]
// let max = numbers[0]


// for(let i = 0;i<numbers.length;i++){
//     if(numbers[i]%2==0){
//         console.log(numbers[i]);
//     }else{
//         odd+=numbers[i]
//     }

//     if(numbers[i]<25  && numbers[i]>10){
//         console.log('Special number');
//     }
//     if(numbers[i]>max){
//         max = numbers[i]
//     }else if(numbers[i]<min){
//         min = numbers[i]
//     }
// }

// console.log(max);
// console.log(min);
// console.log(odd);

// for(let i = numbers.length-1;i>=0;i--){
//     if(numbers[i]%3==0){
//         console.log(numbers[i]);
//     }
// }

// 4)let names = [
//   "  goga ",
//   "NIKA",
//   "  ana  ",
//   "Giorgi",
//   "  mariam"
// ];

// შექმენი პროგრამა, რომელიც:
// ყველა სახელს მოაშორებს ზედმეტ სივრცეებს.
// თითოეული სახელის პირველ ასოს გადაიყვანს დიდ ასოში, ხოლო დანარჩენ ასოებს — პატარა ასოებში.
// განაახლებს თავდაპირველ მასივს.
// დაითვლის, რამდენი სახელი შეიცავს ასო "a"-ს.
// უკუღმა ციკლით დაბეჭდავს სახელებს.
// თუ სახელი "goga"-ს უდრის, გამოიტანს "Hello Goga!" შეტყობინებას.


// let names = [
//   "  goga ",
//   "NIKA",
//   "  ana  ",
//   "Giorgi",
//   "  mariam"
// ];

// let aa = 0

// for(let i=names.length-1;i>=0;i--){
//     names[i] = names[i].trim().toLowerCase()
//     if(names[i].includes('a')){
//         aa+=1
//     }
//     names[i]=names[i][0].toUpperCase()+names[i].slice(1,)
//     console.log(names[i]);
    
//     if(names[i]==='Goga'){
//         console.log('Hello Goga!');
        
//     }
// }
// console.log(aa);



// 5)let scores = [45, 90, 67, 32, 100, 78, 55, 88, 40, 95];
// შექმენი პროგრამა, რომელიც:
// დაითვლის ყველა მოსწავლის ქულების ჯამს --> let sum = 0.
// გამოთვლის საშუალო ქულას --> შეინახეთ ცვლადდში --> avarage .
// დაითვლის ჩაჭრილი მოსწავლეების რაოდენობას. ჩაჭრილია მოსწავლე, რომელსაც 50-ზე ნაკლები ქულა აქვს  , მათ ოდენობა შეინახეთ ცვლადში failedStudents = 0.
// იპოვის ყველაზე მაღალ და ყველაზე დაბალ ქულას შეინახეთ ცვლადებში.
// მასივის ყველა ქულას შეამოწმებს და დაბეჭდავს --> :
// 90 ან მეტი — "Excellent"
// 70-დან 89-მდე — "Good"
// 50-დან 69-მდე — "Passed"
// 50-ზე ნაკლები — "Failed"
// შექმნის ახალ მასივს, რომელშიც მხოლოდ 80-ზე მაღალი ქულები იქნება დაგჭირდებათ ცარიელი მასივი და .push().
// უკუღმა ციკლით დაბეჭდავს ყველა ქულას.
// დაითვლის, რამდენი მოსწავლე იღებს საშუალოზე მაღალ ქულას--> შეადარებთ სიის თითოეულ ელემენტს ზემოთ
// გამოთვლილ საშვალო ქულას და დაითვლით ცვლადში moreThanAvarageScoreCount = 0.

// let scores = [45, 90, 67, 32, 100, 78, 55, 88, 40, 95];
// let sum = 0
// let avarage=0
// let failedStudents=0
// let max = scores[0]
// let min = scores[0]
// let newScores = []
// let moreThanAvarageScoreCount = 0
// for(let i = 0;i<scores.length;i++){
//     sum+=scores[i]
//     if(scores[i]<50){
//         failedStudents+=1
//         console.log('Failed');
//     }else if(scores[i]<70){
//         console.log('Passed');
//     }else if(scores[i]<90){
//         console.log('Good');
//     }else{
//         console.log('Excellent'); 
//     }
//     if(scores[i]>80){
//         newScores.push(scores[i])
//     }
//     if(scores[i]>max){
//         max = scores[i]

//     }
//     if(scores[i]<min){
//         min = scores[i]
//     }

// }

// console.log(max);
// console.log(min);
// console.log(failedStudents);
// avarage=sum/scores.length
// console.log(avarage);
// console.log(newScores);

// for(let i = scores.length;i>=0;i--){
//     console.log(scores[i]);
//     if(scores[i]>avarage){
//         moreThanAvarageScoreCount+=1
//     }
    
// }
// console.log(moreThanAvarageScoreCount);





// 6)let names = ["goga", "NIKA", "ana", "Giorgi", "MARIAM", "dato"];
// let scores = [85, 42, 96, 67, 51, 73];
// შექმენი პროგრამა, რომელიც:
// ორივე მასივს ერთი და იმავე for ციკლით გადაუვლის.
// თითოეულ სახელს მოაშორებს ზედმეტ სივრცეებს და პირველ ასოს დიდად გამოიტანს.
// თითოეული მოსწავლის ქულას შეამოწმებს და შესაბამის შეფასებას მიანიჭებს:
// 90–100: "Excellent"
// 75–89: "Very Good"
// 60–74: "Good"
// 50–59: "Passed"
// 50-ზე ნაკლები: "Failed"
// დაითვლის ჩაჭრილი მოსწავლეების რაოდენობას.
// დაითვლის 80-ზე მაღალი ქულების ჯამს.
// იპოვის ყველაზე მაღალი ქულის მქონე მოსწავლის სახელსა და ქულას.
// გამოთვლის ყველა მოსწავლის საშუალო ქულას.
// უკუღმა ციკლით გამოიტანს ყველა მოსწავლის სახელსა და ქულას.

// let names = ["goga", "NIKA", "ana", "Giorgi", "MARIAM", "dato"];
// let scores = [85, 42, 96, 67, 51, 73];
// let failed = 0
// let dd = 0
// let max = scores[0]
// let maxName = names[0]
// let ava=0
// for(let i = scores.length-1;i>=0;i--){
//     names[i]=names[i].trim()
//     names[i]=names[i][0].toUpperCase()+names[i].slice(1,)
//     if(scores[i]>90){
//         console.log('Excellent');
//     }else if(scores[i]>75){
//         console.log('Very Good');
//     }else if(scores[i]>60){
//         console.log('Good');
//     }else if(scores[i]>50){
//         console.log('Passed');
//     }else{
//         console.log('Failed');
//         failed+=1
//     }
//     if(scores[i]>80){
//         dd+=scores[i]
//     }
//     if(scores[i]>max){
//         max=scores[i]
//         maxName=names[i]
//     }
//     ava+=scores[i]
//     console.log(names[i],scores[i]);
    
// }

// console.log(ava/scores.length);



// 7)მოცემულია მაღაზიის პროდუქტების სახელები, ფასები და გაყიდული რაოდენობები:
// let products = ["Laptop", "Phone", "Mouse", "Keyboard", "Monitor", "Headphones"];
// let prices = [2500, 1800, 80, 150, 900, 300];
// let quantities = [3, 5, 20, 12, 4, 8];
// შექმენი პროგრამა, რომელიც:
// თითოეული პროდუქტისთვის გამოთვლის გაყიდვების თანხას — ფასი გამრავლებული გაყიდულ რაოდენობაზე.
// თუ პროდუქტის გაყიდვების თანხა 5000-ზე მეტია, გამოიტანს "High sales".
// თუ გაყიდვების თანხა 1000-დან 5000-მდეა, გამოიტანს "Medium sales".
// სხვა შემთხვევაში გამოიტანს "Low sales".
// დაითვლის ყველა პროდუქტის გაყიდვებიდან მიღებულ საერთო თანხას.
// დაითვლის იმ პროდუქტების რაოდენობას, რომელთა გაყიდული რაოდენობა 10-ზე მეტია.
// უკუღმა ციკლით გამოიტანს პროდუქტების სახელებსა და გაყიდვების თანხებს.

// let products = ["Laptop", "Phone", "Mouse", "Keyboard", "Monitor", "Headphones"];
// let prices = [2500, 1800, 80, 150, 900, 300];
// let quantities = [3, 5, 20, 12, 4, 8];

// let all = 0
// let moreThan10 = 0

// for(let i = products.length;i>=0;i--){
//     console.log(products[i]);
//     console.log(prices[i]*quantities[i]);
//     if(prices[i]*quantities[i]>5000){
//         console.log('High sales');
//     }else if(prices[i]*quantities[i]>100){
//         console.log('Medium sales');
//     }else{
//         console.log('Low sales');
//     }
//     all+=prices[i]*quantities[i]
//     if(quantities[i]>10){
//         moreThan10+=1
//     }
// }