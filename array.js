
let fruits = ['banana', 'apple', 'grapes', 'oranges'];
fruits.push('figs');
myfruit=fruits.pop();

let ages = [3, 41, 15, 72, 62, 103, 22];
ages.sort((a,b)=>(a>b));
console.log(ages);

let numbers = [0,1,2,3,4,5,6,7,8,9,10];
let double = numbers.map(num=>num*2);
console.log(double);

let odd=numbers.filter(num=>num%2!=0);
console.log(odd);

let total=numbers.reduce((acc,curr)=>acc+curr,0);
console.log("total="+ total);
