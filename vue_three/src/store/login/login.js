export default {
    state: {

        language: "English",
        confirmSuccess: false,
        user: JSON.parse(localStorage.getItem("user")) || {
            id: 1,
            name: '', //登录名
            template: '',
            nickName: '', //昵称
            avatarUrl: '', //头像url
            friends_ids: '', //好友id
            likeNum: 0, //收藏数
            like_user_ids: '', //喜欢的社区用户id
            like_friends_ids: '', //喜欢的好友id
            like_comment_ids: '', //喜欢的社区文章id
        }
    },
    getters: {

    },
    actions: {},
    mutations: {
        setLogin(
            state, {
                user,
                language,
                confirmSuccess
            },
        ) {
            if (user != undefined)
                state.user = user;
            if (language != undefined)
                state.language = language;
            if (confirmSuccess != undefined)
                state.confirmSuccess = confirmSuccess;

        }
    }

}