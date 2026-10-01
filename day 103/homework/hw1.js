// 1)

// function check(a, x) {
//   return a.includes(x)
// }


// 2)

// function inAscOrder(arr) {
//   for(let i = 0;i<arr.length;i++){
//     if (i == 0){
//       continue
//     }else{
//       if(arr[i]<arr[i-1]){
//         return false
//       }
//     }
//   }
//   return true
// }

// 3)

// function drawStairs(n) {
//   let res = ''
//   for(let i = 0;i<n;i++){
//     if(i==n-1){
//       res+=' '.repeat(i)+'I'
//     }else{
//       res+=' '.repeat(i)+'I\n'
//     }
//   }
//   return res
// }

// 4)

// function largest(n, array) {
//   let res = []
//   for(let i = 0;res.length<n;i++){
//     let dd = Math.max(...array)
//     let index = array.indexOf(dd)
//     array.splice(index,1)
//     res.unshift(dd)
//   }
//   return res
// }


// 5)

// function smallEnough(a, limit){
//   for(let i = 0;i<a.length;i++){
//     if(a[i]>limit){
//       return false
//     }
//   }
//   return true
// }