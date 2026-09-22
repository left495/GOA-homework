

// 1)მოცემულია რიცხვი number = 100.
// ციკლის გამოყენებით:
// დაბეჭდე ყველა რიცხვი 1-დან 100-მდე.
// დაბეჭდე მხოლოდ ის რიცხვები, რომლებიც იყოფა 3-ზე.
// დაბეჭდე რამდენი ასეთი რიცხვია.

// let number = 100
// for(let i = 0;i<number;i++){
//     console.log(i);
// }
// let sum = 0
// for(let k = 3;k<number;k+=3){
//     console.log(k);
//     sum++
// }
// console.log(sum);


// 2)მოცემულია მასივი:
// const numbers = [-5, 10, -2, 8, 0, 15, -7];
// ციკლისა და if...else-ის გამოყენებით:
// დათვალე დადებითი რიცხვები.
// დათვალე უარყოფითი რიცხვები.
// დათვალე ნულების რაოდენობა.

// const numbers = [-5, 10, -2, 8, 0, 15, -7];
// let pos = 0
// let neg = 0
// let zero = 0
// for(let i = 0;i<numbers.length;i++){
//     if(numbers[i]>0){
//         pos++
//     }else if(numbers[i]===0){
//         zero++
//     }else{
//         neg++
//     }
// }
// console.log(pos);
// console.log(neg);
// console.log(zero);


// 3)const secretNumber = 7;
// let guess = 1;
// while ციკლის გამოყენებით გაზარდე guess მანამ, სანამ ის არ გაუტოლდება secretNumber-ს.
// როდესაც იპოვი, დაბეჭდე "Correct number".

// const secretNumber = 7;
// let guess = 1;
// while(guess!==secretNumber){
//     guess++
// }
// console.log(guess);


// 4)do...while ციკლის გამოყენებით დაბეჭდე რიცხვები 1-დან 10-მდე.
// შემდეგ შეცვალე საწყისი მნიშვნელობა ისე, რომ ციკლის პირობა თავიდანვე false იყოს.
// შეამოწმე, რამდენჯერ შესრულდება ციკლი.
// let i = 1
// do{
//     console.log(i); 
// }while(i!==1)

// 5)შექმენი ფუნქცია analyzeNumbers, რომელსაც გადაეცემა რიცხვების მასივი.
// ფუნქციამ ციკლის გამოყენებით უნდა:
// იპოვოს მასივის რიცხვების ჯამი.
// დათვალოს ლუწი რიცხვები.
// დათვალოს კენტი რიცხვები.
// დააბრუნოს მიღებული შედეგები.

// let nums = [12,-45,1334,233,5,64,3,45,3134]
// function analyzeNumbers(num){
//     let i = 0
//     let sum = 0
//     let even = 0
//     let odd = 0
//     while(i<num.length){
//         sum+=num[i]
//         if(num[i]%2==0){
//             even++
//         }else{
//             odd++
//         }
//         i++
//     }
//     console.log(sum);
//     console.log(even);
//     console.log(odd);
// }
// analyzeNumbers(nums)

// 6)const prices = [100, 250, 80, 400, 150];
// შექმენი ფუნქცია calculateDiscount, რომელსაც გადაეცემა ფასდაკლების პროცენტი.
// ფუნქციამ ციკლის გამოყენებით უნდა გამოთვალოს თითოეული პროდუქტის ახალი ფასი და დაბეჭდოს ყველა მათგანი.


// const prices = [100, 250, 80, 400, 150];
// const calculateDiscount = pr =>{
//     for(let i = 0; i<prices.length;i++){
//         console.log(prices[i]-prices[i]*pr/100);
        
//     }
// }
// calculateDiscount(50)

// 7)შექმენი ფუნქცია findDivisors, რომელსაც გადაეცემა ერთი რიცხვი.
// ციკლის გამოყენებით იპოვე და დაბეჭდე ამ რიცხვის ყველა გამყოფი.
// მაგალითად, თუ გადაეცემა 12, უნდა დაიბეჭდოს 1, 2, 3, 4, 6 და 12.

