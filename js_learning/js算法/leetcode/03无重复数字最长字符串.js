/**
 * input `abcabcbb`
 * Output :3
 * 
 */

//  sliding window
 function lengthOfLongestSubstring(s){
     const set = new Set();
     let i = 0 ,j = 0, maxLength = 0;
     if(s.length === 0){
         return 0;
     }else{
         for( i ; i < s.length ; i++){
             if(!set.has(s[i])){
                 set.add(s[i])
                 maxLength = Math.max(maxLength, set.size)
             }else{
                 while(set.has(s[i])){
                     set.delete(s[j]);
                     j++
                 }
             }
         }
     }
     return maxLength;
 }
























//  //html
//  /** 
//  <div @click="handleTochange1(true)">筛选1-1</div>
//  <div @click="handleTochange1(false)">筛选1-2</div>

//  <div @click="handleTochange2(true)">筛选2-1</div>
//  <div @click="handleTochange2(false)">筛选2-2</div>
// */

// // js
// let fn1Model = true;
// let fn2Model = true;

// function switchShow(fn1,fn2){
//     if(fn1 == true && fn2 == true){
//         // 切换显示
//     }else if(fn1 == true && fn2 == false){
//         // 切换显示
//     }else if(fn1 == false && fn2 == true){
//         // 切换显示
//     }else if(fn1 == false && fn2 == false){
//         // 切换显示
//     }
// }

// function handleTochange1(fn){
//     fn1Model = fn;
//     switchShow(fn1Model,fn2Model)
// }


// function handleTochange2(fn){
//     fn2Model = fn;
//     switchShow(fn1Model,fn2Model)
// }