<template>
	<ThePageExtension
    is-disabled
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
      Наше расширение для <b>ответов</b> на задания <b>UzTest</b> больше не поддерживается.
      <br><br>
      Но вы можете заказать решение на <a class="link text-aqua" href="https://domashky.net/" target="_blank">Domashky.NET</a>
      и получить <span class="text-yellow">50 рублей</span> при регистрации (только для первых 100 пользователей)
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
