<template>
	<TheMainSection class="min-h-screen">
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
		<div class="ads mx-auto">
			<!-- Yandex.RTB R-A-489599-4 -->
			<div id="yandex_rtb_R-A-489599-4"></div>
			<component is="script" type="text/javascript">
				(function (w, d, n, s, t) {
				w[n] = w[n] || []
				w[n].push(function () {
				Ya.Context.AdvManager.render({
				blockId: 'R-A-489599-4',
				renderTo: 'yandex_rtb_R-A-489599-4',
				async: true,
				})
				})
				t = d.getElementsByTagName('script')[0]
				s = d.createElement('script')
				s.type = 'text/javascript'
				s.src = '//an.yandex.ru/system/context.js'
				s.async = true
				t.parentNode.insertBefore(s, t)
				})(this, this.document, 'yandexContextAsyncCallbacks')
			</component>
		</div>
		<div class="flex max-lg:flex-col gap-x-4 gap-y-8 [&>*]:flex-1">
			<div class="flex flex-col space-y-8 text-left">
				<h2 class="text-3xl font-bold">Смотрите сами</h2>
				<p>
					Быстрое полуавтоматическое выполнение заданий с вашим участием. Наша программа знает все
					<b>ответы</b> на
					<b>Веб-Грамотей</b>, и вам даже не нужно прикладывать особых усилий, чтобы всё работало.
					<br>
					Просто откройте Веб-Грамотей и расширение само выделит верный ответ.
					<br>
					Кроме того, что наш сервис содержит все <b>ответы Веб-Грамотей</b>, он может находить
					ответы на специальные задания для
					9-го класса, так как ответы <b>ОРФО-9</b> и упражнений на пунктуацию так же включены в
					базу данных программы.
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
				<img class="m-auto rounded-3xl shadow-xl" src="/assets/images/wg.png" alt="Веб-Грамотей расширение">
			</div>
		</div>
		<div class="ads mx-auto">
			<!-- Yandex.RTB R-A-489599-1 -->
			<div id="yandex_rtb_R-A-489599-1" style="width: fit-content;"></div>
			<component is="script" type="text/javascript">
				(function (w, d, n, s, t) {
				if (window.bBlockAds) return
				w[n] = w[n] || []
				w[n].push(function () {
				Ya.Context.AdvManager.render({
				blockId: 'R-A-489599-1',
				renderTo: 'yandex_rtb_R-A-489599-1',
				async: true,
				})
				})
				t = d.getElementsByTagName('script')[0]
				s = d.createElement('script')
				s.type = 'text/javascript'
				s.src = '//an.yandex.ru/system/context.js'
				s.async = true
				t.parentNode.insertBefore(s, t)
				})(this, this.document, 'yandexContextAsyncCallbacks')
			</component>
		</div>
	</AppSection>
</template>

<script setup lang="ts">
import TheMainSection from '@/components/TheMainSection.vue'
import AppSection from '@/components/AppSection.vue'
import AppLink from '@/components/AppLink.vue'</script>
