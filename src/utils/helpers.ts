import Swal from 'sweetalert2-neutral'

export const isDev = location.hostname === '127.0.0.1'

export const baseUrl = isDev ? 'https://dz-helper.ru' : ''

async function _get<T extends string = string>(url: string) {
	if (!url.includes('://'))
		url = baseUrl + url
	
	const res = await fetch(url)
	
	if (!res.ok)
		throw new Error(res.status + ' ' + res.statusText)
	
	return res
}

export async function get<T extends string = string>(url: string) {
	return (<T>(await (await _get(url)).text()).trim())
}

export async function getAsJSON<T extends object>(url: string) {
	return (<T>(await (await _get(url)).json()))
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

function fallbackCopyTextToClipboard(text: string) {
	const textArea = document.createElement('textarea')
	textArea.value = text
	textArea.style.top = '0'
	textArea.style.left = '0'
	textArea.style.position = 'fixed'
	
	document.body.appendChild(textArea)
	textArea.focus()
	textArea.select()
	
	document.execCommand('copy')
	
	document.body.removeChild(textArea)
}

export async function copyToClipboard(text: string) {
	try {
		await navigator.clipboard.writeText(text)
	} catch (error) {
		fallbackCopyTextToClipboard(text)
	}
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
	showClass: {
		popup: 'slide-in',
	},
	hideClass: {
		popup: 'slide-out',
	},
	didOpen: (toast) => {
		toast.addEventListener('mouseenter', Swal.stopTimer)
		toast.addEventListener('mouseleave', Swal.resumeTimer)
	},
})
