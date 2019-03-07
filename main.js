//LEkcija 1 video 8,9
/*
var name = 'john';
console.log(name);

var lastName = 'smith';
console.log(lastName);

var age = 25;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/
//lekcija 2 video 10
var name = 'john ';
var age = 25;
 console.log(name + age);

var job, isMarried; //mozemo ovako redjati varijable jednu do druge.a da im ne damo vrednost.

job = 'teacher';
console.log(job);
isMarried = false;

console.log(name + 'is a'+ age + 'old ' + job + '.Is he married?' + isMarried + '.');
/*posto je varijabla vec gore odredjena,ovde ne moramo da
da stavljamo opet varijabla dovoljno je samo da damo vrednost (value);*/

age = 'trideset sest';
job = 'driver';
console.log(name + 'is a'+ age + 'old ' + job + '.Is he married?' + isMarried + '.');

var lastName = prompt('What is the last name?');/*Ovde se vidi da smo ubacili
 PROMPT to je komanda koja daje prozorcic(popup window).
 Ali poenta je da smo dobili vracanje unutar console.log ime smith*/
console.log(lastName);
