<template>
	<div class="flex flex-col min-h-screen overflow-hidden">
		<TheHeader/>
		<main class="flex flex-1 pt-16 bg-[#37bdfe]">
			<section class="flex-1 bg-black/30">
				<div class="container flex flex-col min-h-full py-12 mx-auto space-y-12">
					<RouterView/>
				</div>
			</section>
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