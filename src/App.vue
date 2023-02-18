<template>
	<div class="flex flex-col min-h-screen overflow-hidden">
		<TheHeader/>
		<main class="relative flex flex-col flex-1">
			<IceBackground/>
			<RouterView/>
		</main>
		<TheFooter/>
		<TheSnowflakes/>
	</div>

	<TheLoader/>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheLoader from '@/components/TheLoader.vue'
import TheSnowflakes from '@/components/winter-theme/TheSnowflakes.vue'
import IceBackground from '@/components/winter-theme/IceBackground.vue'</script>
