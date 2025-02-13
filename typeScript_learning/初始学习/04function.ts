let myNum:(x:number,y:number)=>number =
 function(x: number, y: number) {
	return x+y;
}

// 2.函数默认参数
function buildName(first:string,last:string =`cat`){
	return first + `+` + last
}
console.log(buildName("dog"));

// 3.剩余参数
function push(array:any[],...items:any){
	items.forEach((item:any) => {
		array.push((item))
	})
}

let a =[4];
push(a,1,2,"xx");
console.log("a_:",a);

// 4.可选参数  放到最后面
function choiceFun(lastName:string,firstName?:string){
	return lastName + `+` + firstName;
}
console.log(choiceFun(`dog`))