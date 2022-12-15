<template>
	<ThePageExtension
		title="ЯКласс"
		instruction-url="https://vk.com/@dzhelper1-yaklassplus"
		background-style="background-image:radial-gradient(farthest-corner at 50% 80%,#00a978 5%,#00886f 80%)"
		image-url="/assets/images/yaklass.png"
	>
		<template #description>
			Наше расширение <b>решит</b> для вас в реальном времени все задания на сайте <b>ЯКласс</b>.
			<br class="max-lg:hidden">
			Кроме того, вы всегда сможете подробно увидеть, как был получен ответ
		</template>
		<template #fullDescription>
			Наше расширение найдёт все <b>ответы</b> на задания <b>ЯКласс</b>, или решит их в
			реальном времени, если <b>ответа</b> нет в нашей базе.
			Кроме того, детальный разбор поможет вам разобраться, как был получен <b>ответ</b> на задание.
			Просто нажмите на формулировку задания <b>ЯКласс</b> и получите ответ в пару кликов.
			Экономьте время на выполнении заданий при помощи нашего <b>взлома</b> <b>ЯКласс</b>.
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
			ЯКласс ответы, ЯКласс русский язык ответы, ЯКласс алгебра ответы, ЯКласс геометрия ответы, ЯКласс взлом,
			yaklass взлом, гдз yaklass, гдз ЯКласс, как взломать учи ру, yaklass ответы 8 класс, yaklass ответы 9 класс,
			yaklass ответы английский, расширение
		</template>
	</ThePageExtension>
</template>

<script setup lang="ts">
import ThePageExtension from '@/components/ThePageExtension.vue'
import AppCardPrice from '@/components/AppCardPrice.vue'
import IconInfinity from '@/components/icons/IconInfinity.vue'
import { ButtonColor } from '@/utils/button'
import { Link } from '@/utils/link'</script>
