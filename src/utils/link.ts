import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { isDev } from '@/utils/helpers'

export enum Link {
	Index = '/',
	Ref = '/ref.html',
	Buy = '/buy.html',
	User = '/user.html',
	Stock = '/stock.html',
	Success = '/success.html',
	Login = '/login.html',
	LoginVK = '/vklogin.php',
	Privacy = '/privacy.html',
	Download = '/download.html',
	Resh = '/resh.html',
	Uchiru = '/uchiru.html',
	UzTest = '/uztest.html',
	ReshuEGE = '/reshu.html',
	Yaklass = '/yaklass.html',
	Webgramotei = '/webgramotei.html',
}

export const getCorrectUrl = (url: string) =>
	isDev
		? url.replace(/\.html$/i, '')
		: url

let lastUrl = ''
export function correctUrl(to: RouteLocationNormalized, _: RouteLocationNormalized, next: NavigationGuardNext) {
	if (lastUrl !== to.fullPath) {
		lastUrl = to.fullPath
		
		for (const link of Object.values(Link))
			if (link === to.path)
				return next({ path: getCorrectUrl(link), query: to.query })
	}
	
	return next()
}