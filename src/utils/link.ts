import type { RouteLocationNormalized } from 'vue-router'

export enum Link {
	Index = '/',
	Ref = '/ref.html',
	Buy = '/buy.html',
	User = '/user.html', // TODO Rename to /user.php
	Stock = '/stock.html',
	Success = '/success.html',
	Login = '/login.html',
	LoginVK = '/vklogin.php', // TODO Component
	Privacy = '/privacy.html',
	Download = '/download.html',
	Resh = '/resh.html',
	Uchiru = '/uchiru.html',
	UzTest = '/uztest.html',
	ReshuEGE = '/reshu.html',
	Yaklass = '/yaklass.html',
	Webgramotei = '/webgramotei.html',
}

export const isDev = location.hostname === '127.0.0.1'

export const getCorrectUrl = (url: string) =>
	isDev
		? url.replace(/\.html$/i, '')
		: url

let lastUrl = ''
export function correctUrl(to: RouteLocationNormalized) {
	if (lastUrl !== to.fullPath) {
		lastUrl = to.fullPath
		
		for (const link of Object.values(Link))
			if (link === to.path)
				return { path: getCorrectUrl(link), query: to.query }
	}
}