import { watch } from 'vue'
import { getCorrectUrl, Link } from '@/utils/link'
import router from '@/router'
import { store } from '@/store'

router.beforeEach((to, _, next) => {
	if (to.meta.isRequiredAuth && !store.getters.isLoggedIn) {
		return next({
			path: Link.Login,
			query: { redirect: to.fullPath },
		})
	}
	
	return next()
})

watch(() => store.getters.isLoggedIn, () => {
	const path = getCorrectUrl(router.currentRoute.value.path)
	const pagesRequiredAuth = router.options.routes.filter(value => value.meta?.isRequiredAuth)
	
	for (const page of pagesRequiredAuth) {
		if (path === page.path) {
			return router.push({ path: Link.Login, query: { redirect: router.currentRoute.value.fullPath } })
		}
	}
})
