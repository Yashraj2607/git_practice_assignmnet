var num = 7;
var count =0;
for(var i=1;i<=num;i++){

if(num%i===0){
count++
}

if(count===2){
console.log("prime number");
}
else{
console.log("not prime")
}