(n = document.getElementById("Luckyexcel-demo-file")) && (window.onload = function() {
	n.addEventListener("change", function(e) {
		var t, r = e.target.files;
		null != r && 0 != r.length ? "xlsx" == (t = r[0].name.split("."))[t.length - 1] ? i.transformExcelToLucky(r[0],
			function(e, t) {
				null != e.sheets && 0 != e.sheets.length ? (console.log(e, t), window.luckysheet.destroy(), window.luckysheet.create({
					container: "luckysheet",
					showinfobar: !1,
					data: e.sheets,
					title: e.info.name,
					userInfo: e.info.name.creator
				})) : alert("Failed to read the content of the excel file, currently does not support xls files!")
			}) : alert("Currently only supports the import of xlsx files") : alert("No files wait for import")
	})
})
