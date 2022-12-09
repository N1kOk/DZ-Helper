<template>
	<header class="flex fixed px-3 py-1 w-full min-h-[70px] bg-blue md:px-[50px] shadow-xl z-50">
		<nav class="flex justify-between w-full my-auto bg-inherit md:space-x-4">
			<RouterLink class="flex items-center min-w-max" to="/">
				<img class="h-9" src="/assets/images/logo.png" alt="DZ-Helper">
				<span class="ml-1 font-bold whitespace-nowrap text-[1.5rem]">DZ-Helper</span>
			</RouterLink>

			<input class="hidden" id="header__menu-toggle" type="checkbox"/>
			<label
				class="header__burger [&>*]:transition-transform [&>*]:h-[3px] [&>*]:rounded-2xl [&>*]:bg-white m-auto mr-0 p-[10px] box-content flex flex-col justify-between w-[35px] h-[27px] md:hidden"
				for="header__menu-toggle"
			>
				<span class="origin-left"></span>
				<span></span>
				<span class="origin-left"></span>
			</label>

			<div
				class="header__links text-sm md:text-[16px] [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:py-2 transition-transform will-change-transform [transform:scaleY(0)] origin-top absolute top-[70px] left-0 flex flex-wrap flex-col items-center w-full pb-5 bg-inherit md:static md:flex-row md:justify-end md:scale-y-100 md:p-0 md:my-auto md:space-x-4 md:w-max font-medium [&>*:not(:last-child)]:min-w-full md:[&>*]:!min-w-max">
				<a class="btn !bg-white/20 !py-1 !min-w-max" id="auth" href="/vklogin.php">
					<span class="material-symbols-rounded before:content-['\ea77'] mr-[5px]"></span>
					Авторизоваться
				</a>
				<RouterLink class="!hidden" id="cabinet" to="/user.php">
					<span class="material-symbols-rounded before:content-['\e7fd'] mr-[5px]"></span>
					Кабинет
				</RouterLink>
				<RouterLink to="/stock.html">
					<span class="material-symbols-rounded before:content-['\e762'] mr-[5px]"></span>
					Акции
				</RouterLink>
				<div class="group relative flex-col">
					<div class="flex cursor-pointer [&>*]:my-auto">
						<span class="material-symbols-rounded before:content-['\e88e'] mr-[5px]"></span>
						<span>Расширения</span>
						<span class="material-symbols-rounded before:content-['\e5c5']"></span>
					</div>
					<div
						class="group-hover:scale-y-100 md:absolute md:scale-y-0 top-[50px] left-0 flex flex-col p-2 rounded-b-2xl md:space-y-1 space-y-2 origin-top transition-transform bg-blue will-change-transform text-[0.9em] w-full">
						<RouterLink to="/webgramotei.html">Веб-Грамотей+</RouterLink>
						<RouterLink to="/reshu.html">РешуОГЭ/ЕГЭ+</RouterLink>
						<RouterLink to="/yaklass.html">ЯКласс+</RouterLink>
						<RouterLink to="/uchiru.html">Учи.Ру+</RouterLink>
						<RouterLink to="/uztest.html">UzTest+</RouterLink>
						<RouterLink to="/resh.html">РЭШ+</RouterLink>
					</div>
				</div>
				<RouterLink
					class="px-3 mx-auto mt-3 w-max rounded-full bg-green !text-white tracking-[1px] md:m-0 !py-1"
					to="/download.html"
				>
					<span class="material-symbols-rounded before:content-['\f090'] mr-[5px]"></span>
					Скачать расширения
				</RouterLink>
			</div>
		</nav>
	</header>
</template>

<script setup lang="ts">
// import { auth } from '@/utils/auth'
</script>