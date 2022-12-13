<template>
	<section class="flex first-of-type:pt-16">
		<div
			class="container flex flex-col flex-1 py-10 space-y-10"
			:class="{'lg:justify-between': isStretched}"
		>
			<slot/>
		</div>
	</section>
</template>

<script setup lang="ts">
const { isStretched } = defineProps<{ isStretched?: boolean }>()
</script>
