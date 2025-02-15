function isValid(s){
    const mappings = new Map();
    mapping.set("(",")");
    mapping.set("[","]");
    mapping.set("{","}");

    const stack = [];

    for(let i = 0 ; i<s.length; i++){
        if(mappings.has(s[i])){
            stack.push(mappings.get(s[i]))
        }else{
            if(stack.pop() !== s[i]){
                return false;
            }
        }
    }
    if(stack.length !== 0){
        return false;
    }

    return true;
}