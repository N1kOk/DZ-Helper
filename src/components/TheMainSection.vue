<template>
	<AppSection is-stretched>
		<h1>
			<slot name="title"/>
		</h1>
		<p class="-mt-4">
			<slot name="description"/>
		</p>
		<div class="flex flex-wrap justify-evenly items-top gap-4">
			<div class="leading-none">
				<IconLightning class="w-[5rem] mx-auto"/>
				<span>Быстрый поиск<br>ответов</span>
			</div>
			<div class="leading-none">
				<IconRocket class="w-[5rem] mx-auto"/>
				<span>Высокая скорость<br>работы</span>
			</div>
			<div class="leading-none">
				<IconTarget class="w-[5rem] mx-auto"/>
				<span>Абсолютная<br>грамотность</span>
			</div>
			<div class="leading-none">
				<IconLike class="w-[5rem] mx-auto"/>
				<span>Лёгкость в<br>использовании</span>
			</div>
		</div>

		<AppButton
			class="mx-auto tracking-[1px]"
			:to="Link.Download"
			color="green"
			size="xl"
		>
			Перейти к расширениям
		</AppButton>
	</AppSection>
</template>

<script setup lang="ts">
import IconLike from '@/components/icons/IconLike.vue'
import IconTarget from '@/components/icons/IconTarget.vue'
import IconRocket from '@/components/icons/IconRocket.vue'
import IconLightning from '@/components/icons/IconLightning.vue'
import AppButton from '@/components/AppButton.vue'
import AppSection from '@/components/AppSection.vue'
import { Link } from '@/router'</script>
