<template>
	<div class="flex ">
		<div class="m-auto space-y-12">
			<span class="text-xl font-bold">Для просмотра этой страницы необходимо авторизоваться</span>
			<button class="btn" @click="redirectToAuth()">Авторизоваться через DZ-Helper</button>
		</div>
	</div>
</template>

<script setup lang="ts">
// import { parseQuery } from 'vue-router'
// import { auth } from '@/utils/auth'
// import router from '@/router'
//
// const { redirect, key, skip } = parseQuery(location.search) as { redirect?: string, key?: string, skip?: string }
//
// function redirectToAuth() {
// 	sessionStorage.setItem('redirect', redirect || '')
//
// 	location.assign('https://dz-helper.ru/dz-service/auth.html')
// }
//
// if (skip) redirectToAuth()
//
// if (key) {
// 	auth.key = key
//
// 	const redirect = sessionStorage.getItem('redirect')
// 	router.push(redirect || '/')
// }
</script>