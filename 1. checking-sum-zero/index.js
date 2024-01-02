//Checking sum zero - Peoblem 1
// [-5,-4,-3,-2,0,2,4,6,8] -> input
// [-4,4] -> output 

//o(n2)
// function getSumPairZero(array){
//     for(let number of array){
//        for(let j=1;j<=array.length;j++){
//         if(number + array[j] === 0 ){
//             return [number,array[j]];
//         }
//        }
//     }
// }


//o(n2)
//Second method
// function getSumPairZero(array){
//     for(let i=0;i<=array.length-1;i++){
//        for(let j=1;j<=array.length;j++){
//         if(array[i] + array[j] === 0 ){
//             return [array[i],array[j]];
//         }
//        }
//     }
// }

//Optimized solution

const res = getSumPairZero([-5,-4,-3,-2,0,2,4,6,8]);
console.log(res);








