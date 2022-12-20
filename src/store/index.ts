import type { InjectionKey } from 'vue'
import type { Store } from 'vuex'
import { createStore, useStore as _useStore } from 'vuex'
import { deleteCookie, getCookie } from '@/utils/cookie'

interface State {
	key?: string
	name?: string
	vkId?: string
	refLink?: string
	isLoaderShowed: boolean
}

export const enum Mutation {
	Login = 'login',
	Logout = 'logout',
	ShowLoader = 'showLoader',
	HideLoader = 'hideLoader'
}

export const injectionKey: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
	state: () => ({
		key: getCookie('userid'),
		isLoaderShowed: true,
	}),
	getters: {
		isLoggedIn: state => !!state.key,
	},
	mutations: {
		[Mutation.Login](state) {
			state.key = getCookie('userid')
			state.name = getCookie('username')
			state.vkId = getCookie('vklogin')
			state.refLink = getCookie('reflink')
		},
		[Mutation.Logout](state) {
			state.key = undefined
			deleteCookie('userid')
		},
		[Mutation.ShowLoader](state) {
			state.isLoaderShowed = true
		},
		[Mutation.HideLoader](state) {
			state.isLoaderShowed = false
		},
	},
})

export const useStore = () => _useStore(injectionKey)
