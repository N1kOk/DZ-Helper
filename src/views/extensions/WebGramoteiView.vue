<template>
	<ThePageExtension
		title="Веб-Грамотей"
		instruction-url="https://vk.com/@dzhelper1-wgs"
		background-style="background:linear-gradient(45deg,#46d11b,#149dcc)"
		image-url="/assets/images/wg.png"
	>
		<template #description>
			С нашим сервисом для браузера вы легко сможете выполнять задания на сайте <b>Веб-Грамотей</b>
			<br class="max-lg:hidden">
			и всегда получать хорошие оценки за домашние задания
		</template>
		<template #fullDescription>
			Быстрое полуавтоматическое выполнение заданий с вашим участием. Наша программа знает все
			<b>ответы</b> на <b>Веб-Грамотей</b>, и вам даже не нужно прикладывать особых усилий,
			чтобы всё работало.
			<br>
			Просто откройте Веб-Грамотей и расширение само выделит верный ответ.
			<br>
			Кроме того, что наш сервис содержит все <b>ответы Веб-Грамотей</b>, он может находить
			ответы на специальные задания для 9-го класса, так как ответы <b>ОРФО-9</b>
			и упражнений на пунктуацию так же включены в базу данных программы.
		</template>
		<template #prices>
			<AppCardPrice
				class="gap-6"
				:cost="0"
				description="Попробуй наш продукт в действии и убедись в его качестве"
				:button="{ to: Link.Download, color: ButtonColor.Green, text: 'Испытать' }"
			>
				<p>30 слов</p>
				<p class="text-sm text-gray-300">&nbsp;или</p>
				<div class="flex flex-col w-max text-center">
					<span>15 предложений</span>
					<span class="text-xs -mt-1 text-gray-300">(пунктуация)</span>
				</div>
			</AppCardPrice>

			<AppCardPrice
				class="gap-6"
				:cost="0"
				description="Есть возможность заработать коины совершенно бесплатно"
				:button="{ to: Link.Stock, color: ButtonColor.Blue, text: 'Заработать' }"
			>
				<div class="flex items-center text-left">
					<IconInfinity class="w-6" stroke-width="1"/>
					<span>&nbsp;слов</span>
				</div>
				<p class="text-sm text-gray-300">&nbsp;или</p>
				<div class="flex flex-col w-max text-center">
					<div class="flex items-center text-left">
						<IconInfinity class="w-6" stroke-width="1"/>
						<span>&nbsp;предложений</span>
					</div>
					<span class="text-xs -mt-1 text-gray-300">(пунктуация)</span>
				</div>
			</AppCardPrice>

			<AppCardPrice
				class="gap-6"
				:cost="70"
				description="Приобрети коины сразу и ни в чём себе не отказывай!"
				:button="{ to: Link.Buy, color: ButtonColor.Yellow, text: 'Купить' }"
			>
				<p>100 слов</p>
				<p class="text-sm text-gray-300">&nbsp;или</p>
				<div class="flex flex-col w-max text-center">
					<span>50 предложений</span>
					<span class="text-xs -mt-1 text-gray-300">(пунктуация)</span>
				</div>
			</AppCardPrice>
		</template>
		<template #keywords>
			Web-Gramotei, взлом веб-грамотей, веб-грамотей ответы, взлом орфо 9, как взломать веб-грамотей,
			как сделать быстро
			веб-грамотей, как взломать орфо 9, как быстро сделать орфо 9, веб грамотей решение, решение орфо
			9, орфо9, орфо тренажер
			9, орфо тренажер 9 ответы, орфо 9 ответы на упражнения, программа орфо 9, ответы на орфо
			тренажер 9 класс
		</template>
	</ThePageExtension>
</template>

<script setup lang="ts">
import ThePageExtension from '@/components/ThePageExtension.vue'
import AppCardPrice from '@/components/AppCardPrice.vue'
import IconInfinity from '@/components/icons/IconInfinity.vue'
import { ButtonColor } from '@/utils/button'
import { Link } from '@/router'</script>
