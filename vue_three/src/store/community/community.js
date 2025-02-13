import { getCommunity, postNewArt, postUpdataArt, postRemoveArt } from "@/api/community";

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
        limit: 10
    },
    getters: {

    },
    actions: {
        getCommunityData({ commit, state }) {
            if (state.dataCount > 0 && !state.isselect) {
                commit('setCommunity', {
                    ListData: state.ListAllData.slice(
                        (state.pageCurrent * state.pageSize) - state.pageSize, state.pageCurrent * state.pageSize
                    )
                })
                return 200;
            } else {
                getCommunity(state.limit).then((res) => {
                    if (res.data.data.length > 0) {
                        commit('setCommunity', {
                            ListAllData: res.data.data,
                            dataCount: res.data.dataCount,
                            // pageCurrent: state.pageCurrent > 1 ? state.pageCurrent - 1 : 1
                        })
                    } else if (res.data.data.length === 0) {
                        commit('setCommunity', {
                            ListAllData: [],
                            ListData: [],
                            dataCount: 0,
                            pageCurrent: 1
                        })
                    }
                    console.log("2222222")
                }).then(() => {
                    if (state.dataCount > 0) {
                        commit('setCommunity', {
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
        setCommunity(
            state, {
                isselect,
                ListAllData,
                ListData,
                dataCount,
                pageSize,
                pageCurrent,
                limit
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
            if (limit != undefined)
                state.limit = limit;

        }
    }

}