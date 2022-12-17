import type { InjectionKey } from 'vue'
import type { Store } from 'vuex'
import { createStore, useStore as _useStore } from 'vuex'
import { deleteCookie, getCookie } from '@/utils/cookie'

interface State {
	key?: string
	name?: string
	refLink?: string
}

export enum Mutation {
	Login = 'login',
	Logout = 'logout'
}

export const injectionKey: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
	getters: {
		isLoggedIn: state => !!state.key,
	},
	mutations: {
		[Mutation.Login](state) {
			state.key = getCookie('userid')
			state.name = getCookie('username')
			state.refLink = getCookie('reflink')
		},
		[Mutation.Logout](state) {
			state.key = undefined
			deleteCookie('userid')
		},
	},
})

export const useStore = () => _useStore(injectionKey)
