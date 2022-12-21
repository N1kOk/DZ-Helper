<template>
	<AppSection>
		<h1 class="text-4xl font-bold">Реферальная программа</h1>
		<p>
			Вы можете пригласить своего друга и получать <span class="text-yellow">15% коинов</span>
			на свой баланс от его суммы покупки (предложение действует для всех наших расширений)
		</p>
		<div class="space-y-2">
			<p>Ваша реферальная ссылка:</p>
			<AppLink @click="copyRefLink" color="aqua">{{ store.state.name }}</AppLink>
			<p class="text-xs">(Чтобы скопировать, нажмите на ссылку)</p>
		</div>
		<div>
			<p>
				Статистику по приглашениям и балансу можно посмотреть в
				<AppLink :to="Link.User" color="aqua">кабинете</AppLink>
			</p>
			<p>
				Подробнее можно узнать
				<AppLink
					to="https://vk.com/@dzhelper1-refsystem"
					target="_blank"
					rel="nofollow"
					color="aqua"
				>
					тут
				</AppLink>
			</p>
		</div>
	</AppSection>
</template>

<script setup lang="ts">
import AppSection from '@/components/AppSection.vue'
import AppLink from '@/components/AppLink.vue'
import { Link } from '@/utils/link'
import { copyRefLink } from '@/utils/helpers'
import { useStore } from '@/store'

const store = useStore()
</script>