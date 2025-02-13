//查询视窗滚动条位置
function getScrollOffsets(w) {
    w = w|| window;
    if(w.pageXOffset != null) return {x:w.pageXOffset, y : w.pageYOffset};

    let d = w.document;
    if(document.compatMode === "CSS1Compat")
        return {x:d.documentElement.scrollLeft, y : d.documentElement.scrollTop};

    return {x:d.body.scrollLeft,y:d.body.scrollTop}
}