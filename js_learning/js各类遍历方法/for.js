/*
for循环
1.能被break
2.会改变原数据
3.对象及数组都适用
*/
{
    let arr = [
        { id: 1, value: 'yoy' },
        { id: 2, value: 'cher' },
        { id: 3, value: 'nothing' }
    ]
    for (let j = 0; j < arr.length; j++) {
        console.log(j, arr[j])
    }
}