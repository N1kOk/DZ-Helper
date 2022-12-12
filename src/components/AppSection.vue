<template>
	<section class="flex first-of-type:pt-16">
		<div
			class="container flex flex-col flex-1 py-12 space-y-12"
			:class="{'justify-evenly': isStretched}"
		>
			<slot/>
		</div>
	</section>
</template>

<script setup lang="ts">
const { isStretched } = defineProps<{ isStretched?: boolean }>()
</script>
