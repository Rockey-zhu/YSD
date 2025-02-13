var s = 'hello world!';
s.charAt(0) //h
s.charAt(s.length - 1) //!
s.substring(1, 4) //ell
s.slice(1, 4) //ell
s.slice(-3) //ld!
s.indexOf("l") //2
s.lastIndexOf("l") //10
console.log(s.indexOf("l", 4)); //9 在位置4及之后首次 出现字符的位置

console.log(s.split(' ')) //[ 'hello', 'world!' ]

console.log(s.replace("h", "H")) //Hello world!

console.log(s.toUpperCase()) //HELLO WORLD!

var word = s.substring(s.indexOf(" ") + 1, s.length); //world!
console.log(word);