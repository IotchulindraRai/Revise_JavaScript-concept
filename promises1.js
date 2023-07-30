//promises are performrd in 2 stepps CREATE only and Use ofr call
//finall is performed for both condition and will not see codition 
const ticket =new Promise(function(resolve , reject)
{
const isBoard =false;
if(isBoard){
    resolve("Yes i am boared");
}
else{
    reject("Flight has been calnled")
}
});
ticket
    .then((data) => {
        console.log("Yes",data);
    })
    .catch((data)=> {
console.log("oh no",data);
    })
    .finally((data) => {
        console.log("i am  in finally handling ")
    }
    );