import Vue from 'vue'
import Vuex from 'vuex'
import login from './login'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isLogin: false
	},
	mutations: {
		updataLoginState(state, { isLogin }) {
			state.isLogin = isLogin
		}
	},
	actions: {
		logout({ commit }) {
			window.sessionStorage.removeItem('user')
			commit('updataLoginState', { isLogin: false })
		},
		logOk({ commit }) {
			const data = { isLogin: true }
			window.sessionStorage.setItem('user', data.isLogin)
			commit('updataLoginState', data)
		}
	},
	modules: {
		login
	}
})
