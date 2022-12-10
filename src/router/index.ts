import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'

import 'vue-router'

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
			path: '/',
			component: () => import('@/views/IndexView.vue'),
			meta: {
				title: 'Автоматизированное решение домашнего задания',
			},
		},
		{
			path: '/login.html',
			component: () => import('@/views/LoginView.vue'),
			meta: {
				title: 'Авторизация',
			},
		},
		{
			path: '/webgramotei.html',
			component: () => import('@/views/extensions/WebGramoteiView.vue'),
			meta: {
				title: 'Автоматизированное решение ВебГрамотей 2022',
			},
		},
		{
			path: '/download.html',
			component: () => import('@/views/DownloadView.vue'),
			meta: {
				title: 'Сервисы автоматизированного решения ДЗ',
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

// router.beforeEach((to, from) => {
// 	if (to.meta.requiresAuth && !auth.isLoggedIn) {
// 		return {
// 			path: '/login',
// 			query: { redirect: to.fullPath },
// 		}
// 	}
// })

router.afterEach((to) => {
	nextTick(() => {
		document.title = to.meta.title
	}).then()
})

export default router
