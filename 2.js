let a = {
    a:1,
    b:2
}

let b = {}

b = {
    a:a.a
}

console.log(b)