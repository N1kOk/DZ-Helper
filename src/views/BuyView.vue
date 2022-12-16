<template>
	<AppSection>
		<h1>Пополнение баланса</h1>
		<AppCard class="w-[23rem] max-w-full !min-h-max mx-auto">
			<div class="text-left border border-white/50 rounded-3xl overflow-hidden">
				<div class="p-4">
					<div class="px-2 space-y-1">
						<p>Количество коинов:</p>
						<input class="w-full bg-transparent" id="range" type="range" min="50" max="1000" step="25"><br>
						<input class="w-[5rem] mr-1" id="amount-label" type="text" autocomplete="off" maxlength="7">
						<span class="text-xs text-gray-300">Минимальное число - 50</span>
					</div>
					<hr class="my-4">
					<div class="px-2 space-y-1">
						<p>Промокод (если есть):</p>
						<input class="w-[5rem] mr-1" id="promo" autocomplete="off" maxlength="7" type="text">
						<span class="text-xs text-gray-300" id="promo-label"></span>
					</div>
					<hr class="my-4">
					<div class="px-2 space-y-1">
						<p>Цена:</p>
						<div class="flex flex-wrap items-center justify-between space-x-1">
							<span class="text-2xl font-bold" id="total-label">70₽</span>
							<span>Выгоднее на <span class="font-bold" id="textRub">10₽</span></span>
						</div>
					</div>
				</div>

				<AppButton
					class="min-w-full !border-none !rounded-none"
					:color="ButtonColor.Green"
					:size="ButtonSize.Large"
					id="submit3"
				>
					Оплатить через Lava.ru
				</AppButton>
				<AppButton
					class="min-w-full !border-none !rounded-none"
					:size="ButtonSize.Large"
					id="submit1"
				>
					Оплатить через Enot.io
				</AppButton>
			</div>
		</AppCard>
	</AppSection>

	<AppSection class="text-left">
		<div class="flex items-start space-x-2">
			<IconQuestion class="max-w-[4rem]"/>
			<div>
				<h2 class="font-bold mb-2">Всё ещё сомневаешься?</h2>
				<p>
					Помни, что в твоём <AppLink :to="Link.User" color="aqua">личном кабинете</AppLink>
					при регистрации доступен стартовый баланс.
					Оцени качество наших продуктов, а затем пополни баланс, если нужно
				</p>
			</div>
		</div>
		<div class="flex items-start space-x-2">
			<IconCursor class="max-w-[4rem]"/>
			<div>
				<h2 class="font-bold mb-2">Раздел "Акции"</h2>
				<p>
					Не забывай, что у нас на сайте есть раздел
					"<AppLink :to="Link.Stock" color="aqua">Акции</AppLink>",
					где можно, выполняя простые задания, получить дополнительный баланс на свой счёт.
					Кроме того, список заданий иногда пополняется
				</p>
			</div>
		</div>
		<div class="flex items-start space-x-2">
			<IconSmile class="max-w-[4rem]"/>
			<div>
				<h2 class="font-bold mb-2">Наши клиенты</h2>
				<p>
					Уже оценили нашу работу и написали об этом
					<AppLink
						to="https://vk.com/topic-164600218_39651716"
						target="_blank"
						rel="nofollow"
						color="aqua"
					>
						массу отзывов
					</AppLink>
					в нашей
					<AppLink
						to="https://vk.com/dzhelper1"
						target="_blank"
						rel="nofollow"
						color="aqua"
					>
						группе ВКонтакте
					</AppLink>
				</p>
			</div>
		</div>
	</AppSection>
</template>

<script setup lang="ts">
import AppSection from '@/components/AppSection.vue'
import AppCard from '@/components/AppCard.vue'
import AppButton from '@/components/AppButton.vue'
import { ButtonColor, ButtonSize } from '@/utils/button'
import AppLink from '@/components/AppLink.vue'
import IconSmile from '@/components/icons/IconSmile.vue'
import IconCursor from '@/components/icons/IconCursor.vue'
import IconQuestion from '@/components/icons/IconQuestion.vue'
import { Link } from '@/utils/link'</script>