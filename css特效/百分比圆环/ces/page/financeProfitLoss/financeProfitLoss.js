var sunyiBtn = "QVGp%02"; //QVGp%02->Geoss profit; QVEBITDA%02 -> EBITDA
var zijingBtn = "QVFinance"; //QVFinance->财务费用；  QVService->营运资金； QVFreeMoney->自由现金流；
var zhuzhuangtu = "QVGp021"; //QVGp021-->s vs b ;  QVGp022--> s vs g p ; QVGp023 --->QVGp023; 

function handleToChange(index) {
    console.log("----11111--", index);
    if (index === 'home') {
        console.log("----11111--", index);
    } else if (index === 'cashFlow') {
        window.location.href = 'cashFlow.html';
    } else if (index === 'pl') {
        window.location.href = 'financeProfitLoss.html';
    } else if (index === 'sales') {
        //window.location.href = 'index.html';
    }
}

function handleToPro() {
    //显示损益 ---隐藏资金
    document.getElementById("sunyi").style.visibility = "visible";
    document.getElementById("zijing").style.visibility = "hidden";

    //判断sunyiBtn的情况-》显示
    console.log("---sunyiBtn---", sunyiBtn);
    document.getElementById(sunyiBtn).style.visibility = "visible";
    document.getElementById(zhuzhuangtu).style.visibility = "visible";
    //判断zijingBtn的情况 ->隐藏
    console.log("---zijingBtn----", zijingBtn);
    document.getElementById(zijingBtn + "1").style.visibility = "hidden";
    document.getElementById(zijingBtn + "2").style.visibility = "hidden";
    document.getElementById(zijingBtn + "3").style.visibility = "hidden";
    document.getElementById(zijingBtn + "4").style.visibility = "hidden";
}

function handleToCap() {
    //显示资金 ---隐藏损益
    document.getElementById("zijing").style.visibility = "visible";
    document.getElementById("sunyi").style.visibility = "hidden";

    //判断sunyiBtn的情况-》隐藏
    document.getElementById(sunyiBtn).style.visibility = "hidden";
    document.getElementById(zhuzhuangtu).style.visibility = "hidden";
    //判断zijingBtn的情况 ->显示
    document.getElementById(zijingBtn + "1").style.visibility = "visible";
    document.getElementById(zijingBtn + "2").style.visibility = "visible";
    document.getElementById(zijingBtn + "3").style.visibility = "visible";
    document.getElementById(zijingBtn + "4").style.visibility = "visible";


}

//趋势分析图三个切换
function handlToChoiceSVSB() {
    zhuzhuangtu = "QVGp021"

    //按钮增加active样式
    document.getElementById("BtnSVSB").classList.add("active");
    document.getElementById("BtnSVSGP").classList.remove("active");
    document.getElementById("BtnSVSEB").classList.remove("active");

    //显示隐藏
    document.getElementById("QVGp021").style.visibility = "visible";
    document.getElementById("QVGp022").style.visibility = "hidden";
    document.getElementById("QVGp023").style.visibility = "hidden";
}

function handlToChoiceSVSGP() {
    zhuzhuangtu = "QVGp022"

    //按钮增加active样式
    document.getElementById("BtnSVSGP").classList.add("active");
    document.getElementById("BtnSVSEB").classList.remove("active");
    document.getElementById("BtnSVSB").classList.remove("active");

    //显示隐藏
    document.getElementById("QVGp022").style.visibility = "visible";
    document.getElementById("QVGp021").style.visibility = "hidden";
    document.getElementById("QVGp023").style.visibility = "hidden";
}

function handlToChoiceSVSEB() {
    zhuzhuangtu = "QVGp023"

    //按钮增加active样式
    document.getElementById("BtnSVSEB").classList.add("active");
    document.getElementById("BtnSVSGP").classList.remove("active");
    document.getElementById("BtnSVSB").classList.remove("active");

    //显示隐藏
    document.getElementById("QVGp023").style.visibility = "visible";
    document.getElementById("QVGp022").style.visibility = "hidden";
    document.getElementById("QVGp021").style.visibility = "hidden";
}

function handlToChoiceGp() {
    sunyiBtn = "QVGp%02";
    console.log("---handlToChoiceGp--", sunyiBtn);
    //按钮增加active样式
    document.getElementById("BtnGp").classList.add("active");
    document.getElementById("BtnEB").classList.remove("active");

    //content显示1 --隐藏1
    document.getElementById("QVGp%02").style.visibility = "visible";
    document.getElementById("QVEBITDA%02").style.visibility = "hidden";

}

