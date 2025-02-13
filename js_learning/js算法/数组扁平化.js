const arrs = [1, [2, [3, 4]], 5];

const res1 = arrs.flat(Infinity);

const res2 = JSON.stringify(arrs).replace(/\[|\]/g, '').split(',');

const res3 = JSON.parse('[' + JSON.stringify(arrs).replace(/\[|\]/g, '') + ']');

const flatten = arrs => {
    return arrs.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
    }, [])
}

// 递归
const res5 = [];
const fn = arrs => {
  for (let i = 0; i < arrs.length; i++) {
    if (Array.isArray(arrs[i])) {
      fn(arrs[i]);
    } else {
      res5.push(arrs[i]);
    }
  }
}
fn(arrs)

console.log("res1:", res1);

console.log("res2:", res2); //会变成字符串

console.log("res3:", res3);

console.log("flatten:", flatten(arrs));

console.log("res5:",res5);