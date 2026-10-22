

// map filter reduce some every forEach findIndex


// შევამოწმოთ ყველა  მონაცემი არის თუ არა რიცხვი
// შევამოწმოთ არის თუარა ერთი რიცხვი მაინც უარყოფითი საწყის მასივში
// ვიპოვოთ უდიდესი რიცხვი საწყისი მასივიდან
// იპოვე რიცხვი რომელიც იყოფა 2ზე 3ზე და 4ზე
// ყველა რიცხვი დავამრგვალოთ ზემოთ
// დავტოვოთ მხოლო ისეთი რიცხვები რომლებიც იყოფიან 3ზე


let arr = [21.52,9.09,107.002,-100.9,1,2520,729]


let every = arr.every(x=>x%2==0)
console.log()

let some = arr.some(x=>x<0)
console.log(some);

let red = arr.reduce((acc,curr)=>acc>curr?acc:curr)
console.log(red);

let ind = arr.findIndex(x=>x%4==0 && x%3==0 && x%2==0)
console.log(ind);

let map = arr.map(x=>Math.ceil(x))
console.log(map)

let fil = map.filter(x=>x%3==0)
console.log(fil);
