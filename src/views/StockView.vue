<template>
	<AppSection>
		<div class="ads mx-auto">
			<!-- Yandex.RTB R-A-489599-6 -->
			<div id="yandex_rtb_R-A-489599-6"></div>
			<component is="script" type="text/javascript">
				(function (w, d, n, s, t) {
				if (window.bBlockAds) return;
				w[n] = w[n] || [];
				w[n].push(function () {
				Ya.Context.AdvManager.render({
				blockId: "R-A-489599-6", renderTo: "yandex_rtb_R-A-489599-6", async: true
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
		<hr>
		<div>
			<h1>Ежедневный бонус</h1>
			<br>
			<p>Каждый день заходите на наш сайт, чтобы получить:</p>
			<br>
			<p class="max-w-max mx-auto text-left">
				<span class="text-yellow">+5 коинов</span>
			</p>
			<br>
			<p>Бонус действует только для пользователей с <span class="text-yellow">VIP-Аккаунтом</span></p>
			<p>Для получения бонуса необходимо провести на сайте <span class="text-aqua">10 минут</span></p>
			<p>Прогресс виден в левом нижнем углу при загрузке страницы</p>
		</div>
		<hr>
		<div>
			<h1>Баланс за репост</h1>
			<br>
			<p>Если сделаете репост записи, вы получите:</p>
			<br>
			<p class="text-yellow">+100 коинов</p>
			<br>
			<p>
				Репост:
				<AppLink
					:to="`https://vk.com/wall-164600218_${repostPostId}`"
					rel="nofollow"
					target="_blank"
					color="aqua"
				>
					vk.com/dzhelper1
				</AppLink>
			</p>
			<br>
			<AppButton @click="check('repost')" color="green" size="xl">Проверить репост</AppButton>
			<br><br>
			<p>
				Не удаляйте репост, иначе с вашего баланса будет списано <span class="text-yellow">100 коинов</span>.
			</p>
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
				blockId: "R-A-489599-1", renderTo: "yandex_rtb_R-A-489599-1", async: true
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
		<hr>
		<div>
			<h1>Баланс за лайки</h1>
			<br>
			<p>Если поставите лайки к первым десяти постам, вы получите:</p>
			<br>
			<p class="text-yellow">+10 коинов</p>
			<br>
			<p>
				Группа:
				<AppLink
					to="https://vk.com/dzhelper1"
					rel="nofollow"
					target="_blank"
					color="aqua"
				>
					vk.com/dzhelper1
				</AppLink>
			</p>
			<br>
			<AppButton @click="check('likes')" color="green" size="xl">Проверить лайки</AppButton>
		</div>
		<hr>
		<div>
			<h1>Баланс за подписку</h1>
			<br>
			<p>Если вступите в нашу группу, вы получите:</p>
			<br>
			<p class="text-yellow">+10 коинов</p>
			<br>
			<p>
				Группа:
				<AppLink
					to="https://vk.com/dzhelper1"
					rel="nofollow"
					target="_blank"
					color="aqua"
				>
					vk.com/dzhelper1
				</AppLink>
			</p>
			<br>
			<AppButton @click="check('subscribe')" color="green" size="xl">Проверить подписку</AppButton>
		</div>
		<hr>
		<div>
			<h1>Подписка на Telegram</h1>
			<br>
			<p>
				Вы получите 25 коинов после подписки на наш Telegram канал
				<br class="max-lg:hidden">
				Подробности в 4 абзаце поста по ссылке ниже
			</p>
			<br>
			<p class="text-yellow">+25 коинов</p>
			<br>
			<p>
				Телеграм:
				<AppLink
					to="https://t.me/dzhelperpublic/103"
					rel="nofollow"
					target="_blank"
					color="aqua"
				>
					t.me/dzhelperpublic
				</AppLink>
			</p>
		</div>
		<hr>
		<div class="ads mx-auto">
			<!-- Yandex.RTB R-A-489599-4 -->
			<div id="yandex_rtb_R-A-489599-4" style="width: fit-content;"></div>
			<component is="script"
			           type="text/javascript"> (function (w, d, n, s, t) {
				if (window.bBlockAds) return;
				w[n] = w[n] || [];
				w[n].push(function () {
				Ya.Context.AdvManager.render({
				blockId: "R-A-489599-4", renderTo: "yandex_rtb_R-A-489599-4", async: true
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
		<hr>
		<p>
			Дополнительный способ пополнять баланс -
			<AppLink
				to="https://vk.com/@dzhelper1-subpost-advapps"
				rel="nofollow"
				target="_blank"
				color="aqua"
			>
				vk.com/dzhelper1
			</AppLink>
		</p>
		<hr>
		<p>
			Можно получать бесплатные коины с помощью друзей, подробнее
			<AppLink
				to="/ref.html"
				rel="nofollow"
				color="aqua"
			>
				здесь
			</AppLink>
		</p>
		<hr>
		<p>
			Также вы можете записать видео-инструкцию к одному из наших расширений, выложить в Тик-Ток или любую
			другую соц. сеть и отправить ссылку на ролик в
			<AppLink
				to="https://vk.me/dzhelper1"
				target="_blank"
				rel="nofollow"
				color="aqua"
			>
				группу
			</AppLink>
			<br class="max-lg:hidden">

			Вы получите за это <span class="text-yellow">от 50 до 1000 коинов</span>
		</p>
		<hr>
		<p>
			Ещё пополнить свой баланс бесплатно можно участвуя в других конкурсах и акциях в
			<AppLink
				to="https://vk.com/dzhelper1"
				target="_blank"
				rel="nofollow"
				color="aqua"
			>
				нашей группе ВКонтакте
			</AppLink>
		</p>
		<hr>
		<p>
			Мы будем очень благодарны, если вы оставите
			<AppLink
				to="https://vk.com/topic-164600218_39651716"
				target="_blank"
				rel="nofollow"
				color="aqua"
			>
				отзыв о нас
			</AppLink>
		</p>
	</AppSection>
</template>

<script setup lang="ts">
import AppSection from '@/components/AppSection.vue'
import AppButton from '@/components/AppButton.vue'
import AppLink from '@/components/AppLink.vue'
import { useStore } from '@/store'
import Swal from 'sweetalert2'
import { get } from '@/utils/helpers'

const repostPostId = 154070

const store = useStore()

const fns = {
	repost: checkRepost,
	likes: checkLikes,
	subscribe: checkSubscribe,
} as const

function check(type: keyof typeof fns) {
	if (!store.getters.isLoggedIn) {
		Swal.fire('Ошибка', 'Сначала необходимо авторизоваться', 'error')
		return
	}

	fns[type]()
}

type Response = 'ok' | 'stop' | 'not_found' | 'refresh' | 'private'

async function checkRepost() {
	const res = await get<Response>(`/stock/chrepost.php?postid=${repostPostId}`)

	switch (res) {
		case 'ok':
			await Swal.fire('Награда', 'На ваш баланс зачислено 100 коинов', 'success')
			break
		case 'stop':
			await Swal.fire('Ошибка', 'Вы уже получали награду', 'error')
			break
		case 'not_found':
			await Swal.fire('Ошибка', 'Репост не найден', 'error')
			break
		case 'refresh':
			await Swal.fire('Ошибка', 'Произошла ошибка. Пожалуйста, повторите попытку', 'error')
			location.assign('/db/auth.php')
			break
		case 'private':
			await Swal.fire('Ошибка', 'Мы не можем начислить вам награду, так как у вашего профиля меньше 50 друзей, либо профиль является приватным', 'error')
			break
	}
}

async function checkLikes() {
	const res = await get<Response>('/stock/chlikes.php')

	switch (res) {
		case 'ok':
			await Swal.fire('Награда', 'На ваш баланс зачислено 10 коинов', 'success')
			break
		case 'stop':
			await Swal.fire('Ошибка', 'Вы уже получали награду', 'error')
			break
		case 'not_found':
			await Swal.fire('Ошибка', 'Лайки не найдены', 'error')
			break
		case 'refresh':
			await Swal.fire('Ошибка', 'Произошла ошибка. Пожалуйста, повторите попытку', 'error')
			location.assign('/db/auth.php')
			break
		case 'private':
			await Swal.fire('Ошибка', 'Мы не можем проверить наличие лайков, так как ваш профиль является приватным', 'error')
			break
	}
}

async function checkSubscribe() {
	const res = await get<Response>('/stock/chsubscribe.php')

	switch (res) {
		case 'ok':
			await Swal.fire('Награда', 'На ваш баланс зачислено 10 коинов', 'success')
			break
		case 'stop':
			await Swal.fire('Ошибка', 'Вы уже получали награду', 'error')
			break
		case 'not_found':
			await Swal.fire('Ошибка', 'Подписка не найдена', 'error')
			break
		case 'refresh':
			await Swal.fire('Ошибка', 'Произошла ошибка. Пожалуйста, повторите попытку', 'error')
			location.assign('/db/auth.php')
			break
		case 'private':
			await Swal.fire('Ошибка', 'Мы не можем проверить наличие подписки, так как ваш профиль является приватным', 'error')
			break
	}
}
</script>
