let arr=[2,3,4,5];
let newarr = arr.reduce(function(acc,curr){
  return acc +curr;
},0);
console.log(newarr);
