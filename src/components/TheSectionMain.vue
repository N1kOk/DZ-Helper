<template>
	<AppSection is-stretched>
		<h1>
			<slot name="title"/>
		</h1>
		<p class="-mt-4">
			<slot name="description"/>
		</p>
		<div class="flex flex-wrap justify-evenly items-top gap-8">
			<div class="flex flex-col justify-between items-center gap-2 leading-none">
				<IconLightning class="w-[5rem]"/>
				<span>Быстрый поиск<br>ответов</span>
			</div>
			<div class="flex flex-col justify-between items-center gap-2 leading-none">
				<IconRocket class="w-[5rem]"/>
				<span>Высокая скорость<br>работы</span>
			</div>
			<div class="flex flex-col justify-between items-center gap-2 leading-none">
				<IconTarget class="w-[5rem]"/>
				<span>Абсолютная<br>грамотность</span>
			</div>
			<div class="flex flex-col justify-between items-center gap-2 leading-none">
				<IconLike class="w-[5rem]"/>
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
import { Link } from '@/utils/link'</script>
