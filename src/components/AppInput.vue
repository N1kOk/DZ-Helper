<template>
	<input
		:value="modelValue"
		@input="$emit('update:modelValue', $event.target.value)"
		type="text"
		class="input"
	>
</template>

<script setup lang="ts">
defineProps(['modelValue'])
</script>

<style scoped lang="scss">
.input {
	@apply
	inline-block text-center text-sm text-black font-light border border-black/50 rounded-full
	focus:outline-2 outline-blue;
}
</style>
