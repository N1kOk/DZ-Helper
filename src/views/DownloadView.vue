<template>
	<AppSection>
		<h1>Расширения</h1>
		<div class="grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-4">
			<div
				v-for="card in cards"
				class="flex flex-col items-center gap-8 p-4 rounded-3xl border-2 shadow-xl bg-white/5"
			>
				<div class="flex justify-between items-center w-full gap-2">
					<h2 class="text-2xl font-bold">{{ card.title }}</h2>
					<component :is="card.icon" class="w-12"/>
				</div>

				<div class="flex justify-between w-full gap-2">
					<AppButton
						:to="card.links.instruction"
						target="_blank"
						rel="nofollow"
					>
						Инструкция
					</AppButton>

					<AppButton
						:to="card.links.setup"
						target="_blank"
						rel="nofollow"
						color="green"
					>
						Установить
					</AppButton>
				</div>
			</div>
		</div>

		<hr>

		<div class="ads mx-auto">
			<!-- Yandex.RTB R-A-489599-1 -->
			<div id="yandex_rtb_R-A-489599-1" style="width: fit-content;"></div>
			<component is="script" type="text/javascript">
				(function (w, d, n, s, t) {
				if (window.bBlockAds) return;
				w[n] = w[n] || [];
				w[n].push(function () {
				Ya.Context.AdvManager.render({
				blockId: "R-A-489599-1",
				renderTo: "yandex_rtb_R-A-489599-1",
				async: true
				});
				});
				t = d.getElementsByTagName("script")[0];
				s = d.createElement("script");
				s.type = "text/javascript";
				s.src = "//an.yandex.ru/system/context.js";
				s.async = true;
				t.parentNode.insertBefore(s, t);
				})(this, this.document, "yandexContextAsyncCallbacks");
			</component>
		</div>
	</AppSection>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import AppButton from '@/components/AppButton.vue'
import IconRocket from '@/components/icons/IconRocket.vue'
import IconTarget from '@/components/icons/IconTarget.vue'
import IconLike from '@/components/icons/IconLike.vue'
import IconCheck from '@/components/icons/IconCheck.vue'
import IconMath from '@/components/icons/IconMath.vue'
import IconSum from '@/components/icons/IconSum.vue'
import AppSection from '@/components/AppSection.vue'

interface Card {
	icon: Component
	title: string
	links: {
		setup: string
		instruction: string
	}
}

const cards: Card[] = [
	{
		icon: IconCheck,
		title: 'Веб-Грамотей+',
		links: {
			setup: 'https://chrome.google.com/webstore/detail/wg-stealth/gmojcbijaafhccilpieladabaiendmmd',
			instruction: 'https://vk.com/@dzhelper1-wg-stealh',
		},
	},
	{
		icon: IconRocket,
		title: 'Учи.ру+',
		links: {
			setup: 'https://chrome.google.com/webstore/detail/uchihelper/fpdmlanpbgokpkcmkojldkjlajcnajko',
			instruction: 'https://vk.com/@dzhelper1-uchiruplus',
		},
	},
	{
		icon: IconTarget,
		title: 'ЯКласс+',
		links: {
			setup: 'https://chrome.google.com/webstore/detail/%D0%BE%D1%82%D0%B2%D0%B5%D1%82%D1%8B-%D0%BD%D0%B0-%D1%8F%D0%BA%D0%BB%D0%B0%D1%81%D1%81-%D1%8F%D0%BA%D0%BB%D0%B0%D1%81%D1%81%20/gkdimpanhbihidflnpedojnljpapgmbe?hl=ru',
			instruction: 'https://vk.com/@dzhelper1-yaklassplus',
		},
	},
	{
		icon: IconLike,
		title: 'РЭШ+',
		links: {
			setup: 'https://chrome.google.com/webstore/detail/%D0%BE%D1%82%D0%B2%D0%B5%D1%82%D1%8B-%D0%BD%D0%B0-%D1%80%D1%8D%D1%88-%D1%80%D1%8D%D1%88%20/dfojlcjcmgijemlijicemapllecfnmpk?hl=ru',
			instruction: 'https://vk.com/@dzhelper1-reshplus',
		},
	},
	{
		icon: IconMath,
		title: 'UzTest+',
		links: {
			setup: 'https://chrome.google.com/webstore/detail/%D0%BE%D1%82%D0%B2%D0%B5%D1%82%D1%8B-%D0%BA-uztestru-uztest%20/aeookmmgmjgnmfoaiemejdoailigdgag',
			instruction: 'https://vk.com/@dzhelper1-uztestplus',
		},
	},
	{
		icon: IconSum,
		title: 'РешуОГЭ/ЕГЭ+',
		links: {
			setup: 'https://chrome.google.com/webstore/detail/%D0%BE%D1%82%D0%B2%D0%B5%D1%82%D1%8B-%D0%BA-%D1%80%D0%B5%D1%88%D1%83-%D0%BE%D0%B3%D1%8D-%D0%B8-%D1%80%D0%B5%D1%88%D1%83/ilocfjnmkngcmoonmlpmdiigiddlloea?hl=ru',
			instruction: 'https://vk.com/@dzhelper1-reshugiaplus',
		},
	},
]
</script>