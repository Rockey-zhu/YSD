// 处理应用缓存相关事件
function status(msg) {
    // 将消息输出到id为 statusline 的文档元素中
    document.getElementById("statusline").innerHTML = msg;
    console.log(msg);
}

// 应用程序载入时，检查清单文件
window.applicationCache.onchecking = function() {
    status("Checking for a new version.");
    return false;
}

// 清单文件没有改动，同时应用程序也已经缓存了
// "noupdata"事件会被触发，整个过程结束
window.applicationCache.onnoupdate = function() {
    status("This version is up-to-date.");
    return false;
}

// 若还 未缓存 || 清单文件有改动 ，浏览器会下载清单中所有资源
// "downloading"事件会被触发，意味着下载过程开始
window.applicationCache.ondownloading = function() {
    status("Downloading new version.");
    window.progresscount = 0; // progress事件中会用到
    return false;
}

//下载过程会间断性触发"progress"事件
// 通常会在每个文件下载完成时触发
window.applicationCache.onprogress = function(e) {
    //计算下载完成比例
    let progress = "";
    if (e && e.lengthComputable) {
        progress = " " + Math.round(100 * e.loaded / e.total) + "%";
    } else {
        progress = " (" + ++progresscount + ") "
    }
    status("Downloading new version" + progress);
    return false;
}

//下载完成切首次应用程序下载到缓存中时
// "cached"事件会触发 
window.applicationCache.oncached = function() {
    status("This application is now cached locally.");
    return false;
}

// 当下载完成并将缓冲中的应用程序更新后
// 浏览器会触发"updateready"事件
// 要注意的时：触发此事件的时候，用户仍然可以看到老版本的应用程序。
window.applicationCache.onupdateready = function() {
    status("A new version has been downloaded. Reload to run it.");
    return false;
}

// 浏览器处于离线状态，检查清单列表失败， 触发error事件
window.applicationCache.onerror = function() {
    status("Couldn`t load manifest or cache application.");
    return false;
}

// 如果一个缓存的应用程序引用了一个不存在的清单文件 
// "obsolete"事件会触发 
// 之后都不会从缓冲而是通过网络来加载资源
window.applicationCache.onobsolete = function() {
    status("This application is no longer cached." + "Reload to get the lastest version from the network.");
    return false;
}