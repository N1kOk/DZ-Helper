<template>
	<div class="flex overflow-hidden flex-col min-h-full">
		<TheHeader/>
		<main class="gradient min-h-[calc(100vh-140px)] pt-[70px] ">
			<section class="bg-black/30 min-h-[inherit]">
				<div class="container flex flex-col justify-evenly p-4 py-8 mx-auto space-y-4 min-h-[inherit]">
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