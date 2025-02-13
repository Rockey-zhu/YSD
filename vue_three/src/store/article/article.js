import { getArt, postNewArt, postUpdataArt, postRemoveArt } from "@/api/articles";

export default {
    state: {
        isselect: false, //是否刷新
        ListAllData: [],
        ListData: [],
        selectionList: [], // 当前选择的结果
        dataCount: 0, // 总条数
        pageSize: 10, // 每页显示多少条
        pageCurrent: 1, // 当前显示第几页
        pageShowsizer: true,
        pageShowTotal: true,
        pageShowElevator: true,
        pageSizeOpts: [5, 10, 20, 30, 40],
    },
    getters: {

    },
    actions: {
        getArtData({ commit, state }) {
            if (state.dataCount > 0 && !state.isselect) {
                commit('setArticle', {
                    ListData: state.ListAllData.slice(
                        (state.pageCurrent * state.pageSize) - state.pageSize, state.pageCurrent * state.pageSize
                    )
                })
                return 200;
            } else {
                getArt().then((res) => {
                    if (res.data.data.records.length > 0) {
                        commit('setArticle', {
                            ListAllData: res.data.data.records.reverse(),
                            dataCount: res.data.data.records.length,
                            pageCurrent: state.pageCurrent > 1 ? state.pageCurrent - 1 : 1
                        })
                    } else if (res.data.data.records.length === 0) {
                        commit('setArticle', {
                            ListAllData: [],
                            ListData: [],
                            dataCount: res.data.data.length,
                            pageCurrent: state.pageCurrent > 1 ? state.pageCurrent - 1 : 1
                        })
                    }
                }).then(() => {
                    if (state.dataCount > 0) {
                        commit('setArticle', {
                            ListData: state.ListAllData.slice(
                                (state.pageCurrent * state.pageSize) - state.pageSize, state.pageCurrent * state.pageSize
                            ),
                        })
                    }
                    return 200;
                    //console.log("----ListData---------", state.ListData)
                })
            }
        },
    },
    mutations: {
        setArticle(
            state, {
                isselect,
                ListAllData,
                ListData,
                dataCount,
                pageSize,
                pageCurrent,
            },
        ) {
            if (isselect != undefined)
                state.isselect = isselect;
            if (ListAllData != undefined)
                state.ListAllData = ListAllData;
            if (ListData != undefined)
                state.ListData = ListData;
            if (dataCount != undefined)
                state.dataCount = dataCount;
            if (pageSize != undefined)
                state.pageSize = pageSize;
            if (pageCurrent != undefined)
                state.pageCurrent = pageCurrent;

        }
    }

}