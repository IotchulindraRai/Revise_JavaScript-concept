
/*for(i=0;i<=5;i+5);
console.log("value=" ,i)
*/
let step = 0;
while (step < 5) {
    step += 1;
    if (step === 4) {
        continue;
    }
    console.log("step", step);
}