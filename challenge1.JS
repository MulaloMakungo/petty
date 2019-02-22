function check65(x, y)

{
	return ((x == 65 || y == 65) || (x  + y == 65));
}

console.log(check65(60,5))
console.log(check65(65,0))
console.log(check65(0,65))
console.log(check65(5,58))