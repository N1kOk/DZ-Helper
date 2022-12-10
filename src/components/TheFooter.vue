<template>
	<footer class="relative flex p-1 bg-blue min-h-[70px] text-xs leading-5 font-light shadow-2xl shadow-black z-50">
		<div class="m-auto lg:[&>br]:hidden max-lg:[&>span]:hidden">
			© Copyright 2023 DZ-Helper
			<br>
			&nbsp;<span>|</span>&nbsp;
			<a href="#" target="_blank" rel="nofollow">Группа ВКонтакте</a>
			&nbsp;<span>|</span>&nbsp;
			<br>
			<AppLink to="/privacy.html" rel="nofollow">Политика конфиденциальности</AppLink>
		</div>
	</footer>
</template>

<script setup lang="ts">
import AppLink from '@/components/AppLink.vue'
</script>