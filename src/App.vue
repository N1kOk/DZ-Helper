<template>
	<div class="flex flex-col min-h-screen overflow-hidden">
		<TheHeader/>
		<main class="flex flex-col flex-1 bg-[#37bdfe]">
			<div class="flex-1 bg-black/30">
				<RouterView/>
			</div>
		</main>
		<TheFooter/>
	</div>

	<TheLoader/>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheLoader from '@/components/TheLoader.vue'</script>