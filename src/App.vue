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
import { useStore } from '@/store'
import { correctUrl, getCorrectUrl, Link } from '@/utils/link'
import { nextTick, watch } from 'vue'
import router from '@/router'

const store = useStore()

watch(() => store.getters.isLoggedIn,
	() => {
		const path = getCorrectUrl(router.currentRoute.value.path)

		for (const link of [Link.Buy, Link.Ref, Link.User]) {
			if (path === getCorrectUrl(link)) {
				router.push({ path: Link.Login, query: { redirect: router.currentRoute.value.fullPath } })
				return
			}
		}
	})

router.beforeEach((to) => {
	if (to.meta.isRequiredAuth && !store.getters.isLoggedIn) {
		return {
			path: '/login',
			query: { redirect: to.fullPath },
		}
	}

	return correctUrl(to)
})

router.afterEach((to) => {
	nextTick(() => {
		const { keywords, description, title } = to.meta
		document.title = title
		document.head.querySelector('meta[name="keywords"]')!.setAttribute('content', keywords || '')
		document.head.querySelector('meta[name="description"]')!.setAttribute('content', description || '')
	}).then()
})
</script>