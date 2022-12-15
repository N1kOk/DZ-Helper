import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'
import { correctUrl, getCorrectUrl, Link } from '@/utils/link'

declare module 'vue-router' {
	interface RouteMeta {
		title: string
		requiresAuth?: boolean
	}
}

// TODO Rename titles
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: getCorrectUrl(Link.Index),
			component: () => import('@/views/IndexView.vue'),
			meta: {
				title: 'Автоматизированное решение домашнего задания',
			},
		},
		{
			path: getCorrectUrl(Link.Stock),
			component: () => import('@/views/StockView.vue'),
			meta: {
				title: 'Акции',
			},
		},
		{
			path: getCorrectUrl(Link.Login),
			component: () => import('@/views/LoginView.vue'),
			meta: {
				title: 'Авторизация',
			},
		},
		{
			path: getCorrectUrl(Link.Download),
			component: () => import('@/views/DownloadView.vue'),
			meta: {
				title: 'Сервисы автоматизированного решения ДЗ',
			},
		},
		{
			path: getCorrectUrl(Link.Webgramotei),
			component: () => import('@/views/extensions/WebGramoteiView.vue'),
			meta: {
				title: 'Автоматизированное решение ВебГрамотей 2022',
			},
		},
		{
			path: '/:pathMatch(.*)*',
			component: () => import('@/views/404View.vue'),
			meta: {
				title: 'Страница не найдена',
			},
		},
	],
})


router.beforeEach((to) => {
	return correctUrl(to)

// 	if (to.meta.requiresAuth && !auth.isLoggedIn) {
// 		return {
// 			path: '/login',
// 			query: { redirect: to.fullPath },
// 		}
// 	}
})

router.afterEach((to) => {
	nextTick(() => {
		document.title = to.meta.title
	}).then()
})

export default router
