<template>
	<header class="header">
		<nav class="header__nav">
			<AppLink class="min-w-max flex items-center" :to="Link.Index">
				<img class="h-9" src="/assets/images/winter-logo.png" alt="DZ-Helper">
				<span class="ml-1 text-3xl font-bold whitespace-nowrap">DZ-Helper</span>
			</AppLink>

			<input class="hidden" id="header__menu-toggle" type="checkbox"/>
			<label class="header__burger" for="header__menu-toggle">
				<span
					v-for="i in 3"
					class="transition-transform h-[3px] rounded-2xl bg-white"
					:class="{'origin-left': i % 2}"
				/>
			</label>

			<div class="header__links">
				<AppButton v-show="!store.getters.isLoggedIn" class="max-lg:mb-2" @click="login">
					<IconLogin class="w-4 mr-1"/>
					<span>Авторизоваться</span>
				</AppButton>
				<AppButton v-show="store.getters.isLoggedIn" class="max-lg:mb-2" @click="logout">
					<IconLogout class="w-4 mr-1"/>
					<span>Выйти</span>
				</AppButton>
				<AppLink v-show="store.getters.isLoggedIn" class="max-lg:p-2" :to="Link.User">
					<IconUser class="w-4 mr-1"/>
					<span>Кабинет</span>
				</AppLink>

				<AppLink class="max-lg:p-2" :to="Link.Stock">
					<IconCursor class="w-4 mr-1"/>
					<span>Акции</span>
				</AppLink>

				<div class="group relative flex-col py-2">
					<div class="flex items-center cursor-pointer py-2">
						<IconInfo class="min-w-[1rem] mr-1"/>
						<span>Расширения</span>
						<IconArrowDown class="min-w-[1rem]"/>
					</div>
					<div class="header__extensions">
						<AppLink class="p-1" :to="Link.Webgramotei">Веб-Грамотей+</AppLink>
						<AppLink class="p-1" :to="Link.ReshuEGE">РешуОГЭ/ЕГЭ+</AppLink>
						<AppLink class="p-1" :to="Link.Yaklass">ЯКласс+</AppLink>
						<AppLink class="p-1" :to="Link.Uchiru">Учи.ру+</AppLink>
						<AppLink class="p-1" :to="Link.UzTest">UzTest+</AppLink>
						<AppLink class="p-1" :to="Link.Resh">РЭШ+</AppLink>
					</div>
				</div>

				<AppButton class="tracking-[1px]" :to="Link.Download" color="green">
					<IconDownload class="w-4 mr-1"/>
					<span>Скачать расширения</span>
				</AppButton>
			</div>
		</nav>
	</header>
</template>

<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import AppLink from '@/components/AppLink.vue'
import IconLogout from '@/components/icons/IconLogout.vue'
import IconLogin from '@/components/icons/IconLogin.vue'
import IconCursor from '@/components/icons/IconCursor.vue'
import IconInfo from '@/components/icons/IconInfo.vue'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'
import IconDownload from '@/components/icons/IconDownload.vue'
import IconUser from '@/components/icons/IconUser.vue'
import { Link } from '@/utils/link'
import { useStore } from '@/store'
import { login, logout } from '@/utils/auth'
import { onMounted } from 'vue'

const store = useStore()

onMounted(() => {
	document.querySelectorAll('.header__links a').forEach(value =>
		value.addEventListener('click', () =>
			document.querySelector<HTMLLabelElement>('.header__burger')!.click(),
		),
	)
})
</script>

<style scoped lang="scss">
.header {
	@apply
	fixed w-full min-h-[4rem] px-3 py-1 flex bg-blue shadow-xl z-50
	lg:px-[50px];

	&__nav {
		@apply
		w-full my-auto flex justify-between
		lg:space-x-4;
	}

	&__burger {
		@apply
		w-[35px] h-[27px] p-3 m-auto mr-0 box-content flex flex-col justify-between
		lg:hidden;
	}

	&__links {
		@apply
		max-lg:absolute left-0 top-16 w-full max-lg:py-5 flex max-lg:flex-col items-center flex-wrap text-sm font-medium lg:bg-transparent bg-blue
		transition-transform will-change-transform max-lg:[transform:scaleY(0)] origin-top

		lg:w-max lg:my-auto lg:justify-end lg:space-x-4;
	}

	&__extensions {
		@apply
		w-full  p-2 flex flex-col space-y-2 text-[0.9em] bg-blue rounded-b-2xl
		group-hover:scale-y-100 transition-transform origin-top will-change-transform
		lg:absolute lg:space-y-1 lg:left-0 lg:top-12
		lg:scale-y-0;
	}
}
</style>
