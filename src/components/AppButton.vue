<template>
	<component
		:is="componentName"
		class="button"
		:class="classes"
		:to="to"
		:href="to"
	>
		<div class="relative flex justify-center items-center z-10">
			<slot/>
		</div>
	</component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
	to?: string
	size?: 'md' | 'xl'
	color?: 'green' | 'yellow' | 'blue'
}

const { color, size, to } = defineProps<Props>()

const componentName = computed(() => to
	? 'RouterLink'
	: 'button')

const classes = computed(() => ({
	'bg-blue': color === 'blue' || !color,
	'bg-green': color === 'green',
	'bg-[#eadd0a] text-[#3f3c03]': color === 'yellow',

	'py-1': size === 'md' || !size,
	'py-2 tracking-[1px]': size === 'xl',
}))
</script>

<style scoped lang="css">
.button {
	@apply relative inline-block max-w-max px-4 rounded-full border-2 border-current transition-colors overflow-hidden
}

.button:before {
	@apply absolute block content-[''] left-0 top-0 w-full h-full bg-black opacity-0 transition-opacity
}

.button:hover:before {
	@apply opacity-10
}
</style>