// let findDivisors = num =>{
//     for(let i = 1;i<num;i++){
//         if(num%i==0){
//             console.log(i);
//         }
//     }
//     console.log(num);
    
// }
// findDivisors(1024)

// 8)შექმენი ფუნქცია countVowels, რომელსაც გადაეცემა სტრინგი.
// ციკლის გამოყენებით დათვალე, რამდენი ხმოვანი ასოა სტრინგში.
// გამოიყენე if და სტრინგის მეთოდი includes().

// let countVowels = str =>{
//     let count = 0
//     str=str.toLowerCase()
//     for(let i = 0;i<str.length;i++){
//         if('aeiou'.includes(str[i])){
//             count++
//         }
//     }
//     console.log(count);
    
// }

// countVowels('aaaaaaaaaaa')


// 9)const numbers = [4, 8, 12, 25, 30, 40, 50];
// ციკლის გამოყენებით იპოვე პირველი რიცხვი, რომელიც 20-ზე მეტია.
// როგორც კი იპოვი, დაბეჭდე და შეწყვიტე ციკლის შესრულება break-ის გამოყენებით.

// const numbers = [4, 8, 12, 25, 30, 40, 50];
// for(let i = 0;i<numbers.length;i++){
//     if(numbers[i]>20){
//         console.log(numbers[i]);
//         break
        
//     }
// }


// 10)შექმენი ფუნქცია calculateSum, რომელსაც გადაეცემა რიცხვი n.
// ფუნქციაში შექმენი ცვლადი sum, რომლის საწყისი მნიშვნელობა იქნება 0.
// ციკლის გამოყენებით იპოვე 1-დან n-ის ჩათვლით რიცხვების ჯამი და დააბრუნე შედეგი.
// ფუნქციის გარეთ შექმენი სხვა ცვლადი სახელად sum და შეამოწმე, შეიცვალა თუ არა მისი მნიშვნელობა ფუნქციის შესრულების შემდეგ.
// let sum = -2
// let calculateSum = n=>{
//     let sum = 0
//     for(let i = 0;i<n+1;i++){
//         sum+=i
//     }
//     console.log(sum);
// }
// calculateSum(33)
// console.log(sum);



// 11)const text = "JavaScript is fun and JavaScript is powerful";
// შექმენი ფუნქცია analyzeText, რომელსაც გადაეცემა სტრინგი.
// ფუნქციამ უნდა:
// ციკლის გამოყენებით დაბეჭდოს სტრინგის თითოეული სიმბოლო.
// დათვალოს სტრინგში არსებული "a" ასოების რაოდენობა.
// დათვალოს სტრინგში არსებული გამოტოვებების რაოდენობა.
// გამოიყენოს if და შეამოწმოს, არის თუ არა სიმბოლო ხმოვანი ასო.
// იპოვოს პირველი გამოტოვება და შეწყვიტოს ციკლი break-ის გამოყენებით.
// დაბეჭდოს სტრინგი უკუღმა.

// const text = "JavaScript is fun and JavaScript is powerful";
// let analyzeText = str =>{
//     let a = 0
//     let space = 0
//     let xmovani = 0
//     for(let i = 0;i<str.length;i++){
//         console.log(str[i]);
//         if(str[i].toLowerCase()==='a'){
//             a++
//         }else if(str[i]===' '){
//             space++
//         }
//         if('aeiou'.includes(str[i].toLowerCase())){
//             xmovani++
//     }   }
//     console.log(a);
//     console.log(space);
//     console.log(xmovani);
// }
// analyzeText(text)



// 12)შექმენი ფუნქცია numberGame, რომელსაც გადაეცემა საიდუმლო რიცხვი.
// ფუნქციაში:
// შექმენი ცვლადი guess, რომლის საწყისი მნიშვნელობა იქნება 1.
// გამოიყენე while ციკლი.
// თუ guess საიდუმლო რიცხვზე ნაკლებია, გაზარდე ის 1-ით.
// თუ guess საიდუმლო რიცხვს გაუტოლდება, დაბეჭდე "You found it!" და შეწყვიტე ციკლი break-ით.
// დათვალე, რამდენი გამეორება დასჭირდა რიცხვის პოვნას.
// დააბრუნე გამეორებების რაოდენობა.

