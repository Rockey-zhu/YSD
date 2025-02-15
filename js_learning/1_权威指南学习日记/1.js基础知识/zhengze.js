// var regEx = "^\\s*($|#|\\w+\\s*=|(\\?|\\*|(?:[0-5]?\\d)(?:(?:-|\\/|\\,)(?:[0-5]?\\d))?(?:,(?:[0-5]?\\d)(?:(?:-|\\/|\\,)(?:[0-5]?\\d))?)*)\\s+(\\?|\\*|(?:[0-5]?\\d)(?:(?:-|\\/|\\,)(?:[0-5]?\\d))?(?:,(?:[0-5]?\\d)(?:(?:-|\\/|\\,)(?:[0-5]?\\d))?)*)\\s+(\\?|\\*|(?:[01]?\\d|2[0-3])(?:(?:-|\\/|\\,)(?:[01]?\\d|2[0-3]))?(?:,(?:[01]?\\d|2[0-3])(?:(?:-|\\/|\\,)(?:[01]?\\d|2[0-3]))?)*)\\s+(\\?|\\*|(?:0?[1-9]|[12]\\d|3[01])(?:(?:-|\\/|\\,)(?:0?[1-9]|[12]\\d|3[01]))?(?:,(?:0?[1-9]|[12]\\d|3[01])(?:(?:-|\\/|\\,)(?:0?[1-9]|[12]\\d|3[01]))?)*)\\s+(\\?|\\*|(?:[1-9]|1[012])(?:(?:-|\\/|\\,)(?:[1-9]|1[012]))?(?:L|W)?(?:,(?:[1-9]|1[012])(?:(?:-|\\/|\\,)(?:[1-9]|1[012]))?(?:L|W)?)*|\\?|\\*|(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)(?:(?:-)(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC))?(?:,(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)(?:(?:-)(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC))?)*)\\s+(\\?|\\*|(?:[0-6])(?:(?:-|\\/|\\,|#)(?:[0-6]))?(?:L)?(?:,(?:[0-6])(?:(?:-|\\/|\\,|#)(?:[0-6]))?(?:L)?)*|\\?|\\*|(?:MON|TUE|WED|THU|FRI|SAT|SUN)(?:(?:-)(?:MON|TUE|WED|THU|FRI|SAT|SUN))?(?:,(?:MON|TUE|WED|THU|FRI|SAT|SUN)(?:(?:-)(?:MON|TUE|WED|THU|FRI|SAT|SUN))?)*)(|\\s)+(\\?|\\*|(?:|\\d{4})(?:(?:-|\\/|\\,)(?:|\\d{4}))?(?:,(?:|\\d{4})(?:(?:-|\\/|\\,)(?:|\\d{4}))?)*))$";
// var tests = "0 59 08 1,2 1  ?";
// console.log(tests.test(regEx));
// var s = "0 59 08 1,2 1  ?";
var r = /( ? #second)(\ * | ( ? : \ * | ( ? : [0 - 9] | ( ? : [1 - 5][0 - 9])))\ / ( ? : [0 - 9] | ( ? : [1 - 5][0 - 9])) |
    ( ? : [0 - 9] | ( ? : [1 - 5][0 - 9]))( ? : ( ? : \-[0 - 9] | \-( ? : [1 - 5][0 - 9])) ? | ( ? : \, ( ? : [0 - 9] | ( ? : [1 - 5][0 - 9]))) * ))
( ? #minute)(\ * | ( ? : \ * | ( ? : [0 - 9] | ( ? : [1 - 5][0 - 9])))\ / ( ? : [0 - 9] | ( ? : [1 - 5][0 - 9])) | ( ? : [0 - 9] |
    ( ? : [1 - 5][0 - 9]))( ? : ( ? : \-[0 - 9] | \-( ? : [1 - 5][0 - 9])) ? | ( ? : \, ( ? : [0 - 9] | ( ? : [1 - 5][0 - 9]))) * ))
( ? #hour)(\ * | ( ? : \ * | ( ? : \ * | ( ? : [0 - 9] | 1[0 - 9] | 2[0 - 3])))\ / ( ? : [0 - 9] | 1[0 - 9] | 2[0 - 3]) |
    ( ? : [0 - 9] | 1[0 - 9] | 2[0 - 3])( ? : ( ? : \-( ? : [0 - 9] | 1[0 - 9] | 2[0 - 3])) ? | ( ? : \, ( ? : [0 - 9] | 1[0 - 9] | 2[0 - 3])) * ))
