<template>
	<ThePageExtension
		title="Учи.ру"
		instruction-url="https://vk.com/@dzhelper1-uchiruplus"
		background-style="background:linear-gradient(45deg,rgb(10,165,218),#ff5767)"
		image-url="/assets/images/uchiru.png"
	>
		<template #description>
			С нашим расширением для браузера вы легко сможете <b>решать</b> задания на сайте <b>Учи.ру</b>
			<br class="max-lg:hidden">
			Никаких сложных кнопок и действий. Установи и пользуйся!
		</template>
		<template #fullDescription>
			Полностью автоматическое выполнение заданий на сайте <b>Учи.ру</b>.
			<br>
			Установите расширение с нашими <b>ответами</b> на <b>Uchi.ru</b> и забудьте про нудные
			задания. Наш <b>взлом Uchi.ru</b> - то, что вам нужно!
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
			uchi ru ответы, учи ру ответы, олимпиада uchi ru ответы, учи ру русский язык ответы, ответы учи ру, учи ру
			взлом, uchi ru взлом, гдз uchi ru, гдз учи ру, как взломать учи ру, uchi ru ответы 8 класс, uchi ru ответы 9
			класс, uchi ru ответы английский
		</template>
	</ThePageExtension>
</template>

<script setup lang="ts">
import ThePageExtension from '@/components/ThePageExtension.vue'
import AppCardPrice from '@/components/AppCardPrice.vue'
import IconInfinity from '@/components/icons/IconInfinity.vue'
import { ButtonColor } from '@/utils/button'
import { Link } from '@/utils/link'</script>
