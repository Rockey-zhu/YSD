/*
 * Basic responsive mashup template
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */



let devHost = "s01.demo.krclouds.com";
let qstHost = "qst.syngentachina.com";
let qsHost = "qs.syngentachina.com";
var prefix = window.location.pathname.substr(0, window.location.pathname.toLowerCase().lastIndexOf("/extensions") + 1);
var config = {
    host: window.location.hostname,
    prefix: prefix,
    port: window.location.port,
    isSecure: window.location.protocol === "https:",
    secure: window.location.protocol === "https:"
};

if (config.host == "127.0.0.1" || config.host == "localhost") {
    config.host = devHost
    config.isSecure = true // 根据服务器情况
    config.port = 80
    if (config.isSecure) {
        config.port = 443
    }
    config.prefix = "/"
}


window.require.config({
    baseUrl: (config.isSecure ? "https://" : "http://") + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources",
});



// window.require.config({
//     baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources",
//     // baseUrl: "https://"+config.host+"/resources",
//     webIntegrationId: "keyroads",
//     config: {
//       text: {
//         useXhr() {
//           return true;
//         }
//       }
//     }
// });


let appSessionCache = {}; //obj对象

function openApp(qlik, AppId, config, keepconn = true) {

    let app = qlik.openApp(AppId, config);
    if (keepconn && appSessionCache[AppId] === undefined) {
        // app.variable.setNumValue('keepconn',1);
        // setInterval(()=>{ 
        // app.variable.getContent('keepconn').then((model)=>{  
        //     let qString=model.qContent.qString 
        //     if(qString){
        //     console.log("keepconn: ",qString);
        //         app.variable.setNumValue('keepconn',parseInt(qString)+1);
        //     } 
        // },function(errorObject){
        //     console.log("keepconn: ",errorObject);
        // },5000)
        // })
    }
    appSessionCache[AppId] = app
    return app;
}

function InitPageListData(pageItemIndex = 0, qlik) {
    let pageItem = PageConfig.PageList[pageItemIndex];
    //判断不同环境下的AppId
    let AppID;
    console.log("---window.location.hostname---", window.location.hostname)
    console.log("--qstHost---", qstHost, "---qsHost---", qsHost);
    if (window.location.hostname === qstHost) { //qst
        AppID = pageItem.qstAppId;
    } else if (window.location.hostname === qsHost) { //qs
        AppID = pageItem.qsAppId
    } else { //s01和本地
        AppID = pageItem.AppId;
    }
    appSessionCache[AppID] = openApp(qlik, AppID, config, true)
        // qlik.openApp(pageItem.AppId, config);
    for (let pageItemListIndex in pageItem.ItemList) {
        let pageItemList_item = pageItem.ItemList[pageItemListIndex]
        let pageItemList_item_AppId = AppID;
        if (pageItemList_item.AppId.toString().trim() != "" && appSessionCache[pageItemList_item.AppId.toString().trim()]) {
            appSessionCache[pageItemList_item.AppId.toString().trim()] = openApp(qlik, pageItemList_item.AppId.toString().trim(), config, true)
            pageItemList_item_AppId = pageItemList_item.AppId.toString().trim()
        }
        let ItemAPP = appSessionCache[pageItemList_item_AppId]
        if (pageItemList_item.ItemType === "KpiExp") {
            //执行表达式并操作dom元素
            //   ItemAPP.getObject(pageItemList_item.QVID, pageItemList_item.ObjId); 
            let _obj_1 = {};
            _obj_1[pageItemList_item.QVID] = { qStringExpression: pageItemList_item.Expstr };
            ItemAPP.createGenericObject(_obj_1, reply => {
                let res_html = reply[pageItemList_item.QVID];
                //通过jq设置html
                $("#" + pageItemList_item.QVID).html(res_html);
            })
        } else {
            if (pageItemList_item.ObjId != "" && pageItemList_item.QVID != "") {
                 ItemAPP.getObject(pageItemList_item.QVID, pageItemList_item.ObjId);
            }
        }
    }
}

