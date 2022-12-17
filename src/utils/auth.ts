import { setCookie } from '@/utils/cookie'
import { Mutation, store } from '@/store'

export const login = (redirect?: string) => {
	setCookie('userid', 123) // TODO
	setCookie('cururl', redirect || location.href)
	store.commit(Mutation.Login)
	// location.assign(Link.LoginVK) // TODO
}

export const logout = () => {
	store.commit(Mutation.Logout)
}
