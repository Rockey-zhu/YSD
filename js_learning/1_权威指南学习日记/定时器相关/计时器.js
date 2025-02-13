//setTimeout()
/*
    安排函数f()在未来的调用模式
    在等待了若干毫秒之后调用f（）
    如果设置了interval并没有设置end参数，则对f()调用将不会停止；
    如果没有设置interval和end，旨在若干毫秒后调用f()一次
    只有指定了f()，才会从start = 0 开始
    调用invoke()不会阻塞，会直接返回
*/
function invoke(f, start, interval, end) {
    if (!start) start = 0;
    if (arguments.length <= 2) {
        setTimeout(f, start);
    } else {
        setTimeout(repeat, start);

        function repeat() {
            let h = setInterval(f, interval);
            if (end) setTimeout(() => {
                clearInterval(h);
            }, end);
        }
    }
}

//setTnterval()