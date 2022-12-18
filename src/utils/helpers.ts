export const isDev = location.hostname === '127.0.0.1'

export const baseUrl = isDev ? 'https://dz-helper.ru' : ''

export function debounce(this: any, fn: (...args: any[]) => any, ms = 1000) {
	let timeoutId: number
	return (...args: any[]) => {
		clearTimeout(timeoutId)
		timeoutId = setTimeout(() => fn.call(this, ...args), ms)
	}
}