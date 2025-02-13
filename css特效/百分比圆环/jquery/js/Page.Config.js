var PageConfig = {
    // userInfo
    UserInfo: {
        exp: `$(vLoginUser)`
    },
    PageList: [{ //Sales
            AppId: "a7b5ca8c-d33b-4b26-abc7-3355d21ef417",
            qsAppId: "",
            qstAppId: "553b647f-b1ae-493d-acf4-230cd95eba44",
            // 报表更新时间
            ReportUpdateTime: {
                exp: `$(vReportUpdateTime)`
            },
            Title: "",
            SubTitle: "",
            ItemList: [{ //销售金额--经销商扫描金额--零售店扫描金额
                AppId: "", // AppID为空 就使用页面的AppId
                qsAppId: "",
                qstAppId: "",
                Title: "",
                SubTitle: "",
                ItemType: "ChartObj", //  // MapObj 自定义
                QVID: "QV01",
                Expstr: "", //[顾问提供] 
                ObjId: "msqPzY" //[顾问提供]
            }, { //销售金额占比
                AppId: "",
                qsAppId: "",
                qstAppId: "",
                Title: "",
                SubTitle: "",
                ItemType: "KpiExp",
                QVID: "vReportUpdateTime",
                Expstr: "$(vReportUpdateTime)",
                ObjId: ""
            }, { //KPI趋势分析图片
                AppId: "",
                qsAppId: "",
                qstAppId: "",
                Title: "",
                SubTitle: "",
                ItemType: "KpiExp",
                QVID: "vLoginUser",
                Expstr: "$(vLoginUser)",
                ObjId: ""
            }, { //KPI同比趋势分析图片
                AppId: "",
                qsAppId: "",
                qstAppId: "",
                Title: "",
                SubTitle: "",
                ItemType: "KpiExp",
                QVID: "vLoginUser",
                Expstr: "$(vLoginUser)",
                ObjId: ""
            }, { //区域销售
                AppId: "",
                qsAppId: "",
                qstAppId: "",
                Title: "",
                SubTitle: "",
                ItemType: "ChartObj",
                QVID: "QVAreaMap",
                Expstr: "",
                ObjId: "YPsBvH"
            }, { //经销商扫描分析
                AppId: "",
                qsAppId: "",
                qstAppId: "",
                Title: "",
                SubTitle: "",
                ItemType: "KpiExp",
                QVID: "vLoginUser",
                Expstr: "$(vLoginUser)",
                ObjId: ""
            }, { //零售店与农户
                AppId: "",
                qsAppId: "",
                qstAppId: "",
                Title: "",
                SubTitle: "",
                ItemType: "KpiExp",
                QVID: "vLoginUser",
                Expstr: "$(vLoginUser)",
                ObjId: ""
            }, ]
        },
        { //finance---损益profitLoss
            AppId: "a7b5ca8c-d33b-4b26-abc7-3355d21ef417",
            qsAppId: "",
            qstAppId: "553b647f-b1ae-493d-acf4-230cd95eba44",
            // 报表更新时间
            ReportUpdateTime: {
                exp: `$(vReportUpdateTime)`
            },
            Title: "",
            SubTitle: "",
            ItemList: [{ //筛选器-dateVersion
                    AppId: "",
                    qsAppId: "",
                    qstAppId: "",
                    Title: "",
                    SubTitle: "",
                    ItemType: "ChartObj",
                    QVID: "QVDataVersion",
                    Expstr: "", //[顾问提供] 
                    ObjId: "pkDkaP" //[顾问提供]
                }, { //筛选器-Year
                    AppId: "",
                    qsAppId: "",
                    qstAppId: "",
                    Title: "",
                    SubTitle: "",
                    ItemType: "ChartObj",
                    QVID: "QVYear",
                    Expstr: "", //[顾问提供] 
                    ObjId: "TLJmA" //[顾问提供]
                }, { //筛选器-Month
                    AppId: "",
                    qsAppId: "",
                    qstAppId: "",
                    Title: "",
                    SubTitle: "",
                    ItemType: "ChartObj",
                    QVID: "QVMonth",
                    Expstr: "", //[顾问提供] 
                    ObjId: "hZPEvkW" //[顾问提供]
                },
                { //sales vs budget
                    AppId: "",
                    qsAppId: "",
                    qstAppId: "",
                    Title: "",
                    SubTitle: "",
                    ItemType: "ChartObj",
                    QVID: "QVSvB",
                    Expstr: "", //[顾问提供] 
                    ObjId: "ChftDns" //[顾问提供]
                }, { //Gross profit vs budget
                    AppId: "",
                    qsAppId: "",
                    qstAppId: "",
                    Title: "",
                    SubTitle: "",
                    ItemType: "ChartObj",
                    QVID: "QVGpvB",
                    Expstr: "", //[顾问提供] 
                    ObjId: "pJbuxJr" //[顾问提供]
                }, { //EBITDA vs Budget
                    AppId: "",
                    qsAppId: "",
                    qstAppId: "",
                    Title: "",
                    SubTitle: "",
                    ItemType: "ChartObj",
                    QVID: "QVEvB",
                    Expstr: "", //[顾问提供] 
                    ObjId: "gmGCWS" //[顾问提供]
                }, { //Gross profit%
                    AppId: "",
                    qsAppId: "",
                    qstAppId: "",
                    Title: "",
                    SubTitle: "",
                    ItemType: "ChartObj",
                    QVID: "QVGp",
                    Expstr: "", //[顾问提供] 
                    ObjId: "HrDZP" //[顾问提供]
                }, { //EBITDA%
                    AppId: "",
                    qsAppId: "",
                    qstAppId: "",
                    Title: "",
                    SubTitle: "",
                    ItemType: "ChartObj",
                    QVID: "QVEBITDA",
                    Expstr: "", //[顾问提供] 
                    ObjId: "hGMFJ" //[顾问提供]
                }, { //Sales 排名
                    AppId: "",
                    qsAppId: "",
                    qstAppId: "",
                    Title: "",
                    SubTitle: "",
                    ItemType: "ChartObj",
                    QVID: "QVSales02",
                    Expstr: "", //[顾问提供] 
                    ObjId: "NxPmyPV" //[顾问提供]
                }, { //Sales1
                    AppId: "",
                    qsAppId: "",
                    qstAppId: "",
                    Title: "",
                    SubTitle: "",
                    ItemType: "ChartObj",
                    QVID: "QVGp021",
                    Expstr: "", //[顾问提供] 
                    ObjId: "JjHRch" //[顾问提供]
                }, { //Sales2
                    AppId: "",
                    qsAppId: "",
                    qstAppId: "",
                    Title: "",
                    SubTitle: "",
                    ItemType: "ChartObj",
                    QVID: "QVGp022",
                    Expstr: "", //[顾问提供] 
                    ObjId: "dZgGZ" //[顾问提供]
                }, { //Sales3
                    AppId: "",
                    qsAppId: "",
                    qstAppId: "",
                    Title: "",
                    SubTitle: "",
                    ItemType: "ChartObj",
                    QVID: "QVGp023",
                    Expstr: "", //[顾问提供] 
                    ObjId: "reWvW" //[顾问提供]
                }, { //EBITDA 排名
                    AppId: "",
                    qsAppId: "",
                    qstAppId: "",
                    Title: "",
                    SubTitle: "",
                    ItemType: "ChartObj",
                    QVID: "QVEBITDA02",
                    Expstr: "", //[顾问提供] 
                    ObjId: "gsGJg" //[顾问提供]
                }, { //趋势分析图-Gross profit%
                    AppId: "",
                    qsAppId: "",
                    qstAppId: "",
                    Title: "",
                    SubTitle: "",
                    ItemType: "ChartObj",
                    QVID: "QVGp%02",
                    Expstr: "", //[顾问提供] 
                    ObjId: "vWzJWje" //[顾问提供]
                }, { //趋势分析图-EBITDA
                    AppId: "",
                    qsAppId: "",
                    qstAppId: "",
                    Title: "",
                    SubTitle: "",
                    ItemType: "ChartObj",
                    QVID: "QVEBITDA%02",
                    Expstr: "", //[顾问提供] 
                    ObjId: "pmwJwK" //[顾问提供]
                }, { //Sales 占比
                    AppId: "",
                    qsAppId: "",
                    qstAppId: "",
                    Title: "",
                    SubTitle: "",
                    ItemType: "ChartObj",
                    QVID: "QVSales03",
                    Expstr: "", //[顾问提供] 
                    ObjId: "cxNHb" //[顾问提供]
                }, { //Gross profit 占比
                    AppId: "",
                    qsAppId: "",
                    qstAppId: "",
                    Title: "",
                    SubTitle: "",
                    ItemType: "ChartObj",
                    QVID: "QVGp03",
                    Expstr: "", //[顾问提供] 
                    ObjId: "xNHeaRF" //[顾问提供]
                }, { //EBITDA 占比
                    AppId: "",
                    qsAppId: "",
                    qstAppId: "",
                    Title: "",
                    SubTitle: "",
                    ItemType: "ChartObj",
                    QVID: "QVEBITDA03",
                    Expstr: "", //[顾问提供] 
                    ObjId: "vftWJj" //[顾问提供]
                }, { //CBU(销售/毛利/EBITDA%)
                    AppId: "",
                    qsAppId: "",
                    qstAppId: "",
                    Title: "",
                    SubTitle: "",
                    ItemType: "ChartObj",
                    QVID: "QVCBU03",
                    Expstr: "", //[顾问提供] 
                    ObjId: "wqFpuSD" //[顾问提供]
                },{ //ces
                    AppId: "10a84981-dd85-49ff-bcd0-b7b23685d01e",
                    qsAppId: "",
                    qstAppId: "",
                    Title: "",
                    SubTitle: "",
                    ItemType: "ChartObj",
                    QVID: "ceID03",
                    Expstr: `$(vKPI_今年扫描金额)` , //[顾问提供] 
                    ObjId: "",//[顾问提供]
                },
            ]
        },
        { //finance---资金cashFlow
            AppId: "a7b5ca8c-d33b-4b26-abc7-3355d21ef417",
            qsAppId: "",
            qstAppId: "553b647f-b1ae-493d-acf4-230cd95eba44",
            // 报表更新时间
            ReportUpdateTime: {
                exp: `$(vReportUpdateTime)`
            },
            Title: "",
            SubTitle: "",
            ItemList: [{ //cp
                AppId: "",
                qsAppId: "",
                qstAppId: "",
                Title: "",
                SubTitle: "",
                ItemType: "ChartObj",
                QVID: "QVCP",
                Expstr: "", //[顾问提供] 
                ObjId: "EFCx" //[顾问提供]
            }, { //cn
                AppId: "",
                qsAppId: "",
                qstAppId: "",
                Title: "",
                SubTitle: "",
                ItemType: "ChartObj",
                QVID: "QVCN",
                Expstr: "", //[顾问提供] 
                ObjId: "SUWLpH" //[顾问提供]
            }, { //Seed
                AppId: "",
                qsAppId: "",
                qstAppId: "",
                Title: "",
                SubTitle: "",
                ItemType: "ChartObj",
                QVID: "QVSeed",
                Expstr: "", //[顾问提供] 
                ObjId: "agAD" //[顾问提供]
            }, { //MAP
                AppId: "",
                qsAppId: "",
                qstAppId: "",
                Title: "",
                SubTitle: "",
                ItemType: "ChartObj",
                QVID: "QVMAP",
                Expstr: "", //[顾问提供] 
                ObjId: "tYqmYq" //[顾问提供]
            }, { //趋势分析1-财务费用
                AppId: "",
                qsAppId: "",
                qstAppId: "",
                Title: "",
                SubTitle: "",
                ItemType: "ChartObj",
                QVID: "QVFinance1",
                Expstr: "", //[顾问提供] 
                ObjId: "JFWnFPy" //[顾问提供]
            }, { //趋势分析2-财务费用
                AppId: "",
                qsAppId: "",
                qstAppId: "",
                Title: "",
                SubTitle: "",
                ItemType: "ChartObj",
                QVID: "QVFinance2",
                Expstr: "", //[顾问提供] 
                ObjId: "tHFjPk" //[顾问提供]
            }, { //趋势分析3-财务费用
                AppId: "",
                qsAppId: "",
                qstAppId: "",
                Title: "",
                SubTitle: "",
                ItemType: "ChartObj",
                QVID: "QVFinance3",
                Expstr: "", //[顾问提供] 
                ObjId: "sEBWaKy" //[顾问提供]
            }, { //趋势分析4-财务费用
                AppId: "",
                qsAppId: "",
                qstAppId: "",
                Title: "",
                SubTitle: "",
                ItemType: "ChartObj",
                QVID: "QVFinance4",
                Expstr: "", //[顾问提供] 
                ObjId: "JubaTU" //[顾问提供]
            }, { //趋势分析1-营运资金
                AppId: "",
                qsAppId: "",
                qstAppId: "",
                Title: "",
                SubTitle: "",
                ItemType: "ChartObj",
                QVID: "QVService1",
                Expstr: "", //[顾问提供] 
                ObjId: "yzxTT" //[顾问提供]
            }, { //趋势分析2-营运资金
                AppId: "",
                qsAppId: "",
                qstAppId: "",
                Title: "",
                SubTitle: "",
                ItemType: "ChartObj",
                QVID: "QVService2",
                Expstr: "", //[顾问提供] 
                ObjId: "sJFvbLr" //[顾问提供]
            }, { //趋势分析3-营运资金
                AppId: "",
                qsAppId: "",
                qstAppId: "",
                Title: "",
                SubTitle: "",
                ItemType: "ChartObj",
                QVID: "QVService3",
                Expstr: "", //[顾问提供] 
                ObjId: "HRNjEA" //[顾问提供]
            }, { //趋势分析4-营运资金
                AppId: "",
                qsAppId: "",
                qstAppId: "",
                Title: "",
                SubTitle: "",
                ItemType: "ChartObj",
                QVID: "QVService4",
                Expstr: "", //[顾问提供] 
                ObjId: "GwmcBX" //[顾问提供]
            }, { //趋势分析1-自由现金流
                AppId: "",
                qsAppId: "",
                qstAppId: "",
                Title: "",
                SubTitle: "",
                ItemType: "ChartObj",
                QVID: "QVFreeMoney1",
                Expstr: "", //[顾问提供] 
                ObjId: "mbgGyQ" //[顾问提供]
            }, { //趋势分析2-自由现金流
                AppId: "",
                qsAppId: "",
                qstAppId: "",
                Title: "",
                SubTitle: "",
                ItemType: "ChartObj",
                QVID: "QVFreeMoney2",
                Expstr: "", //[顾问提供] 
                ObjId: "cUemNL" //[顾问提供]
            }, { //趋势分析3-自由现金流
                AppId: "",
                qsAppId: "",
                qstAppId: "",
                Title: "",
                SubTitle: "",
                ItemType: "ChartObj",
                QVID: "QVFreeMoney3",
                Expstr: "", //[顾问提供] 
                ObjId: "UWxUdZ" //[顾问提供]
            }, { //趋势分析4-自由现金流
                AppId: "",
                qsAppId: "",
                qstAppId: "",
                Title: "",
                SubTitle: "",
                ItemType: "ChartObj",
                QVID: "QVFreeMoney4",
                Expstr: "", //[顾问提供] 
                ObjId: "Wcphfk" //[顾问提供]
            }, { //柱状图筛选器
                AppId: "",
                qsAppId: "",
                qstAppId: "",
                Title: "",
                SubTitle: "",
                ItemType: "ChartObj",
                QVID: "barFiter",
                Expstr: "", //[顾问提供] 
                ObjId: "KTBjJVs" //[顾问提供]
            }, { //财务费用实际
                AppId: "",
                qsAppId: "",
                qstAppId: "",
                Title: "",
                SubTitle: "",
                ItemType: "ChartObj",
                QVID: "QVPie1",
                Expstr: "", //[顾问提供] 
                ObjId: "kLUVt" //[顾问提供]
            }, { //营运资金
                AppId: "",
                qsAppId: "",
                qstAppId: "",
                Title: "",
                SubTitle: "",
                ItemType: "ChartObj",
                QVID: "QVPie2",
                Expstr: "", //[顾问提供] 
                ObjId: "KnYGFP" //[顾问提供]
            }, { //自由现金流
                AppId: "",
                qsAppId: "",
                qstAppId: "",
                Title: "",
                SubTitle: "",
                ItemType: "ChartObj",
                QVID: "QVPie3",
                Expstr: "", //[顾问提供] 
                ObjId: "wFTmT" //[顾问提供]
            }, ]
        },

    ],
    // // 传递参数
    // map_level_parameter_qHyperCubeDef: {
    //     qStringExpression: `If(Count(distinct [零售店编号])=1,'level=district&adcode='&MaxString(district),
    // If(Count(distinct district)=1,'level=district&adcode='&MaxString(district),
    //   If(Count(distinct city)=1 and not province_name like '*市' and not province_name like '*特别行政区','level=city&adcode='&MaxString(city),
    //   If(Count(distinct province)=1,'level=province&adcode='&MaxString(province)
    //   ))))`
    // }
}