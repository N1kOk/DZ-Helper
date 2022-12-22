<template>
	<div class="flex flex-col min-h-screen overflow-hidden">
		<TheHeader/>
		<main class="flex flex-col flex-1 bg-[#2684b1]">
			<RouterView/>
		</main>
		<TheFooter/>
	</div>

	<TheLoader/>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheLoader from '@/components/TheLoader.vue'
import { Mutation, useStore } from '@/store'
import { correctUrl, getCorrectUrl, Link } from '@/utils/link'
import { nextTick, onMounted, watch } from 'vue'
import router from '@/router'
import { get, Toast } from '@/utils/helpers'
import Swal from 'sweetalert2'
import { getLocalStorageItem } from '@/utils/localStorage'

const store = useStore()

onMounted(() => {
	if (location.hash === '#auth=success') {
		store.commit(Mutation.Login)
		Toast.fire({ icon: 'success', text: 'Авторизация прошла успешно' })
	}
})

watch(() => store.getters.isLoggedIn,
	() => {
		const path = getCorrectUrl(router.currentRoute.value.path)
		const pagesRequiredAuth = router.options.routes.filter(value => value.meta?.isRequiredAuth)

		for (const page of pagesRequiredAuth) {
			if (path === page.path) {
				router.push({ path: Link.Login, query: { redirect: router.currentRoute.value.fullPath } })
				return
			}
		}
	})

router.beforeEach((to, _, next) => {
	if (to.meta.isRequiredAuth && !store.getters.isLoggedIn) {
		return next({
			path: Link.Login,
			query: { redirect: to.fullPath },
		})
	}

	return next()
})

router.beforeEach(correctUrl)

router.afterEach(async (to) => {
	await nextTick()

	const { keywords, description, title } = to.meta
	document.title = title
	document.head.querySelector('meta[name="keywords"]')!.setAttribute('content', keywords || '')
	document.head.querySelector('meta[name="description"]')!.setAttribute('content', description || '')

	if (getLocalStorageItem('accountType'))
		await fetchBonus()
})

async function fetchBonus() {
	const res = await get('/db/users/bonus/bonus.php')

	if (res.startsWith('left')) {
		const minutes = parseInt(res.split(':')[1])
		await Toast.fire({ icon: 'info', text: `До бонуса ${minutes} мин.` })
	} else if (res.startsWith('ok')) {
		const bonus = parseInt(res.split(':')[1])
		await Swal.fire('Бонус', `Вам начислен ежедневный бонус в размере ${bonus} коинов!`, 'success')
	}
}
</script>
