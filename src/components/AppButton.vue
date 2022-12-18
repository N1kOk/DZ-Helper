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
import { ButtonColor, ButtonSize } from '@/utils/button'
import type { Link } from '@/utils/link'

interface Props {
	to?: string | Link
	size?: ButtonSize
	color?: ButtonColor
	text?: string
}

const {
	to,
	size,
	color,
} = withDefaults(defineProps<Props>(), {
	size: ButtonSize.Medium,
	color: ButtonColor.Blue,
})

const componentName = computed(() => to ? 'RouterLink' : 'button')

const classes = computed(() => ({
	'bg-blue': color === ButtonColor.Blue,
	'bg-green': color === ButtonColor.Green,
	'bg-[#eadd0a] text-[#3f3c03]': color === ButtonColor.Yellow,

	'py-1': size === ButtonSize.Medium,
	'py-2 tracking-[1px]': size === ButtonSize.Large,
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