// 第一个页面   InitPageListData(0,qlik)
// 第二个页面   InitPageListData(1,qlik)
function clearAll(pageItemIndex = 0) {
    console.log("111")
    let pageItem = PageConfig.PageList[pageItemIndex];
    //判断不同环境下的AppId
    let AppID;
    console.log("---window.location.hostname---", window.location.hostname);
    console.log("--qstHost---", qstHost, "---qsHost---", qsHost);
    if (window.location.hostname === qstHost) { //qst
        AppID = pageItem.qstAppId;
    } else if (window.location.hostname === qsHost) { //qs
        AppID = pageItem.qsAppId;
    } else { //s01和本地
        AppID = pageItem.AppId;
    }
    // qlik.openApp(pageItem.AppId, config);
    if (appSessionCache[AppID]) {
        for (let pageItemListIndex in pageItem.ItemList) {
            let pageItemList_item = pageItem.ItemList[pageItemListIndex]
            let pageItemList_item_AppId = AppID
            if (pageItemList_item.AppId.toString().trim() != "" && appSessionCache[pageItemList_item.AppId.toString().trim()]) {
                pageItemList_item_AppId = pageItemList_item.AppId.toString().trim()
            }
            if (pageItemList_item_AppId != AppID && pageItemList_item_AppId != "") {
                pageItemList_item_AppId.cleanerAll()
            }
            // let ItemAPP = appSessionCache[pageItemList_item_AppId]
        }
        console.log("----appSessionCache[AppID]--", appSessionCache[AppID])
        console.log("----AppID--", AppID)
        appSessionCache[AppID].clearAll();
    }
}

function back(pageItemIndex = 0) {
    let pageItem = PageConfig.PageList[pageItemIndex]
        // qlik.openApp(pageItem.AppId, config);
    if (appSessionCache[pageItem.AppId]) {
        for (let pageItemListIndex in pageItem.ItemList) {
            let pageItemList_item = pageItem.ItemList[pageItemListIndex]
            let pageItemList_item_AppId = pageItem.AppId
            if (pageItemList_item.AppId.toString().trim() != "" && appSessionCache[pageItemList_item.AppId.toString().trim()]) {
                pageItemList_item_AppId = pageItemList_item.AppId.toString().trim()
            }
            if (pageItemList_item_AppId != pageItem.AppId && pageItemList_item_AppId != "") {
                pageItem.AppId.back()
            }
            // let ItemAPP = appSessionCache[pageItemList_item_AppId]
        }
        appSessionCache[pageItem.AppId].back();
    }
}
// for (let pageItemIndex in PageConfig.PageList){
//     let pageItem=PageConfig.PageList[pageItemIndex]
//      appSessionCache=qlik.openApp(pageItem.AppId, config);
// }
window.require(["js/qlik"], (qlik) => {
    qlik.setOnError(function(error) {
        $('#popupText').append(error.message + "<br>");
        $('#popup').fadeIn(1000);
    });
    $("#closePopup").click(function() {
        $('#popup').hide();
    });
    let global = qlik.getGlobal({
        host: config.host,
        prefix: config.prefix === "" ? "/" : config.prefix,
        port: config.port,
        isSecure: config.isSecure
    });
    console.log({
        host: config.host,
        prefix: config.prefix === "" ? "/" : config.prefix,
        port: config.port,
        isSecure: config.isSecure
    })
    global.getAuthenticatedUser(reply => {
        let UserDirectory = "";
        let UserId = "";
        if (reply && reply.qReturn) {
            let qReturn = reply.qReturn.split(";");
            UserDirectory = qReturn[0].split("=")[1];
            UserId = qReturn[1].split("=")[1];
        }
        //获取登录的qlik用户
        // console.log("getAuthenticatedUser: ",'UserDirectory:',UserDirectory);
        // console.log("getAuthenticatedUser: ",'UserId:',UserId);
    });
    //callbacks -- inserted here --
    //open apps -- inserted here --

    //1.都放在一个html内
    //2.点击判断界面  $(id).click
    //3.点击后index = true 不刷新

    InitPageListData(0, qlik)
    InitPageListData(1, qlik)
    InitPageListData(2, qlik)
        // var app = qlik.openApp('10a84981-dd85-49ff-bcd0-b7b23685d01e', config);
        // let appSessionCache = {}; //obj对象
        // for (let pageItem in PageConfig.PageList){
        //      console.log(pageItem)
        // }


    //

    //get objects -- inserted here --
    // app.getObject('QV03', 'wsfPfUj');
    // app.getObject('QV02', 'DNpXBxP');
    // app.getObject('QV01', 'msqPzY');

    // //
    // app.getObject('QVCPid', 'wsfPfUj')
    //create cubes and lists -- inserted here --

});