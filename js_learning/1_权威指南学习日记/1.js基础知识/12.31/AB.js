/*
给定一个字符串所表示的括号序列，包含以下字符： '(', ')', '{', '}', '[' and ']'， 判定是否是有效的括号序列。

括号必须依照 "()" 顺序表示， "()[]{}" 是有效的括号，但 "([)]" 则是无效的括号。
*/
{
    function stringEnd(a) {
        //左括号入栈，判断是否满足括号顺序，不满足返回 false
        //右括号是栈顶元素出栈，判断是否匹配，不匹配返回false
        let stick = a.split("");
        let stickN = [];
        let stickLength = stick.length;
        if(stick.length === 1){
            if(stick[0] === ")" ||"]"){
                return false
            }
        }
        if(!Number.isInteger(stick.length/2))return false;
        for (let i = 0; i < stickLength; i++) {
            if (stick[i] === "(" || stick[i] === "[" || stick[i] === "{") {
                stickN.push(stick[i]);
                // if (stickN[i] === "{") {
                //     if (stickN.find(obj => obj === "(")) {
                //         return false;
                //     }
                //     if (stickN.find(obj => obj === "[")) {
                //         return false
                //     }
                // }
                // if (stickN[i] === "[") {
                //     if (stickN.find(obj => obj === '(')) {
                //         return false
                //     }
                // }
            } else if (stick[i] === ")") {
                if (stickN.length === 0) return false
                if (!stickN.pop() === "(") {
                    return false
                }
                stickN.pop(i);
            } else if (stick[i] === "]") {
                if (stickN.length === 0) return false
                if (!stickN.pop === ("[" || "(")) {
                    return false
                }
                stickN.pop(i);
            } else if (stick[i] === "}") {
                if (stickN.length === 0) return false
                stickN.pop();
            }
        }
        if (stickN.length == 0)
            return true
        return false
    }
    console.log(stringEnd("()"))

}