// function numberGames(num){
//     let guess = 1
//     while(true){
//         if(guess<num){
//             guess++
//         }else if(guess===num){
//             console.log("You found it!");
//             break    
//         }  
//     }
//     console.log('რიცხვი:');
//     console.log(guess);
//     console.log('დაჭირდა');
//     console.log(guess-1);
    
// }
// numberGames(13)


// 13)შექმენი პროგრამა, რომელიც 1-დან 500-მდე ყველა რიცხვს გადაუვლის.
// იპოვე:
// რამდენი რიცხვია 3-ის ჯერადი;
// რამდენი რიცხვია 5-ის ჯერადი;
// რამდენი რიცხვია ერთდროულად 3-ის და 5-ის ჯერადი;
// ყველა იმ რიცხვის ჯამი, რომელიც არც 3-ის და არც 5-ის ჯერადი არ არის;
// ყველაზე დიდი რიცხვი, რომელიც 7-ზე იყოფა.
// let dd3 = 0
// let dd5 = 0
// let dd35 = 0
// let sumDD = 0
// let biggest7 = 0
// let i = 1
// while(i<500){
//     if(i%3==0){
//         dd3++
//     }else if(i%5==0){
//         dd5++
//     }else{
//         sumDD+=i
//     }

//     if(i%3==0 && i%5==0){
//         dd35++
//     }else if(i%7==0){
//         biggest7 = i
//     }
//     i++
// }

// console.log(dd3);
// console.log(dd5);
// console.log(dd35);
// console.log(sumDD);
// console.log(biggest7);


// 14)let number = 58374629;
// Loop-ის გამოყენებით გაარკვიე:
// რამდენი ციფრია რიცხვში;
// რამდენი ციფრია ლუწი;
// რამდენი კენტია;
// ციფრების ჯამი;
// ყველაზე დიდი ციფრი;
// ყველაზე პატარა ციფრი;
// რამდენი ციფრია 5-ზე მეტი.


// let number = '58374629';
// let i = 0
// let even = 0
// let odd = 0
// let moreThan5 = 0
// let small = Number(number[0])
// let big = Number(number[0])
// let sum = 0
// while(i<number.length){
//     if('13579'.includes(number[i])){
//         odd++
//     }else if('24680'.includes(number[i])){
//         even++
//     }

//     if(Number(number[i])>5){
//         moreThan5++
//     }
//     if(Number(number[i])<small){
//         small=Number(number[i])
//     }else if(Number(number[i])>big){
//         big=Number(number[i])
//     }
//     sum+=Number(number[i])
//     i++
// }

// console.log(number.length);
// console.log(even);
// console.log(odd);
// console.log(sum);
// console.log(big);
// console.log(small);
// console.log(moreThan5);


// 15)let numbers = [15, 8, 23, 42, 11, 67, 30, 19, 54, 72, 5];
// გაიარე მასივი loop-ით.
// თუ რიცხვი კენტია → გამოტოვე continue-ით.
// თუ რიცხვი 50-ზე მეტია → საერთოდ შეწყვიტე loop break-ით.
// დანარჩენი ლუწი რიცხვები გამოიტანე.
// ბოლოს გამოიტანე მათი ჯამი.

