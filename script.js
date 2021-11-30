do{
    num = +prompt('введите кол-во строк');
}while(  num == 0);

if(isNaN(num)) {
    num = 5
}else {
    num = num;
}

do{
  one = prompt('введите символ первый');  
}while(one == 0);

do{
    two = prompt('введите символ второй');
}while(two == 0);

res = one
console.log(one + two);

for(let i = 0; i <= num; i++) {
res = one + res;
console.log(res + two); 
}

