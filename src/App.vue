<template>
	<div class="flex flex-col min-h-screen overflow-hidden">
		<TheHeader/>
		<main class="flex flex-col flex-1 bg-[#2684b1]" :class="classes">
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
import { isWinter } from '@/utils/helpers'

const classes = {
	'ice-background': isWinter(),
}
</script>

<style>
.ice-background {
	background-image: url("/assets/images/ice.png");
}
</style>