// let numbers = [15, 8, 23, 42, 11, 67, 30, 19, 54, 72, 5];
// let sum = 0
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]>50){
//         break
//     }
//     if(numbers[i]%2==0){
//         console.log(numbers[i]); 
//         sum+=numbers[i]
//     }
// }

// 16)let balance = 1200;
// let operations = [200, -150, -500, 300, -200, -1000, 400];
// დადებითი რიცხვი ნიშნავს შეტანას, უარყოფითი — გატანას.
// Loop-ის საშუალებით:
// თითოეული ოპერაცია დაამუშავე;
// თანხის შეტანისას გაზარდე balance;
// თანხის გატანისას შეამოწმე საკმარისი თანხაა თუ არა;
// თუ თანხა საკმარისი არ არის, ოპერაცია არ შეასრულო;
// დაითვალე რამდენი გატანა შესრულდა;
// დაითვალე რამდენი ოპერაცია ვერ შესრულდა;
// ბოლოს გამოიტანე საბოლოო ბალანსი.

// let balance = 1200;
// let operations = [200, -150, -500, 300, -200, -1000, 400];

// let she = 0
// let gat = 0
// let uary = 0
// for(let i = 0;i<operations.length;i++){
//     if(operations[i]>0){
//         balance+=operations[i]
//         she++
//     }else{
//         if(balance+operations[i]>0){
//             balance+=operations[i]
//             gat++
//         }else{
//             uary++
//         }
//     }
// }

// console.log(she);
// console.log(gat);
// console.log(uary);
// console.log(balance);



// 17)მოცემულია:
// let numbers = [34, 12, 89, 45, 67, 23, 90, 11, 56, 78, 43, 29];
// ერთი ან რამდენიმე loop-ის გამოყენებით იპოვე:
// მაქსიმუმი;
// მინიმუმი;
// ჯამი;
// საშუალო;
// ლუწების რაოდენობა;
// კენტების რაოდენობა;
// 50-ზე მეტი რიცხვების რაოდენობა;
// 50-ზე ნაკლები რიცხვების რაოდენობა;
// ყველაზე დიდი ლუწი;
// ყველაზე დიდი კენტი;
// ყველაზე პატარა ლუწი;
// ყველაზე პატარა კენტი.

// let numbers = [34, 12, 89, 45, 67, 23, 90, 11, 56, 78, 43, 29];
// let max = numbers[0]
// let min = numbers[0]
// let sum = 0
// let mid = 0
// let even = 0
// let odd = 0
// let more50 = 0
// let less50 = 0
// let maxeven = 0
// let maxodd = 1
// let mineven = 1000
// let minodd = 999
// for(let i = 0;i<numbers.length;i++){
//     sum+=numbers[i]
    
//     if(max<numbers[i]){
//         max = numbers[i]
//     }else if(min>numbers[i]){
//         min = numbers[i]
//     }
//     if(numbers[i]>50){
//         more50++
//     }else{
//         less50++
//     }
//     if(numbers[i]%2==0){
//         even++
//     }else{
//         odd++
//     }
//     if(maxeven<numbers[i] && numbers[i]%2==0){
//         maxeven = numbers[i]
//     }else if(maxodd<numbers[i] && numbers[i]%2!=0){
//         maxodd = numbers[i]
//     }else if(mineven>numbers[i] && numbers[i]%2==0){
//         mineven = numbers[i]
//     }else if(minodd>numbers[i] && numbers[i]%2!=0){
//         minodd = numbers[i]
//     }
// }
// mid = sum/numbers.length

// console.log(max);
// console.log(min);
// console.log(sum);
// console.log(mid);
// console.log(even);
// console.log(odd);
// console.log(more50);
// console.log(less50);
// console.log(maxeven);
// console.log(maxodd);
// console.log(mineven);
// console.log(minodd);



// 18)let correctPin = 4821;
// let attempts = [1234, 1111, 4821, 5555];
// გადაამოწმე მცდელობები თანმიმდევრობით.
// თუ PIN სწორია → "Access granted" და break.
// არასწორი PIN-ის შემთხვევაში დაითვალე მცდელობა.
// თუ 3 არასწორი მცდელობა დაგროვდა → "Card blocked" და break.
// თუ სწორი PIN საერთოდ ვერ მოიძებნა → "Access denied".

// let correctPin = 4821;
// let attempts = [1234, 1111, 4821, 5555];
// let sum = 0
// for(let i = 0;i<attempts.length;i++){
//     if(sum===3){
//         console.log("Card blocked");
//         break 
//     }
//     if(correctPin===attempts[i]){
//         console.log("Access granted");
//         break
//     }else{
//         sum++
//     }



// }