<template>
	<ThePageExtension
		title="Решу ОГЭ (Решу ЕГЭ)"
		instruction-url="https://vk.com/@dzhelper1-reshugiaplus"
		background-style="background:linear-gradient(45deg,#46d11b,#149dcc)"
		image-url="/assets/images/reshu-ege.png"
	>
		<template #description>
			С нашим сервисом для браузера вы легко сможете выполнять задания на сайте Решу ОГЭ (Решу ЕГЭ) и всегда
			получать хорошие оценки за домашние задания
		</template>
		<template #fullDescription>
			Самый быстрый способ получать <b>ответы к заданиям</b> на сайте <b>Решу ОГЭ</b> (<b>Решу
			ЕГЭ</b>). Просто запустите вариант с заданиями, нажмите
			кнопку рядом с полем для ввода <b>ответа</b> на задание, которое вызвало у вас затруднение, и
			<b>решение</b> появится на экране.
		</template>
		<template #prices>
			<AppCardPrice
				class="lg:max-w-[15rem] mx-auto gap-6"
				:cost="0"
				description="Все ответы абсолютно бесплатны"
				:button="{ to: Link.Download, color: ButtonColor.Green, text: 'Испытать' }"
			>
				<div class="flex items-center text-left">
					<IconInfinity class="w-6" stroke-width="1"/>
					<span>&nbsp;решений</span>
				</div>
			</AppCardPrice>
		</template>
		<template #keywords>
			решу огэ ответы, решу егэ ответы, решу огэ взлом, решу егэ взлом, гдз решу огэ, гдз решу егэ, как взломать
			решу огэ, как взломать решу егэ
		</template>
	</ThePageExtension>
</template>

<script setup lang="ts">
import ThePageExtension from '@/components/ThePageExtension.vue'
import AppCardPrice from '@/components/AppCardPrice.vue'
import IconInfinity from '@/components/icons/IconInfinity.vue'
import { ButtonColor } from '@/utils/button'
import { Link } from '@/utils/link'</script>
