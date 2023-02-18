<template>
	<div
		v-if="isWinter"
		class="ice-background absolute left-0 top-0 w-full h-full z-[-1]"
	/>
</template>

<script setup lang="ts">
import { isWinter } from '@/utils/helpers'</script>

<style scoped>
.ice-background {
	background-image: url("/assets/images/ice.png");
}
</style>