( ? #day_of_month)(\ * | \ ? | L( ? : W | \-( ? : [1 - 9] | ( ? : [12][0 - 9]) | 3[01])) ? | ( ? : [1 - 9] | ( ? : [12][0 - 9]) |
        3[01])( ? : W | \/(?:[1-9]|(?:[12][0-9])|3[01]))?|(?:[1-9]|(?:[12][0-9])|3[01])
        ( ? : ( ? : \-( ? : [1 - 9] | ( ? : [12][0 - 9]) | 3[01])) ? | ( ? : \, ( ? : [1 - 9] | ( ? : [12][0 - 9]) | 3[01])) * ))
    ( ? #month)(\ * | ( ? : [1 - 9] | 1[012] | JAN | FEB | MAR | APR | MAY | JUN | JUL | AUG | SEP | OCT | NOV | DEC)
        ( ? : ( ? : \-( ? : [1 - 9] | 1[012] | JAN | FEB | MAR | APR | MAY | JUN | JUL | AUG | SEP | OCT | NOV | DEC)) ? |
            ( ? : \, ( ? : [1 - 9] | 1[012] | JAN | FEB | MAR | APR | MAY | JUN | JUL | AUG | SEP | OCT | NOV | DEC)) * ))
    ( ? #day_of_week)(\ * | \ ? | [0 - 6]( ? : L | \#[1 - 5]) ? | ( ? : [0 - 6] | SUN | MON | TUE | WED | THU | FRI | SAT)
        ( ? : ( ? : \-( ? : [0 - 6] | SUN | MON | TUE | WED | THU | FRI | SAT)) ? | ( ? : \, ( ? : [0 - 6] | SUN | MON | TUE | WED | THU | FRI | SAT)) * ))
    ( ? #year)(\ * | ( ? : [1 - 9][0 - 9] { 3 })( ? : ( ? : \-[1 - 9][0 - 9] { 3 }) ? | ( ? : \, [1 - 9][0 - 9] { 3 }) * )) $ / ;
    var b = r.test(s); console.log("0000--", b)


    // var str = "0 59 08 1,2 1  ?";
    // if (str.match(
    //         / ^
    //         ( ? #second)(\ * | ( ? : \ * | ( ? : [0 - 9] | ( ? : [1 - 5][0 - 9])))\ / ( ? : [0 - 9] | ( ? : [1 - 5][0 - 9])) |
    //             ( ? : [0 - 9] | ( ? : [1 - 5][0 - 9]))( ? : ( ? : \-[0 - 9] | \-( ? : [1 - 5][0 - 9])) ? | ( ? : \, ( ? : [0 - 9] | ( ? : [1 - 5][0 - 9]))) * ))
    //         ( ? #minute)(\ * | ( ? : \ * | ( ? : [0 - 9] | ( ? : [1 - 5][0 - 9])))\ / ( ? : [0 - 9] | ( ? : [1 - 5][0 - 9])) | ( ? : [0 - 9] |
    //             ( ? : [1 - 5][0 - 9]))( ? : ( ? : \-[0 - 9] | \-( ? : [1 - 5][0 - 9])) ? | ( ? : \, ( ? : [0 - 9] | ( ? : [1 - 5][0 - 9]))) * ))
    //         ( ? #hour)(\ * | ( ? : \ * | ( ? : \ * | ( ? : [0 - 9] | 1[0 - 9] | 2[0 - 3])))\ / ( ? : [0 - 9] | 1[0 - 9] | 2[0 - 3]) |
    //             ( ? : [0 - 9] | 1[0 - 9] | 2[0 - 3])( ? : ( ? : \-( ? : [0 - 9] | 1[0 - 9] | 2[0 - 3])) ? | ( ? : \, ( ? : [0 - 9] | 1[0 - 9] | 2[0 - 3])) * ))
    //         ( ? #day_of_month)(\ * | \ ? | L( ? : W | \-( ? : [1 - 9] | ( ? : [12][0 - 9]) | 3[01])) ? | ( ? : [1 - 9] | ( ? : [12][0 - 9]) |
    //                 3[01])( ? : W | \/(?:[1-9]|(?:[12][0-9])|3[01]))?|(?:[1-9]|(?:[12][0-9])|3[01])
    //                 ( ? : ( ? : \-( ? : [1 - 9] | ( ? : [12][0 - 9]) | 3[01])) ? | ( ? : \, ( ? : [1 - 9] | ( ? : [12][0 - 9]) | 3[01])) * ))
    //             ( ? #month)(\ * | ( ? : [1 - 9] | 1[012] | JAN | FEB | MAR | APR | MAY | JUN | JUL | AUG | SEP | OCT | NOV | DEC)
    //                 ( ? : ( ? : \-( ? : [1 - 9] | 1[012] | JAN | FEB | MAR | APR | MAY | JUN | JUL | AUG | SEP | OCT | NOV | DEC)) ? |
    //                     ( ? : \, ( ? : [1 - 9] | 1[012] | JAN | FEB | MAR | APR | MAY | JUN | JUL | AUG | SEP | OCT | NOV | DEC)) * ))
    //             ( ? #day_of_week)(\ * | \ ? | [0 - 6]( ? : L | \#[1 - 5]) ? | ( ? : [0 - 6] | SUN | MON | TUE | WED | THU | FRI | SAT)
    //                 ( ? : ( ? : \-( ? : [0 - 6] | SUN | MON | TUE | WED | THU | FRI | SAT)) ? | ( ? : \, ( ? : [0 - 6] | SUN | MON | TUE | WED | THU | FRI | SAT)) * ))
    //             ( ? #year)(\ * | ( ? : [1 - 9][0 - 9] { 3 })( ? : ( ? : \-[1 - 9][0 - 9] { 3 }) ? | ( ? : \, [1 - 9][0 - 9] { 3 }) * )) $ /
    //         )) {
    //         console.log("match!");
    //     }