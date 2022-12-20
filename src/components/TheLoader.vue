<template>
	<div class="fixed left-0 top-0 w-screen h-screen flex bg-black/50 z-40 pointer-events-none transition-opacity"
	     :class="{ 'opacity-0': !store.state.isLoaderShowed }">
		<AppSpinner class="m-auto scale-150"/>
	</div>
</template>

<script setup lang="ts">
import AppSpinner from '@/components/AppSpinner.vue'
import router from '@/router'
import { Mutation, useStore } from '@/store'

const store = useStore()

router.beforeEach(() => store.commit(Mutation.ShowLoader))
router.afterEach(() => store.commit(Mutation.HideLoader))
</script>
