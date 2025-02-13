{
    Math.pow(2, 53) //2的53次幂
    Math.round(0.6) //1.0  ,四舍五入
    Math.ceil(0.6) //1.0  向上求整
    Math.floor(0.6) //0 向下求整
    Math.abs(-5) //5  绝对值
    Math.max(15, 25, 8) // 25 返回最大值
    Math.min(5, 7, 3) //3 返回最小值
    Math.random() //生成大于等于0 小于等于1.0 的伪随机数
    Math.PI //圆周率
    Math.E //e,自然对数的底数2.718281828459045
    Math.sqrt(3) //3的平方根
    Math.pow(3, 1 / 3) //3的立方根
    Math.sin(1)
    Math.cos(1)
    Math.atan(1)
    Math.log(10)
    Math.log(100) / Math.LN10 //以10为底100为对数
    Math.exp(3) //e的三次幂 
}

//js算术运算上溢，结果为Infinity
//下溢，为0
//被0整除，为Infinity 或者 -Infinity

//js最好不要用小数！会出现舍入问题



{
    function Animal() {
        this.eat = function() {
            console.log("eating food");
        }
    }

    function Dog() {
        this.bark = function() {
            console.log("dog bark")
        }
    }

    Dog.prototype = new Animal()

    var hashiqi = new Dog()
    hashiqi.eat() //eating food
}