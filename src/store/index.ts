import type { InjectionKey } from 'vue'
import type { Store } from 'vuex'
import { createStore, useStore as _useStore } from 'vuex'
import { getCookie } from '@/utils/cookie'
import { getLocalStorageItem, setLocalStorageItem } from '@/utils/localStorage'

interface State {
	key?: string | null
	name?: string | null
	vkId?: string | null
	refLink?: string | null
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
		key: getLocalStorageItem('key'),
		name: getLocalStorageItem('name'),
		vkId: getLocalStorageItem('vkId'),
		refLink: getLocalStorageItem('refLink'),
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
			
			setLocalStorageItem('key', state.key!)
			setLocalStorageItem('name', state.name!)
			setLocalStorageItem('vkId', state.vkId!)
			setLocalStorageItem('refLink', state.refLink!)
		},
		[Mutation.Logout](state) {
			state.key = undefined
			setLocalStorageItem('key', '')
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
