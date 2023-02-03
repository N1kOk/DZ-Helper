<template>
	<AppSection>
		<h1>Пополнение баланса</h1>
		<AppCard class="w-[23rem] max-w-full mx-auto">
			<div class="text-left border border-white/50 rounded-3xl overflow-hidden">
				<div class="p-4">
					<div class="px-2 space-y-1">
						<p>Количество коинов:</p>
						<input
							v-model="info.coins"
							class="w-full"
							type="range"
							min="50" max="1000" step="25"
						>
						<br>
						<AppInput
							v-model="info.coins"
							@change="(+$event.target.value < 50) && ($event.target.value = 50)"
							maxlength="7"
							autocomplete="off"
							class="w-[5rem] mr-1"
						/>
						<span class="text-xs text-gray-300">Минимальное число - 50</span>
					</div>
					<hr class="my-4">
					<div class="px-2 space-y-1">
						<p>Промокод (если есть):</p>
						<AppInput
							v-model="info.promoCode"
							maxlength="7"
							autocomplete="off"
							class="w-[5rem] mr-1"
						/>
						<span class="text-xs text-gray-300">{{ info.promoMessage }}</span>
					</div>
					<hr class="my-4">
					<div class="px-2 space-y-1">
						<p>Цена:</p>
						<div class="flex flex-wrap items-center justify-between space-x-1">
							<span class="text-2xl font-bold">{{ costWithDiscount }}₽</span>
							<span>Выгоднее на <span class="font-bold">{{ discount }}₽</span></span>
						</div>
					</div>
				</div>

				<AppButton
					@click="assign(`/api/lava/create.php?points=${info.coins}&promo=${info.promoCode}`)"
					:color="ButtonColor.Green"
					:size="ButtonSize.Large"
					class="min-w-full !border-none !rounded-none"
				>
					Оплатить через Lava.ru
				</AppButton>
				<AppButton
					@click="assign(`/api/enot/enot.php?points=${info.coins}&promo=${info.promoCode}`)"
					:size="ButtonSize.Large"
					class="min-w-full !border-none !rounded-none"
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
					Помни, что в твоём
					<AppLink :to="Link.User" color="aqua">личном кабинете</AppLink>
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
					<span>"<AppLink :to="Link.Stock" color="aqua">Акции</AppLink>",</span>
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
import { Link } from '@/utils/link'
import AppInput from '@/components/AppInput.vue'
import { computed, reactive, watch } from 'vue'
import { parseQuery } from 'vue-router'
import { baseUrl, debounce } from '@/utils/helpers'

const info = reactive({
	coins: 50,
	promoCode: '',
	promoMessage: '',
	promoDiscount: 0,
})

watch(() => info.coins, value => {
	info.coins = +value.toString().replace(/\D/g, '')
}, { flush: 'post' })

watch(() => info.promoCode, value => {
	info.promoCode = value.trim().toUpperCase()
	info.promoMessage = 'Проверка...'
}, { flush: 'post' })

watch(() => info.promoCode, debounce(fetchDiscount, 500), { flush: 'post' })

info.promoCode = (<{ promo?: string }>parseQuery(location.search)).promo || ''

const cost = computed(() => Math.ceil(info.coins / 1.25))
const discount = computed(() => Math.ceil((info.coins - 50) / 5))
const costWithDiscount = computed(() => Math.ceil((cost.value - discount.value) * (1 - info.promoDiscount / 100)))

function assign(url: string) {
	location.assign(baseUrl + url)
}

async function fetchDiscount() {
	try {
		info.promoDiscount = await getDiscount(info.promoCode)
		info.promoMessage = `Скидка: ${info.promoDiscount}%`
	} catch (error) {
		info.promoDiscount = 0

		if (error instanceof Error)
			info.promoMessage = error.message
	}

	// Возвращает скидку в процентах
	async function getDiscount(promo: string) {
		const res = await fetch(`${baseUrl}/api/promos/check.php?name=${promo}`)
		if (!res.ok)
			throw new Error('Не удалось проверить промокод')

		const discount = +(await res.text()).trim()
		if (!discount)
			throw new Error('Промокод не найден')

		return discount
	}
}
</script>