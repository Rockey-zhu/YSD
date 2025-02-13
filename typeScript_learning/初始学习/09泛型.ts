// 泛型T  就是不知道 暂时的数据类型是什么
interface lengthWise {
	length:number;
}

function identity<T extends lengthWise>(arg: T): T {
	return arg;
}

const result = identity<String>(`hello world`);
console.log(result)

// ----------------------------------------------
// 又能当类型 又能当实体类
class GenericNumber<T>{
	zeroValue: T | undefined;
	add:(x:T,y:T) => T | undefined;
}

const myGenericNumber = new GenericNumber<Number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x,y){
	console.log(x+y)
	return x+y;
}
myGenericNumber.add(10,20);

// -------------------------------------------------
// 泛型 重载
function getData<T>(value:T):T{
	return value;
}
getData<number>(123);
getData<String>("hello")

// -------------------------------------------------
// 泛型 接口
interface ConfigFn{
	<T>(value: T):void;
}
const getdata2:ConfigFn = function <T>(value: T):void{
	console.log(value)
}

getdata2<string>(`123`)

// -------------------------------------------------
// 动态泛型
interface Bookmark{}

class BookmarkServer<T extends Bookmark>{
	item: T[] = [];
}


// !!!! 需要重新看文章理解