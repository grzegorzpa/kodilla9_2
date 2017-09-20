var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = 'Piotrek';

function checkName(newName) {
	if (allNames.indexOf(newName) === -1) {
		allNames.push(newName);
		console.log('Imię nie występuje na tablicy');
	} else {
		console.log('Imię występuje już na tablicy');
	}
};

checkName(newName);
console.log(allNames);



