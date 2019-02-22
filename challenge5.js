
	var string1 = 'green';
var string2 = 'beans';

var common = [];

var s1 = string1.split('');
var s2 = string2.split('');

for(var i = 0; i < s1.length; i++){
	for(var j = 0; j < s2.length; j++){
		if(s1[i] == s2[j]){
			common.push(s1[i]);
        }
    }
}
console.log(common);