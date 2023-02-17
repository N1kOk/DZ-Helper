import { setCookie } from '@/utils/cookie'
import { parseQuery } from 'vue-router'
import { Mutation, store } from '@/store'
import { Link } from '@/utils/link'
import { Toast } from '@/utils/helpers'

document.addEventListener('DOMContentLoaded', () => {
	if (location.hash === '#auth=success') {
		store.commit(Mutation.Login)
		Toast.fire({ icon: 'success', title: 'Авторизация прошла успешно' }).then()
	}
})

export const login = () => {
	const { redirect } = <{ redirect?: string }>parseQuery(location.search)
	
	setCookie('cururl', redirect || location.href)
	
	location.assign(Link.LoginVK)
}

export const logout = () => {
	store.commit(Mutation.Logout)
}
