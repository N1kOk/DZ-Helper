import { setCookie } from '@/utils/cookie'
import { Mutation, store } from '@/store'
import { parseQuery } from 'vue-router'

export const login = () => {
	const { redirect } = <{ redirect?: string }>parseQuery(location.search)
	
	setCookie('userid', 123) // TODO
	setCookie('cururl', redirect || location.href)
	store.commit(Mutation.Login)
	// location.assign(Link.LoginVK) // TODO
}

export const logout = () => {
	store.commit(Mutation.Logout)
}
