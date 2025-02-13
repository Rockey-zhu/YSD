{
    var then = new Date(2020, 08, 04); //2020-09-03T16:00:00.000Z
    console.log(then);

    var later = new Date(2020, 0, 1, 17, 10, 30) //2020-01-01T09:10:30.000Z
    console.log(later);

    var now = new Date(); //2020-08-04T02:11:32.038Z
    console.log(now);
    console.log(now.getFullYear()) //年 2020
    console.log(now.getMonth()) //从0开始的月数 7
    console.log(now.getDate()) //从1开始的天数 4
    console.log(now.getDay()) //周几2
    console.log(now.getHours()) //当地时间10
    console.log(now.getUTCHours()); //UTC表示小时的时间 2

    var noow = Date(); //Tue Aug 04 2020 10:14:48 GMT+0800 (GMT+08:00)
    console.log(noow);
}