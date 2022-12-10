<template>
	<div class="space-y-4">
		<h1 class="text-3xl font-bold">Автоматическое выполнение заданий</h1>
		<p>
			С нашими расширениями для браузера вы легко сможете выполнить любое задание на сайтах
			и всегда получать хорошие оценки за домашние задания.
		</p>
	</div>
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
		to="/download.html"
		color="green"
		size="xl"
	>
		Перейти к расширениям
	</AppButton>
</template>
<script setup lang="ts">
import IconLightning from '@/components/icons/IconLightning.vue'
import IconRocket from '@/components/icons/IconRocket.vue'
import IconTarget from '@/components/icons/IconTarget.vue'
import IconLike from '@/components/icons/IconLike.vue'
import AppButton from '@/components/AppButton.vue'
</script>