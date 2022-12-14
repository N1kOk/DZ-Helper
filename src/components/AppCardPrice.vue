<template>
	<AppCard>
		<div class="text-left">
			<span class="text-5xl font-bold">{{ props.cost }}</span><span class="text-4xl">₽</span>
		</div>
		<div class="text-left">
			<slot/>
		</div>
		<hr>
		<p class="flex-1">{{ props.description }}</p>
		<AppButton
			class="min-w-full uppercase"
			:to="props.button.to"
			:size="ButtonSize.Large"
			:color="props.button.color"
		>
			{{ props.button.text }}
		</AppButton>
	</AppCard>
</template>

<script setup lang="ts">
import AppCard from '@/components/AppCard.vue'
import { ButtonColor, ButtonSize } from '@/utils/button'
import AppButton from '@/components/AppButton.vue'
import { Link } from '@/router'

interface Props {
	cost: number
	description: string
	button: {
		to: Link
		text: string
		color: ButtonColor
	}
}

const props = defineProps<Props>()
</script>
