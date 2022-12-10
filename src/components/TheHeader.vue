<template>
	<header class="flex fixed px-3 py-1 w-full min-h-[70px] bg-blue md:px-[50px] shadow-xl z-50">
		<nav class="flex justify-between w-full my-auto bg-inherit md:space-x-4">
			<AppLink class="flex items-center min-w-max" to="/">
				<img class="h-9" src="/assets/images/logo.png" alt="DZ-Helper">
				<span class="ml-1 font-bold whitespace-nowrap text-[1.5rem]">DZ-Helper</span>
			</AppLink>

			<input class="hidden" id="header__menu-toggle" type="checkbox"/>
			<label
				class="w-[35px] h-[27px] m-auto mr-0 p-[10px] box-content flex flex-col justify-between md:hidden"
				for="header__menu-toggle"
			>
				<span
					v-for="i in 3"
					class="transition-transform h-[3px] rounded-2xl bg-white"
					:class="{'origin-left': i % 2}"
				/>
			</label>

			<div
				class="header__links text-sm md:text-[16px] transition-transform will-change-transform [transform:scaleY(0)] origin-top absolute top-[70px] left-0 flex flex-wrap flex-col items-center w-full pb-5 bg-inherit md:static md:flex-row md:justify-end md:scale-y-100 md:p-0 md:my-auto md:space-x-4 md:w-max font-medium [&>*:not(:last-child)]:min-w-full md:[&>*]:!min-w-max"
			>
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
						<IconArrowDown class="min-w-[0.75rem]"/>
					</div>
					<div
						class="group-hover:scale-y-100 md:absolute md:scale-y-0 top-[50px] left-0 flex flex-col p-2 rounded-b-2xl md:space-y-1 space-y-2 origin-top transition-transform bg-blue will-change-transform text-[0.9em] w-full"
					>
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
