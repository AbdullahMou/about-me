'use strict';
var name = prompt('what\'s your name');
alert('welcom ' + name + ' :)');

// <button onclick="getElementById('bt').innerHTML = prompt('are y know me' )"></button>

// <input type="button"; id="bt" value="start" onclick="var Qold= prompt('are you know how old am I') >


var Qname = prompt('do u know who am I ');
//console.log(Qname);
//console.log(typeof(Qname))
if (Qname == 'y' || Qname == 'yes') {
    alert('your answer is fault ...I didnt tell anyone about it');
} else if (Qname == 'n' || Qname == 'no') {
    alert('your answer is correct ...I didnt tell you about it yet');
} else {
    alert('pleas enter yes or no ')
}


var Qfrom = prompt('do u know where am I from ');
//console.log(Qfrom);
//console.log(typeof(Qfrom))
if (Qfrom == 'y' || Qfrom == 'yes') {
    alert('your answer is fault ...I didnt tell anyone about it');
} else if (Qfrom == 'n' || Qfrom == 'no') {
    alert('your answer is correct ...I didnt tell you about it yet');
} else {
    alert('pleas enter yes or no ')
}

var Qwork = prompt('do u know any thing about my work ');
//console.log(Qwork);
//console.log(typeof(Qwork))
if (Qwork == 'y' || Qwork == 'yes') {
    alert('your answer is fault ...I didnt tell anyone about it');
} else if (Qwork == 'n' || Qwork == 'no') {
    alert('your answer is correct ...I didnt tell you about it yet');
} else {
    alert('pleas enter yes or no ')
}

var Qold = prompt('do u know how old am I ').toLowerCase();
//console.log(Qold);
//console.log(typeof(Qold))

if (Qold == 'y' || Qold == 'yes') {
    alert('your answer is fault ...I didnt tell anyone about it');
} else if (Qold == 'n' || Qold == 'no') {
    alert('your answer is correct ...I didnt tell you about it yet');
} else {
    alert('pleas enter yes or no ');
}


var Qstudy = prompt('do u know where am I studied ').toLowerCase();
//console.log(Qold);
//console.log(typeof(Qold))

if (Qstudy == 'y' || Qstudy == 'yes') {
    alert('your answer is fault ...I didnt tell anyone about it');
} else if (Qstudy == 'n' || Qstudy == 'no') {
    alert('your answer is correct ...I didnt tell you about it yet');
} else {
    alert('pleas enter yes or no ');
}



alert('pleas ' + name + ' have nice time in my websit ')