/***
 * 如果一个单词内顺序打乱能获得另一个单词 他俩互为 anagrams
 * 
 * input: [`eat` , `tea` , `tan` , `ate` , `nat` , `bat`]
 * 
 * outPut:
 * [
 *  [`ate`,`eat`,`tea`]
 *  [`nat`,`tan`]
 *  [`bat`]
 * ]
 * 
 */

function groupAnagrams(strs){
    if(strs.length === 0){
        return [];
    }
    const map = new Map();

    for(const str of strs){
        
        const characters = Array(26).fill(0);
        for(let i=0; i<str.length; i++ ){
            console.log(str[i]) // e
            //a 的sacii 为 97 ; b为98 ... 
            const ascii = str.charCodeAt(i) - 97; // 101 -97 = 4
            characters[ascii]++;
        }
        const key = characters.join("");
        console.log("__key__",key)
        console.log("__str__",str)
        if(map.has(key)){
            map.set(key,[...map.get(key), str])
        }else{
            map.set(key,[str]) 
        }
    }

    const result = [];
    for(const arr of map){
        result.push(arr[1])
    }

    return result; 
}
groupAnagrams(['eat'])
