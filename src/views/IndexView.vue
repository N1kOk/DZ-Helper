<template>
	<div>
		<h1 class="mb-5 text-3xl font-bold">Автоматизированное решение ДЗ</h1>
		<span>Наш сервис поможет вам просто и максимально быстро выполнить любые задания на сайтах, и сэкономит много времени.</span>
	</div>
	<div
		class="flex flex-wrap justify-evenly items-top -m-3 [&_.text]:font-medium [&_.text]:text-medium [&_.text]:leading-none [&>*]:flex [&>*]:flex-2 [&>*]:flex-col [&>*]:p-3 [&_.icon]:text-[5rem] sm:[&>*]:flex-1">
		<div>
			<span class="icon material-symbols-rounded before:content-['\ea0b']"></span>
			<span class="text">Автоматический<br>поиск ответов</span>
		</div>
		<div>
			<span class="icon material-symbols-rounded before:content-['\eb9b']"></span>
			<span class="text">Высокая скорость<br>работы</span>
		</div>
		<div>
			<span class="icon material-symbols-rounded before:content-['\e39e']"></span>
			<span class="text">Автоматическое исправление<br>ошибок</span>
		</div>
		<div>
			<span class="icon material-symbols-rounded before:content-['\e8dc']"></span>
			<span class="text">Лёгкость в<br>использовании</span>
		</div>
	</div>

	<RouterLink to="/services"
	            class="btn inline-block mx-auto mt-3 w-max rounded-full bg-green text-sm tracking-[1px]">
		Перейти к сервисам
	</RouterLink>
</template>
