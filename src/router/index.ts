import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router/routes'

interface Meta {
	title: string
	description?: string
	keywords?: string
	isRequiredAuth?: boolean
}

declare module 'vue-router' {
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

export default router