function handlToChoiceEB() {
    sunyiBtn = "QVEBITDA%02";
    console.log("---handlToChoiceEB--", sunyiBtn);
    //按钮增加active样式
    document.getElementById("BtnEB").classList.add("active");
    document.getElementById("BtnGp").classList.remove("active");

    //content显示2 --隐藏1
    document.getElementById("QVGp%02").style.visibility = "hidden";
    document.getElementById("QVEBITDA%02").style.visibility = "visible";
}

function handleChangeFinance() {
    zijingBtn = "QVFinance"
    console.log("handleChangeFinance-", zijingBtn)

    //按钮增加active样式
    document.getElementById("BtnFinance").classList.add("active");
    document.getElementById("BtnService").classList.remove("active");
    document.getElementById("BtnFreeMoney").classList.remove("active");

    //content显示Finance1~4 --隐藏other
    document.getElementById("QVFinance1").style.visibility = "visible";
    document.getElementById("QVFinance2").style.visibility = "visible";
    document.getElementById("QVFinance3").style.visibility = "visible";
    document.getElementById("QVFinance4").style.visibility = "visible";
    document.getElementById("QVService1").style.visibility = "hidden";
    document.getElementById("QVService2").style.visibility = "hidden";
    document.getElementById("QVService3").style.visibility = "hidden";
    document.getElementById("QVService4").style.visibility = "hidden";
    document.getElementById("QVFreeMoney1").style.visibility = "hidden";
    document.getElementById("QVFreeMoney2").style.visibility = "hidden";
    document.getElementById("QVFreeMoney3").style.visibility = "hidden";
    document.getElementById("QVFreeMoney4").style.visibility = "hidden";
}

function handleChangeService() {
    zijingBtn = "QVService"
    console.log("handleChangeService-", zijingBtn)
        //显示
    document.getElementById("BtnService").classList.add("active");
    document.getElementById("BtnFinance").classList.remove("active");
    document.getElementById("BtnFreeMoney").classList.remove("active");
    //content显示Service1~4 
    document.getElementById("QVService1").style.visibility = "visible";
    document.getElementById("QVService2").style.visibility = "visible";
    document.getElementById("QVService3").style.visibility = "visible";
    document.getElementById("QVService4").style.visibility = "visible";
    //隐藏
    document.getElementById("QVFinance1").style.visibility = "hidden";
    document.getElementById("QVFinance2").style.visibility = "hidden";
    document.getElementById("QVFinance3").style.visibility = "hidden";
    document.getElementById("QVFinance4").style.visibility = "hidden";
    document.getElementById("QVFreeMoney1").style.visibility = "hidden";
    document.getElementById("QVFreeMoney2").style.visibility = "hidden";
    document.getElementById("QVFreeMoney3").style.visibility = "hidden";
    document.getElementById("QVFreeMoney4").style.visibility = "hidden";
}

function handleChangeFreeMoney() {
    zijingBtn = "QVFreeMoney";
    console.log("handleChangeFreeMoney-", zijingBtn)

    document.getElementById("BtnFreeMoney").classList.add("active");
    document.getElementById("BtnService").classList.remove("active");
    document.getElementById("BtnFinance").classList.remove("active");
    //content显示QVFreeMoney1~4
    document.getElementById("QVFreeMoney1").style.visibility = "visible";
    document.getElementById("QVFreeMoney2").style.visibility = "visible";
    document.getElementById("QVFreeMoney3").style.visibility = "visible";
    document.getElementById("QVFreeMoney4").style.visibility = "visible";
    //隐藏
    document.getElementById("QVFinance1").style.visibility = "hidden";
    document.getElementById("QVFinance2").style.visibility = "hidden";
    document.getElementById("QVFinance3").style.visibility = "hidden";
    document.getElementById("QVFinance4").style.visibility = "hidden";
    document.getElementById("QVService1").style.visibility = "hidden";
    document.getElementById("QVService2").style.visibility = "hidden";
    document.getElementById("QVService3").style.visibility = "hidden";
    document.getElementById("QVService4").style.visibility = "hidden";
}

function handleToOpenSizer(index) {
    //console.log("index----", index)

    document.getElementById("sizerPage").style.visibility = "visible";
}

function handleToCloseSizer(index) {
    //console.log("index-----", index);
    document.getElementById("sizerPage").style.visibility = "hidden";
}

function handleCleanAllSize() {}