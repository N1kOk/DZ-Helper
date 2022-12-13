<template>
	<TheMainSection class="lg:min-h-screen">
		<template #title>
			Веб-Грамотей
		</template>
		<template #description>
			С нашим сервисом для браузера вы легко сможете выполнять задания на сайте <b>Веб-Грамотей</b>
			<br class="max-lg:hidden">
			и всегда получать хорошие оценки за домашние задания.
		</template>
	</TheMainSection>

	<AppSection class="[background:linear-gradient(45deg,#46d11b,#149dcc)]">
		<div class="flex max-lg:flex-col gap-x-4 gap-y-8 [&>*]:flex-1">
			<div class="flex flex-col space-y-8 text-left">
				<h2 class="text-3xl font-bold">Смотрите сами</h2>
				<p>
					Быстрое полуавтоматическое выполнение заданий с вашим участием. Наша программа знает все
					<b>ответы</b> на <b>Веб-Грамотей</b>, и вам даже не нужно прикладывать особых усилий,
					чтобы всё работало.
					<br>
					Просто откройте Веб-Грамотей и расширение само выделит верный ответ.
					<br>
					Кроме того, что наш сервис содержит все <b>ответы Веб-Грамотей</b>, он может находить
					ответы на специальные задания для 9-го класса, так как ответы <b>ОРФО-9</b>
					и упражнений на пунктуацию так же включены в базу данных программы.
				</p>
				<p>
					Инструкцию для словаря Веб-Грамотей можно посмотреть
					<AppLink
						to="https://vk.com/@dzhelper1-wgs"
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
					src="/assets/images/wg.png"
					alt="Веб-Грамотей расширение"
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

	<AppSection class="max-lg:hidden">
		<h2 class="text-5xl font-bold uppercase">Как начать?</h2>
	</AppSection>

	<AppSection class="text-xl text-black font-medium bg-white max-lg:hidden">
		<div class="flex flex-wrap justify-evenly gap-4">
			<div class="flex items-center">
				<IconCursor class="h-12 text-gray-400"/>
				<span>Открой</span>
			</div>
			<div class="flex items-center">
				<IconMouse class="h-12 text-gray-400"/>
				<span>Попробуй</span>
			</div>
			<div class="flex items-center">
				<IconSmile class="h-12 text-gray-400"/>
				<span>Пользуйся</span>
			</div>
		</div>
	</AppSection>

	<AppSection>
		<div class="grid grid-cols-[repeat(auto-fit,minmax(175px,1fr))] gap-4">
			<div class="flex flex-col gap-6 min-h-full p-4 bg-white/5 border-2 rounded-3xl shadow-xl">
				<div class="text-left">
					<span class="text-5xl font-bold">0</span><span class="text-4xl">₽</span>
				</div>
				<div class="text-left">
					<p>30 слов</p>
					<p class="text-sm text-gray-300">&nbsp;или</p>
					<div class="flex flex-col w-max text-center">
						<span>15 предложений</span>
						<span class="text-xs -mt-1 text-gray-300">(пунктуация)</span>
					</div>
				</div>
				<hr>
				<p class="flex-1 text-sm">Попробуй наш продукт в действии и убедись в его качестве</p>
				<AppButton
					class="min-w-full uppercase"
					:to="Link.Download"
					color="green"
					size="xl"
				>
					Испытать
				</AppButton>
			</div>
			<div class="flex flex-col gap-6 min-h-full p-4 bg-white/5 border-2 rounded-3xl shadow-xl">
				<div class="text-left">
					<span class="text-5xl font-bold">0</span><span class="text-4xl">₽</span>
				</div>
				<div class="text-left">
					<div class="flex items-center text-left">
						<span class="material-symbols-rounded before:content-['\eb3d']"></span>
						<span>&nbsp;слов</span>
					</div>
					<p class="text-sm text-gray-300">&nbsp;или</p>
					<div class="flex flex-col w-max text-center">
						<div class="flex items-center text-left">
							<span class="material-symbols-rounded before:content-['\eb3d']"></span>
							<span>&nbsp;предложений</span>
						</div>
						<span class="text-xs -mt-1 text-gray-300">(пунктуация)</span>
					</div>
				</div>
				<hr>
				<p class="flex-1 text-sm">Есть возможность заработать коины совершенно бесплатно</p>
				<AppButton
					class="min-w-full uppercase"
					:to="Link.Stock"
					color="blue"
					size="xl"
				>
					Заработать
				</AppButton>
			</div>
			<div class="flex flex-col gap-6 min-h-full p-4 bg-white/5 border-2 rounded-3xl shadow-xl">
				<div class="text-left">
					<span class="text-5xl font-bold">70</span><span class="text-4xl">₽</span>
				</div>
				<div class="text-left">
					<p>100 слов</p>
					<p class="text-sm text-gray-300">&nbsp;или</p>
					<div class="flex flex-col w-max text-center">
						<span>50 предложений</span>
						<span class="text-xs -mt-1 text-gray-300">(пунктуация)</span>
					</div>
				</div>
				<hr>
				<p class="flex-1 text-sm">Приобрети коины сразу и ни в чём себе не отказывай!</p>
				<AppButton
					class="min-w-full font-medium uppercase"
					:to="Link.Buy"
					color="yellow"
					size="xl"
				>
					Купить
				</AppButton>
			</div>
		</div>
	</AppSection>

	<AppSection>
		<div
			class="flex flex-col w-full max-w-[30rem] p-8 mx-auto space-y-6 bg-white/5 border-2 shadow-xl rounded-3xl"
		>
			<span class="material-symbols-rounded before:content-['\e912'] !text-[125px]"></span>
			<h2 class="text-3xl font-bold">Веб-Грамотей</h2>
			<div class="space-y-2">
				<p>Расширение подходит для большинства браузеров (Chrome, Яндекс.Браузер, Opera...)</p>
				<p>
					Для установки расширения на смартфон воспользуйтесь
					<AppLink
						to="https://vk.com/@dzhelper1-wgs"
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
				color="green"
				size="xl"
			>
				Перейти к расширениям
			</AppButton>
		</div>
	</AppSection>

	<AppSection>
		<p class="text-sm text-gray-300">
			Небольшая оптимизация контента:
			<br>
			Web-Gramotei, взлом веб-грамотей, веб-грамотей ответы, взлом орфо 9, как взломать веб-грамотей,
			как сделать быстро
			веб-грамотей, как взломать орфо 9, как быстро сделать орфо 9, веб грамотей решение, решение орфо
			9, орфо9, орфо тренажер
			9, орфо тренажер 9 ответы, орфо 9 ответы на упражнения, программа орфо 9, ответы на орфо
			тренажер 9 класс
		</p>
	</AppSection>
</template>

<script setup lang="ts">
import TheMainSection from '@/components/TheMainSection.vue'
import AppSection from '@/components/AppSection.vue'
import AppLink from '@/components/AppLink.vue'
import IconCursor from '@/components/icons/IconCursor.vue'
import IconMouse from '@/components/icons/IconMouse.vue'
import IconSmile from '@/components/icons/IconSmile.vue'
import AppButton from '@/components/AppButton.vue'
import { Link } from '@/router'</script>
