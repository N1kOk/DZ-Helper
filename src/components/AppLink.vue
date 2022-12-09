<template>
	<component
		class="link"
		:class="classes"
		:is="componentName"
		:to="(!isExternalLink || undefined) && to"
		:href="to"
	>
		<slot/>
	</component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
	to?: string
	isExternalLink?: boolean
	color?: 'aqua'
}

const { to, isExternalLink, color } = defineProps<Props>()

const componentName = computed(() => isExternalLink ? 'a' : 'RouterLink')

const classes = computed(() => ({
	'text-aqua underline underline-offset-1': color === 'aqua',
}))
</script>

<style scoped>
.link {
	@apply flex items-center whitespace-nowrap
}
</style>