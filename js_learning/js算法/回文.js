function a(s) {
    let arrs = s.split("");
    let MAX = 0;
    arrs.map((ele, index) => {
        if (!(index === 0 || index === arrs.length - 1)) {
            // console.log("___", index);
            for (let j = 0; j < index; j++) {
                // console.log("j---", j)
                if ((arrs[index - 1] != arrs[index + 1])) {
                    if (arrs[index - 1] === arrs[index]) { //左相等
                        if (arrs[index - j - 1] === arrs[index + j]) {
                            MAX = MAX < 2 * j + 2 ? 2 * j + 2 : MAX;
                        }
                    } else if (arrs[index + 1] === arrs[index]) { //右相等
                        if (arrs[index - j] === arrs[index + j + 1]) {
                            MAX = MAX < 2 * j + 2 ? 2 * j + 2 : MAX;
                        }
                    }
                } else {
                    console.log("_奇数_")
                    if (arrs[index - j] === arrs[index + j]) {
                        MAX = MAX < 2 * j + 1 ? 2 * j + 1 : MAX;
                    }
                }

            }

        }

    })
    return MAX;
}
a("abcacbaabe")