interface Options {
	path?: string
	expires?: Date | number | string | boolean
	'max-age'?: number
}

export function getCookie(name: string) {
	let matches = document.cookie.match(new RegExp(
		'(?:^|; )' + name.replace(/([.$?*|{}()\[\]\\\/+^])/g, '\\$1') + '=([^;]*)',
	))
	return matches ? decodeURIComponent(matches[1]) : undefined
}

export function setCookie(name: string, value: string | number, options: Options = {}) {
	if (!options.path)
		options.path = '/'
	
	if (options.expires instanceof Date) {
		options.expires = options.expires.toUTCString()
	}
	
	let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value)
	
	for (let optionKey in options) {
		updatedCookie += '; ' + optionKey
		let optionValue = options[(<keyof Options>optionKey)]
		if (optionValue !== true) {
			updatedCookie += '=' + optionValue
		}
	}
	
	document.cookie = updatedCookie
}


export function deleteCookie(name: string) {
	setCookie(name, '', {
		'max-age': -1,
	})
}