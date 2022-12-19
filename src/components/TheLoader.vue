<template>
	<div class="fixed left-0 top-0 w-screen h-screen flex bg-black/50 z-40 pointer-events-none transition-opacity"
	     :class="{ 'opacity-0': !isLoaderShowed }">
		<AppSpinner class="m-auto scale-150"/>
	</div>
</template>

<script setup lang="ts">
import AppSpinner from '@/components/AppSpinner.vue'
import router from '@/router'
import { isLoaderShowed } from '@/utils/helpers'

router.beforeEach(() => isLoaderShowed.value = true)
router.afterEach(() => isLoaderShowed.value = false)
</script>
