const calculate =(a,b,operation)=>{
    return operation(a,b);
};
//method 1
const addition = calculate(3, 5, function (num1 ,num2){
    return num1+num2;
});
console.log(addition);


//method 2
const subtraction = (a,b) => a-b;
const subresult =calculate(8,4,subtraction);
console.log(subresult);

//for find ,findindex
const u=[4,6,8,0,-2,1];
const gog =(num) =>{
    return num<0;
};
const result= u.find(gog);
console.log(result);
const result2= u.findIndex(gog);
console.log(result2);

//foreach
u.forEach((num, i) => {
    console.log("array num", num, i);
});