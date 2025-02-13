let str = "555";
str = str.padStart(str.length+6,"hello ");
str = str.padEnd(str.length+11," helloWorld"); 
console.log(str)//hello 555 helloWorld    