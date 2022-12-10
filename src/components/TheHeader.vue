<template>
	<header class="header">
		<nav class="header__nav">
			<AppLink class="min-w-max flex items-center" to="/">
				<img class="h-9" src="/assets/images/logo.png" alt="DZ-Helper">
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
				<AppButton to="/vklogin.php" is-external-link>
					<IconLogin class="w-4 mr-1"/>
					<span>Авторизоваться</span>
				</AppButton>
				<AppButton class="!hidden">
					<IconLogout class="w-4 mr-1"/>
					<span>Выйти</span>
				</AppButton>
				<AppLink class="!hidden" to="/user.php">
					<IconUser class="w-4 mr-1"/>
					<span>Кабинет</span>
				</AppLink>

				<AppLink to="/stock.html">
					<IconCursor class="w-4 mr-1"/>
					<span>Акции</span>
				</AppLink>

				<div class="group relative flex-col py-2">
					<div class="flex items-center cursor-pointer">
						<IconInfo class="min-w-[1rem] mr-1"/>
						<span>Расширения</span>
						<IconArrowDown class="min-w-[1rem]"/>
					</div>
					<div class="header__extensions">
						<AppLink to="/webgramotei.html">Веб-Грамотей+</AppLink>
						<AppLink to="/reshu.html">РешуОГЭ/ЕГЭ+</AppLink>
						<AppLink to="/yaklass.html">ЯКласс+</AppLink>
						<AppLink to="/uchiru.html">Учи.Ру+</AppLink>
						<AppLink to="/uztest.html">UzTest+</AppLink>
						<AppLink to="/resh.html">РЭШ+</AppLink>
					</div>
				</div>

				<AppButton class="tracking-[1px]" to="/download.html" color="green">
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
import IconUser from '@/components/icons/IconUser.vue'</script>

<style scoped lang="scss">
.header {
	@apply
	fixed w-full min-h-[70px] px-3 py-1 flex bg-blue shadow-xl z-50
	lg:px-[50px];

	&__nav {
		@apply
		w-full my-auto flex justify-between bg-inherit
		lg:space-x-4;
	}

	&__burger {
		@apply
		w-[35px] h-[27px] p-3 m-auto mr-0 box-content flex flex-col justify-between
		lg:hidden;
	}

	&__links {
		@apply
		absolute w-full left-0 top-[70px] pb-5 flex flex-col items-center flex-wrap text-sm font-medium bg-inherit
		transition-transform will-change-transform scale-y-0 origin-top

		lg:static lg:w-max lg:p-0 lg:my-auto lg:flex-row lg:justify-end lg:space-x-4
		lg:scale-y-100;
	}

	&__extensions {
		@apply
		group-hover:scale-y-100 lg:absolute lg:scale-y-0 top-[50px] left-0 flex flex-col p-2 rounded-b-2xl lg:space-y-1 space-y-2 origin-top transition-transform bg-blue will-change-transform text-[0.9em] w-full;
	}
}
</style>
