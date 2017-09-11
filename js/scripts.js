var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola',];
	maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
	allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName= 'Marian';
function checkName() {
	if(allNames.indexOf(newName) === -1.) {
			console.log('Marian nie występuje na tablicy');
		} else {
			console.log('Marian występuje na tablicy');
		}
}

allNames.push(newName);
console.log(allNames[8]);
checkName(allNames);
