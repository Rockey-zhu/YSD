import Vue from 'vue'
import Vuex from 'vuex'
import login from './login/login.js'
import user from './user/user.js'
import article from './article/article.js'
import community from './community/community.js'
import check from './check/check.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        login,
        user,
        article,
        community,
        check
    }
})