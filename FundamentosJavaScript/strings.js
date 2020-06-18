var str1,str2,strR;

strR = ""
str1 = "CAMINHO"
str2 = "PASSARO"

str1 = str1.split('');
str2 = str2.split('');

var i = str1.length > str2.length ? str2.length : str1.length;

for (let index = 0; index < i; index++) {
    strR += str1[index] + str2[index]
}

console.log(strR);