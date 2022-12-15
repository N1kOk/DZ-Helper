<template>
	<ThePageExtension
		title="РЭШ"
		instruction-url="https://vk.com/@dzhelper1-reshplus"
		background-style="background:linear-gradient(135deg,rgba(215,215,215,1) 0%,rgba(0,113,188,1) 25%,rgba(0,113,188,1) 75%,rgba(215,215,215,1) 100%)"
		image-url="/assets/images/resh.png"
	>
		<template #description>
			Наше расширение <b>решит</b> для вас в реальном времени все задания на сайте <b>РЭШ</b>.
			Забудьте о куче заданий и займитесь тем, что действительно важно
		</template>
		<template #fullDescription>
			Наше расширение найдёт все <b>ответы</b> на задания <b>РЭШ</b> (<b>Российской Электронной
			Школы</b>), или решит их в реальном времени, если <b>ответа</b> нет в нашей базе.
			С нашим расширением вы сможете сэкономить время на выполнении скучных, нудных заданий и заняться
			тем, что действительно важно.
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
			РЭШ ответы, РЭШ русский язык ответы, РЭШ алгебра ответы, РЭШ геометрия ответы, РЭШ взлом, resh взлом,
			гдз resh, гдз РЭШ, РЭШ ответы 8 класс, РЭШ ответы 9 класс, resh ответы, расширение
		</template>
	</ThePageExtension>
</template>

<script setup lang="ts">
import ThePageExtension from '@/components/ThePageExtension.vue'
import AppCardPrice from '@/components/AppCardPrice.vue'
import IconInfinity from '@/components/icons/IconInfinity.vue'
import { ButtonColor } from '@/utils/button'
import { Link } from '@/utils/link'</script>
