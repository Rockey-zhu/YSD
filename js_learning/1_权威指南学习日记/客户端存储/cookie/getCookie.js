//document.cookie获取cookie返回的对象（string类型）
function getCookie() {
    let cookie = {};
    let all = document.cookie;
    if(all === ""){
        return cookie;
    }
    let list = all.split("; ");
    for(let i = 0 ; i< list.length; i++){
        let cookieIndex = list[i];
        let p = cookieIndex.indexOf("=");
        let name = cookieIndex.substring(0,p); 
        let value = cookieIndex.substring(p+1);
        value = decodeURIComponent(value);
        cookie[name] = value; 
    }
    return cookie;
}
