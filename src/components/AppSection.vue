<template>
	<section class="flex first-of-type:pt-16">
		<div
			class="container flex flex-col flex-1 py-10 gap-10"
			:class="classes"
		>
			<slot/>
		</div>
	</section>
</template>

<script setup lang="ts">
const { isStretched } = defineProps<{ isStretched?: boolean }>()

const classes = {
	'section-stretched': isStretched
}
</script>

<style>
/*noinspection CssUnusedSymbol*/
.section-stretched {
	@apply lg:justify-between;
}
</style>