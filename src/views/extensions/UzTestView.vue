<template>
	<ThePageExtension
		title="UzTest"
		instruction-url="https://vk.com/@dzhelper1-uztestplus"
		background-style="background:linear-gradient(45deg,rgb(10,165,218),rgb(38,148,38))"
		image-url="/assets/images/uztest.png"
	>
		<template #description>
			Наше расширение для браузера <b>решит</b> за вас все задания на сайте <b>UzTest.ru</b>
			<br class="max-lg:hidden">
			Кроме того, вы всегда сможете подробно увидеть, как был получен <b>ответ</b>
		</template>
		<template #fullDescription>
			Быстрый поиск <b>ответов</b> на задания <b>UzTest</b> в нашей базе заданий.
			Наше расширение легко покажет вам верный
			<b>ответ</b> на задание, а так же поможет понять, как был получен финальный
			<b>ответ</b>. Просто нажмите на кнопку, чтобы наше расширение нашло <b>ответ</b> на любой вопрос в
			<b>UzTest</b> и наслаждайтесь временем, которое вы сэкономили на выполнении.
		</template>
		<template #prices>
			<AppCardPrice
				class="gap-6"
				:cost="0"
				description="Попробуй наш продукт в действии и убедись в его качестве"
				:button="{ to: Link.Download, color: ButtonColor.Green, text: 'Испытать' }"
			>
				<p>3 решения</p>
			</AppCardPrice>

			<AppCardPrice
				class="gap-6"
				:cost="0"
				description="Есть возможность заработать коины совершенно бесплатно"
				:button="{ to: Link.Stock, color: ButtonColor.Blue, text: 'Заработать' }"
			>
				<div class="flex items-center text-left">
					<IconInfinity class="w-6" stroke-width="1"/>
					<span>&nbsp;решений</span>
				</div>
			</AppCardPrice>

			<AppCardPrice
				class="gap-6"
				:cost="70"
				description="Приобрети коины сразу и ни в чём себе не отказывай!"
				:button="{ to: Link.Buy, color: ButtonColor.Yellow, text: 'Купить' }"
			>
				<p>10 решений</p>
			</AppCardPrice>
		</template>
		<template #keywords>
			uztest ответы, uztest взлом, гдз uztest, решение uztest, как взломать uztest, как сделать быстро юзтест,
			юзтест решение, юзтест, юзтест ответы, юзтест взлом, как сделать быстро юзтест, гдз юзтест, решение юзтест,
			узтест ответы, узтест взлом
		</template>
	</ThePageExtension>
</template>

<script setup lang="ts">
import ThePageExtension from '@/components/ThePageExtension.vue'
import AppCardPrice from '@/components/AppCardPrice.vue'
import IconInfinity from '@/components/icons/IconInfinity.vue'
import { ButtonColor } from '@/utils/button'
import { Link } from '@/utils/link'</script>
