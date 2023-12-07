<template>
	<TheSectionMain class="lg:min-h-screen">
		<template #title>
			{{ props.title }}
		</template>
		<template #description>
			<slot name="description"/>
		</template>
	</TheSectionMain>

	<AppSection :style="props.backgroundStyle">
		<div class="flex max-lg:flex-col gap-x-4 gap-y-8 [&>*]:flex-1">
			<div class="flex flex-col space-y-8 text-left">
				<h2 class="text-3xl font-bold">Смотрите сами</h2>
				<p>
					<slot name="fullDescription"/>
				</p>
				<p v-if="!props.isDisabled">
					Инструкцию можно посмотреть
					<AppLink
						:to="props.instructionUrl"
						target="_blank"
						rel="nofollow"
						color="aqua"
					>
						здесь
					</AppLink>
				</p>
			</div>
			<div class="flex">
				<img
					class="m-auto object-contain rounded-3xl shadow-xl"
					:src="props.imageUrl"
					:alt="props.title + ' расширение'"
				>
			</div>
		</div>
		<div class="ads mx-auto">
			<!-- Yandex.RTB R-A-489599-1 -->
			<div id="yandex_rtb_R-A-489599-1" style="width: fit-content;"></div>
			<component is="script" type="text/javascript">
				(function (w, d, n, s, t) {
				if (window.bBlockAds) return;
				w[n] = w[n] || [];
				w[n].push(function () {
				Ya.Context.AdvManager.render({
				blockId: 'R-A-489599-1',
				renderTo: 'yandex_rtb_R-A-489599-1',
				async: true,
				});
				});
				t = d.getElementsByTagName('script')[0];
				s = d.createElement('script');
				s.type = 'text/javascript';
				s.src = '//an.yandex.ru/system/context.js';
				s.async = true;
				t.parentNode.insertBefore(s, t);
				})(this, this.document, 'yandexContextAsyncCallbacks');
			</component>
		</div>
	</AppSection>

	<AppSection v-if="!props.isDisabled" class="max-lg:hidden">
		<h2 class="text-5xl font-bold uppercase">Как начать?</h2>
	</AppSection>

	<AppSection v-if="!props.isDisabled" class="text-xl text-black font-medium bg-white max-lg:hidden">
		<div class="flex flex-wrap justify-evenly gap-4">
			<div class="flex items-center gap-1">
				<IconCursor class="h-12 text-gray-300"/>
				<span>Открой</span>
			</div>
			<div class="flex items-center gap-1">
				<IconMouse class="h-12 text-gray-300"/>
				<span>Попробуй</span>
			</div>
			<div class="flex items-center gap-1">
				<IconSmile class="h-12 text-gray-300"/>
				<span>Пользуйся</span>
			</div>
		</div>
	</AppSection>

	<AppSection v-if="!props.isDisabled">
		<div class="grid grid-cols-[repeat(auto-fit,minmax(11rem,1fr))] gap-4">
			<slot name="prices"/>
		</div>
	</AppSection>

	<AppSection v-if="!props.isDisabled">
		<AppCard class="flex flex-col items-center w-full max-w-[30rem] p-8 mx-auto space-y-6">
			<IconDevices class="w-24"/>
			<h2 class="text-3xl font-bold">{{ props.title }}</h2>
			<div class="space-y-2">
				<p>Расширение подходит для большинства браузеров (Chrome, Яндекс.Браузер, Opera...)</p>
				<p>
					Для установки расширения на смартфон воспользуйтесь
					<AppLink
						:to="props.instructionUrl"
						target="_blank"
						rel="nofollow"
						color="aqua"
					>
						инструкцией
					</AppLink>
				</p>
			</div>

			<AppButton
				class="mx-auto"
				:to="Link.Download"
				:color="ButtonColor.Green"
				:size="ButtonSize.Large"
			>
				Перейти к расширениям
			</AppButton>
		</AppCard>
	</AppSection>

	<AppSection>
		<p class="text-sm text-gray-300">
			Небольшая оптимизация контента:
			<br>
			<slot name="keywords"/>
		</p>
	</AppSection>
</template>

<script setup lang="ts">
import TheSectionMain from '@/components/TheSectionMain.vue'
import AppSection from '@/components/AppSection.vue'
import AppLink from '@/components/AppLink.vue'
import IconCursor from '@/components/icons/IconCursor.vue'
import IconMouse from '@/components/icons/IconMouse.vue'
import IconSmile from '@/components/icons/IconSmile.vue'
import AppButton from '@/components/AppButton.vue'
import IconDevices from '@/components/icons/IconDevices.vue'
import AppCard from '@/components/AppCard.vue'
import { ButtonColor, ButtonSize } from '@/utils/button'
import { Link } from '@/utils/link'

interface Props {
	title: string
	instructionUrl: string
	backgroundStyle: string
	imageUrl: string
  isDisabled?: boolean
}

const props = defineProps<Props>()
</script>
