import Swal from 'sweetalert2'
import { ref } from 'vue'

export const isDev = location.hostname === '127.0.0.1'

export const baseUrl = isDev ? 'https://dz-helper.ru' : ''

export async function get<T extends string = string>(url: string) {
	return (<T>(await (await fetch(baseUrl + url)).text()).trim())
}

export async function copyRefLink(event: MouseEvent) {
	const url = (<HTMLSpanElement>event.target).textContent
	if (url) {
		await copyToClipboard(url)
		await Toast.fire({
			icon: 'success',
			title: 'Реферальная ссылка скопирована',
		})
	}
}

export function copyToClipboard(text: string) {
	return navigator.clipboard.writeText(text)
}

export function debounce(this: any, fn: (...args: any[]) => any, ms = 1000) {
	let timeoutId: number
	return (...args: any[]) => {
		clearTimeout(timeoutId)
		timeoutId = setTimeout(() => fn.call(this, ...args), ms)
	}
}

export const Toast = Swal.mixin({
	toast: true,
	position: 'bottom-start',
	showConfirmButton: false,
	timerProgressBar: true,
	timer: 3000,
	width: 'max-content',
	didOpen: (toast) => {
		toast.addEventListener('mouseenter', Swal.stopTimer)
		toast.addEventListener('mouseleave', Swal.resumeTimer)
	},
})

// TODO Move to Vuex
export const isLoaderShowed = ref(false)