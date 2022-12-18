import { getCorrectUrl, Link } from '@/utils/link'
import type { RouteRecordRaw } from 'vue-router'

export const routes: readonly RouteRecordRaw[] = [
	{
		path: getCorrectUrl(Link.Index),
		component: () => import('@/views/IndexView.vue'),
		meta: {
			title: 'Решение Веб-Грамотей (ОРФО-9), Учи.Ру, UzTest и ЯКласс',
			description: 'Мы реализовали инновационное программное решение, благодаря которому вы сможете быстро и без труда выполнять задания на сайтах Веб-Грамотей (ОРФО-9), UchiRu, UzTest и ЯКласс.',
			keywords: 'Веб-Грамотей, учи ру, uztest, веб-грамотей ответы, учи ру ответы, uztest ответы, веб-грамотей взлом, учи ру взлом, uztest взлом, гдз веб-грамотей, гдз учи ру, гдз uztest, орфо 9, взлом орфо 9, как сделать быстро орфо 9, гдз орфо 9, орфо 9 ответы, решение орфо 9, решение веб-грамотей, решение учи ру, решение uztest, ЯКласс ответы, ЯКласс взлом, ЯКласс решение, гдз ЯКласс',
		},
	},
	{
		path: getCorrectUrl(Link.Ref),
		component: () => import('@/views/RefView.vue'),
		meta: {
			title: 'Реферальная программа',
			isRequiredAuth: true,
		},
	},
	{
		path: getCorrectUrl(Link.Buy),
		component: () => import('@/views/BuyView.vue'),
		meta: {
			title: 'Пополнение баланса',
			isRequiredAuth: true,
		},
	},
	{
		path: getCorrectUrl(Link.User),
		component: () => import('@/views/UserView.vue'),
		meta: {
			title: 'Личный кабинет',
			isRequiredAuth: true,
		},
	},
	{
		path: getCorrectUrl(Link.Success),
		component: () => import('@/views/SuccessView.vue'),
		meta: {
			title: 'Спасибо за покупку!',
		},
	},
	{
		path: getCorrectUrl(Link.Stock),
		component: () => import('@/views/StockView.vue'),
		meta: {
			title: 'Акции',
			description: 'Вы можете получить бесплатный баланс и начать работать бесплатно прямо сейчас!',
		},
	},
	{
		path: getCorrectUrl(Link.Login),
		component: () => import('@/views/LoginView.vue'),
		meta: {
			title: 'Авторизация',
		},
	},
	{
		path: getCorrectUrl(Link.Download),
		component: () => import('@/views/DownloadView.vue'),
		meta: {
			title: 'Расширения',
			description: 'На данной странице вы можете скачать наши расширения.',
		},
	},
	{
		path: getCorrectUrl(Link.Webgramotei),
		component: () => import('@/views/extensions/WebGramoteiView.vue'),
		meta: {
			title: 'Все ответы на Веб-Грамотей (ОРФО-9)!',
			description: 'С нашим расширением для браузера вы легко сможете выполнять упражнения на сайте Веб-Грамотей и всегда получать хорошие оценки за домашние задания.',
			keywords: 'Веб-Грамотей, веб-грамотей ответы, веб-грамотей взлом, как сделать быстро веб-грамотей, гдз веб-грамотей, орфо 9, взлом орфо 9, как сделать быстро орфо 9, гдз орфо 9, орфо 9 ответы, решение орфо 9, решение веб-грамотей, Web-Gramotei, взлом веб-грамотей, веб-грамотей ответы, взлом орфо 9, как взломать веб-грамотей, как сделать быстро веб-грамотей, как взломать орфо 9, как быстро сделать орфо 9, веб грамотей решение, решение орфо 9, орфо9, орфо тренажер 9, орфо тренажер 9 ответы, орфо 9 ответы на упражнения, программа орфо 9, ответы на орфо тренажер 9 класс',
		},
	},
	{
		path: getCorrectUrl(Link.ReshuEGE),
		component: () => import('@/views/extensions/ReshuEGEView.vue'),
		meta: {
			title: 'Быстрое решение Решу ОГЭ (Решу ЕГЭ)!',
			description: 'Наше расширение покажет ответы на все задания сайта Решу ОГЭ (Решу ЕГЭ). Никаких сложных кнопок и действий. Установи и пользуйся!',
			keywords: 'решу огэ ответы, решу егэ ответы, решу огэ взлом, решу егэ взлом, гдз решу огэ, гдз решу егэ',
		},
	},
	{
		path: getCorrectUrl(Link.Yaklass),
		component: () => import('@/views/extensions/YaklassView.vue'),
		meta: {
			title: 'Ответы на ЯКласс БЕСПЛАТНО!',
			description: 'С нашим расширением для браузера вы легко сможете решать задания на сайте ЯКласс. Никаких сложных кнопок и действий. Установи и пользуйся!',
			keywords: 'ЯКласс, ЯКласс ответы, ЯКласс взлом, как сделать быстро ЯКласс, гдз ЯКласс, решение ЯКласс, взлом yaklass, yaklass ответы, как взломать yaklass, как сделать быстро yaklass, yaklass решение, yaklass, расширение ЯКласс',
		},
	},
	{
		path: getCorrectUrl(Link.Uchiru),
		component: () => import('@/views/extensions/UchiruView.vue'),
		meta: {
			title: 'Все ответы для Учи.Ру 2023',
			description: 'С нашим расширением для браузера вы легко сможете решать задания на сайте Учи.Ру Никаких сложных кнопок и действий. Установи и пользуйся!',
			keywords: 'Учи Ру, учи ру ответы, учи ру взлом, как сделать быстро учи ру, гдз учи ру, решение учи ру, взлом учи ру, учи ру ответы, как взломать учи ру, как сделать быстро учи ру, учи ру решение, учиру, учиру ответы, учиру взлом, как сделать быстро учиру, гдз учиру, решение учиру, uchi ru ответы, uchi ru взлом, как сделать быстро uchi ru, гдз uchi ru, решение uchi ru',
		},
	},
	{
		path: getCorrectUrl(Link.UzTest),
		component: () => import('@/views/extensions/UzTestView.vue'),
		meta: {
			title: 'Ответы ко всем тестам на UzTest',
			description: 'С нашим расширением для браузера вы легко сможете выполнять задания на сайте UzTest.ru. Установи и пользуйся!',
			keywords: 'uztest, uztest ответы, uztest взлом, как сделать быстро uztest, гдз uztest, решение uztest, взлом uztest, ответы uztest, как взломать uztest, как сделать быстро юзтест, юзтест решение, юзтест, юзтест ответы, юзтест взлом, как сделать быстро юзтест, гдз юзтест, решение юзтест, uztest ru ответы, uztest ru взлом, как сделать быстро uztest ru, гдз uztest ru',
		},
	},
	{
		path: getCorrectUrl(Link.Resh),
		component: () => import('@/views/extensions/ReshView.vue'),
		meta: {
			title: 'Все ответы к заданиям РЭШ 2023',
			description: 'Наше расширение решит для вас в реальном времени все задания на сайте РЭШ. Забудьте о куче заданий и займитесь тем, что действительно важно.',
			keywords: 'РЭШ, РЭШ ответы, РЭШ взлом, гдз РЭШ, решение РЭШ, расширение РЭШ, РЭШ ответы 8 класс, РЭШ ответы 9 класс',
		},
	},
	{
		path: getCorrectUrl(Link.Privacy),
		component: () => import('@/views/PrivacyView.vue'),
		meta: {
			title: 'Политика конфиденциальности',
		},
	},
	{
		path: '/:pathMatch(.*)*',
		component: () => import('@/views/404View.vue'),
		meta: {
			title: 'Страница не найдена',
		},
	},
]