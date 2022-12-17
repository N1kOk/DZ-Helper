<template>
	<AppSection class="lg:min-h-[calc(100vh-70px)]">
		<div class="m-auto space-y-8">
			<p class="text-xl">Для просмотра этой страницы необходимо авторизоваться</p>
			<AppButton
				@click="login"
				:color="ButtonColor.Green"
				:size="ButtonSize.Large"
			>
				Авторизоваться
			</AppButton>
		</div>
	</AppSection>
</template>

<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import { ButtonColor, ButtonSize } from '@/utils/button'
import { login } from '@/utils/auth'
import AppSection from '@/components/AppSection.vue'</script>