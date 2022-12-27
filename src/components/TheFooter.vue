<template>
	<footer class="relative flex min-h-[70px] p-1 text-sm font-light leading-5 bg-blue shadow-2xl shadow-black">
		<div class="m-auto lg:[&>br]:hidden max-lg:[&>span]:hidden">
			© Copyright 2023 DZ-Helper
			<br>
			&nbsp;<span>|</span>&nbsp;
			<AppLink to="https://vk.com/dzhelper1" target="_blank" rel="nofollow">Группа ВКонтакте</AppLink>
			&nbsp;<span>|</span>&nbsp;
			<br>
			<AppLink :to="Link.Privacy">Политика конфиденциальности</AppLink>
		</div>
	</footer>
</template>

<script setup lang="ts">
import AppLink from '@/components/AppLink.vue'
import { Link } from '@/utils/link'
</script>