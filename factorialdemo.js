factorial=function(n){
fact=1;
for(i=1;i<=n;i++){
   fact=fact*i;
}
return fact;
}

addition=function(a,b){
	return a+b;
	
}

console.log("factorial:"+factorial(5));
console.log("addition:"+addition(20,30));