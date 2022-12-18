<template>
	<component
		:is="componentName"
		class="link"
		:class="classes"
		:to="to"
		:href="to"
	>
		<slot/>
	</component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Link } from '@/utils/link'

interface Props {
	to?: string | Link
	color?: 'aqua'
}

const { to, color } = defineProps<Props>()

const componentName = computed(() => to ? 'RouterLink' : 'span')

const classes = computed(() => ({
	'text-aqua underline underline-offset-2': color === 'aqua',
}))
</script>

<style scoped>
.link {
	@apply inline-flex justify-center items-center whitespace-nowrap cursor-pointer
	transition-[filter] hover:brightness-90
}
</style>