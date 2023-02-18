import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router/routes'
import { correctUrl } from '@/utils/link'

interface Meta {
	title: string
	description?: string
	keywords?: string
	isRequiredAuth?: boolean
}

declare module 'vue-router' {
	// noinspection JSUnusedGlobalSymbols
	interface RouteMeta extends Meta {}
}

const router = createRouter({
	routes,
	history: createWebHistory(import.meta.env.BASE_URL),
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition)
			return savedPosition
		else
			return { top: 0 }
	},
})

router.beforeEach(correctUrl)

export default router
