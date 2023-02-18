<template>
	<AppSection class="lg:min-h-screen" is-stretched>
		<h1>Личный кабинет</h1>

		<div class="flex max-lg:flex-col gap-8">
			<div class="flex flex-col flex-1 gap-8">
				<AppCard class="gap-2">
					<p class="text-xl font-bold truncate">{{ store.state.name }}</p>
					<p>
						Привязано к:
						<AppLink
							:to="`https://vk.com/id${store.state.vkId}`"
							target="_blank"
							color="aqua"
						>
							vk.com/id{{ store.state.vkId }}
						</AppLink>
					</p>
					<AppButton
						@click="buyVip"
						class="mx-auto"
						:class="{'pointer-events-none': getLocalStorageItem('accountType')}"
						:color="ButtonColor.Yellow"
					>
						<IconCheck class="w-6" :class="{'hidden': !getLocalStorageItem('accountType')}"/>
						<span>VIP-Аккаунт</span>
						<IconCheck class="w-6" :class="{'hidden': !getLocalStorageItem('accountType')}"/>
					</AppButton>
				</AppCard>
				<AppCard class="gap-2">
					<p class="text-xl font-bold truncate">
						Баланс коинов:
						<span class="text-yellow" :class="blur">{{ info.coins }}</span>
					</p>
					<div class="w-max mx-auto space-y-1">
						<AppButton
							class="!block min-w-full"
							:to="Link.Buy"
							:color="ButtonColor.Yellow"
						>
							Пополнить
						</AppButton>
						<AppButton
							class="!block min-w-full"
							:to="Link.Stock"
							:color="ButtonColor.Green"
						>
							Получить бесплатно
						</AppButton>
					</div>
					<div>
						<p>Вы сможете решить:</p>
						<div class="text-xs">
							<p>
								Слов в Веб-Грамотей:
								<span :class="blur">{{ info.coins }}</span>
							</p>
							<p>или</p>
							<p>
								Заданий Учи.ру/UzTest/ЯКласс:
								<span :class="blur">{{ Math.floor(info.coins / 10) }}</span>
							</p>
						</div>
					</div>
				</AppCard>
			</div>
			<AppCard class="flex flex-col justify-between flex-1 gap-2">
				<p class="text-xl font-bold">Реферальная программа</p>
				<div>
					<p>
						Ваша реф. ссылка:
						<AppLink @click="copyRefLink" color="aqua">{{ store.state.refLink }}</AppLink>
					</p>
					<p>
						Подробнее можно узнать
						<AppLink :to="Link.Ref" color="aqua">здесь</AppLink>
					</p>
				</div>
				<hr>
				<p class="text-xl font-bold">Статистика</p>
				<p>
					Заработано коинов:
					<span class="text-yellow" :class="blur">{{ info.earnedCoins }}</span>
				</p>
				<div>
					<p>Приглашенные участники:</p>
					<div class="w-[80%] max-w-[325px] h-[8rem] mx-auto overflow-y-auto
						border-2 border-blue bg-black/5">
						<div class="flex flex-col max-w-full h-full mx-auto text-sm text-left w-max">
							<div v-if="info.refs.length">
								<p v-for="(id, i) in info.refs">
									<span>{{ i + 1 }}. </span>
									<AppLink
										:to="`https://vk.com/id${id}`"
										target="_blank"
										class="no-underline"
										color="aqua"
									>
										vk.com/id{{ id }}
									</AppLink>
								</p>
							</div>
							<div v-else class="m-auto text-center">
								Приглашенные участники<br>не найдены
							</div>
						</div>
					</div>
				</div>
			</AppCard>
		</div>
	</AppSection>
</template>

<script setup lang="ts">
import AppSection from '@/components/AppSection.vue'
import AppCard from '@/components/AppCard.vue'
import AppButton from '@/components/AppButton.vue'
import AppLink from '@/components/AppLink.vue'
import { ButtonColor } from '@/utils/button'
import { Link } from '@/utils/link'
import { copyRefLink, get, getAsJSON } from '@/utils/helpers'
import { computed, onMounted, ref } from 'vue'
import { Mutation, useStore } from '@/store'
import { getLocalStorageItem, setLocalStorageItem } from '@/utils/localStorage'
import IconCheck from '@/components/icons/IconCheck.vue'
import Swal from 'sweetalert2-neutral'

const store = useStore()

const blur = computed(() => ({
	'blur': store.state.isLoaderShowed,
}))

interface Info {
	coins: number
	earnedCoins: number
	accountType: number
	refs: number[]
}

const info = ref<Info>({
	coins: getLocalStorageItem('coins') || 0,
	earnedCoins: getLocalStorageItem('earnedCoins') || 0,
	accountType: getLocalStorageItem('accountType') || 0,
	refs: getLocalStorageItem('refs') || [],
})

onMounted(async () => {
	store.commit(Mutation.ShowLoader)

	try {
		info.value = await getAsJSON<Info>('/api/getInfo.php')

		setLocalStorageItem('coins', info.value.coins)
		setLocalStorageItem('earnedCoins', info.value.earnedCoins)
		setLocalStorageItem('accountType', info.value.accountType)
		setLocalStorageItem('refs', info.value.refs)
	} catch (error) {
		await Swal.fire('Ошибка', 'Не удалось получить данные с сервера', 'error')
	}

	store.commit(Mutation.HideLoader)
})

async function buyVip() {
	const res = await Swal.fire({
		title: 'VIP-Аккаунт',
		html: `
<br>
<a class="text-blue underline underline-offset-2" href="https://vk.com/@dzhelper1-vip" target="_blank">
Преимущества VIP-Аккаунта
</a><br><br>
Стоимость: 169 коинов<br>
Срок действия: 14 дней<br><br>
Вы уверены, что хотите купить VIP-Аккаунт?`,
		icon: 'question',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonText: 'Отмена',
		confirmButtonText: 'Купить',
	})

	if (res.value) {
		type Response = 'ok' | 'no balance' | 'already'

		const response = await get<Response>('/db/users/buyvip.php')

		switch (response) {
			case 'ok':
				await Swal.fire('VIP-Аккаунт', 'Покупка прошла успешно!', 'success')
				break
			case 'no balance':
				await Swal.fire('VIP-Аккаунт', 'На вашем балансе недостаточно средств.', 'error')
				break
			case 'already':
				await Swal.fire('VIP-Аккаунт', 'VIP-Аккаунт уже приобретён.', 'error')
				break
		}
	}
}
</script>

<style scoped lang="css">
/*noinspection CssUnusedSymbol*/
.blur {
	@apply blur-[7px]
}
</style>