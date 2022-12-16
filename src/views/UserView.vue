<template>
	<AppSection class="lg:min-h-[calc(100vh-70px)]">
		<h1>Личный кабинет</h1>

		<div class="flex max-lg:flex-col gap-8">
			<div class="flex flex-col flex-1 gap-8">
				<AppCard class="gap-2">
					<p class="text-xl font-bold truncate">Nik Ok</p>
					<p>
						Привязано к:
						<AppLink
							to="https://vk.com/id437657519"
							target="_blank"
							color="aqua"
						>
							vk.com/id437657519
						</AppLink>
					</p>
					<AppButton class="mx-auto" id="vipacc" :color="ButtonColor.Yellow">VIP-Аккаунт</AppButton>
				</AppCard>
				<AppCard class="gap-2">
					<p class="text-xl font-bold truncate">
						Баланс:
						<span class="text-yellow">
							<span id="balance">14995</span>
							<span id="strcoins"> коинов</span>
						</span>
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
							<p>Веб-Грамотей: 14995 <span id="strwords">слов</span></p>
							<p>или</p>
							<p>Учи.Ру/UzTest/ЯКласс: 1499 <span id="strtasks">заданий</span></p>
						</div>
					</div>
				</AppCard>
			</div>
			<AppCard class="flex flex-col justify-between flex-1 gap-2">
				<p class="text-xl font-bold">Реферальная программа</p>
				<div>
					<p>Ваша реф. ссылка: <AppLink id="reflink" to="#" color="aqua">vk.cc/9dbW6s</AppLink></p>
					<p>Подробнее можно узнать <AppLink :to="Link.Ref" color="aqua">здесь</AppLink></p>
				</div>
				<hr>
				<p class="text-xl font-bold">Статистика</p>
				<p>Заработано коинов: <span class="text-yellow">433</span></p>
				<div>
					<p>Приглашенные участники:</p>
					<div
						class="w-[80%] max-w-[325px] h-[150px] mx-auto overflow-y-auto border-2 border-blue bg-black/5">
						<div class="mx-auto text-sm text-left w-max">
							<p>
								1. <a class="link" href="https://vk.com/id7385146" target="_blank">vk.com/id7385146</a>
							</p>
							<p>2. <a class="link" href="https://vk.com/id211000759"
							         target="_blank">vk.com/id211000759</a></p>
							<p>3. <a class="link" href="https://vk.com/id526284531"
							         target="_blank">vk.com/id526284531</a></p>
							<p>4. <a class="link" href="https://vk.com/id479066412"
							         target="_blank">vk.com/id479066412</a></p>
							<p>5. <a class="link" href="https://vk.com/id208430461"
							         target="_blank">vk.com/id208430461</a></p>
							<p>6. <a class="link" href="https://vk.com/id411865939"
							         target="_blank">vk.com/id411865939</a></p>
							<p>7. <a class="link" href="https://vk.com/id324269836"
							         target="_blank">vk.com/id324269836</a></p>
							<p>8. <a class="link" href="https://vk.com/id194303753"
							         target="_blank">vk.com/id194303753</a></p>
							<p>9. <a class="link" href="https://vk.com/id480180420"
							         target="_blank">vk.com/id480180420</a></p></div>
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
import { Link } from '@/utils/link'</script>