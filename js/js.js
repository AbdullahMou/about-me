'use strict';
var score = 0;
var name = prompt('what\'s your name');
alert('welcom ' + name + ' :)');
//console.log(Qname);
//console.log(typeof(Qname))
var Qname = prompt('do u know who am I ').toLowerCase();
if (Qname == 'y' || Qname == 'yes') {
    alert('your answer is fault ...I didnt tell anyone about it');
} else if (Qname == 'n' || Qname == 'no') {
    alert('your answer is correct ...I didnt tell you about it yet');
    score++;
} else {
    alert('pleas enter yes or no ');
}
var Qfrom = prompt('do u know where am I from ').toLowerCase();
//console.log(Qfrom);
//console.log(typeof(Qfrom))
if (Qfrom == 'y' || Qfrom == 'yes') {
    alert('your answer is fault ...I didnt tell anyone about it');
} else if (Qfrom == 'n' || Qfrom == 'no') {
    alert('your answer is correct ...I didnt tell you about it yet');
    score++;
} else {
    alert('pleas enter yes or no ');
}
var Qwork = prompt('do u know any thing about my work ').toLowerCase();
//console.log(Qwork);
//console.log(typeof(Qwork))
if (Qwork == 'y' || Qwork == 'yes') {
    alert('your answer is fault ...I didnt tell anyone about it');
} else if (Qwork == 'n' || Qwork == 'no') {
    alert('your answer is correct ...I didnt tell you about it yet');
    score++;
} else {
    alert('pleas enter yes or no ');
}
var Qold = prompt('do u know how old am I ').toLowerCase();
//console.log(Qold);
//console.log(typeof(Qold))
if (Qold == 'y' || Qold == 'yes') {
    alert('your answer is fault ...I didnt tell anyone about it');
} else if (Qold == 'n' || Qold == 'no') {
    alert('your answer is correct ...I didnt tell you about it yet');
    score++;
} else {
    alert('pleas enter yes or no ');
}
//Q5
var Qstudy = prompt('do u know where am I studied ').toLowerCase();
//console.log(Qold);
//console.log(typeof(Qold))
if (Qstudy == 'y' || Qstudy == 'yes') {
    alert('your answer is fault ...I didnt tell anyone about it');
} else if (Qstudy == 'n' || Qstudy == 'no') {
    alert('your answer is correct ...I didnt tell you about it yet');
    score++;
} else {
    alert('pleas enter yes or no ');
}
// Q number 6
var num = 55;
var Qmind = prompt('giss noumber in my mind betwen 40 ===>60 ');
Qmind = Number(Qmind);
var i = 0;
while (i < 4) {
    if (Qmind < num) {
        Qmind = prompt(Qmind + ' ===> that\'s too low..... giss number in my mind again');

    } else if (Qmind > num) {
        Qmind = prompt(Qmind + '  ===> that\'s too high .....giss number in my mind again');

    } else if (Qmind == num) {
        alert('YES !!!! that\'s it');
        score++;
        break;
    }
    i++;
}

//Q7 
var Anum = [11, 22, 33, 44, 55, 66];
var QAmind = prompt('again giss greating in my mind');
var QAmind = Number(QAmind);
console.log(typeof(QAmind))
for (var x = 0; x < Anum.length; x++) {
    if (QAmind == Anum[x]) {
        alert('YES !!!! that\'s it');
        score++;
        break;

    } else if (QAmind !== Anum[x]) {
        QAmind = prompt('w b3deen');
    }
}
alert('pleas ' + name + ' have nice time in my websit your score is : ' + score);