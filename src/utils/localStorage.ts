interface Storage {
	coins: number
	earnedCoins: number
	accountType: number
	refs: number[]
	
	key: string
	name: string
	vkId: string
	refLink: string
}

type Key = keyof Storage

export const getLocalStorageItem = <T extends Key>(key: T): Storage[T] | null => {
	const item = localStorage.getItem(key)
	return  JSON.parse((item && item !== 'undefined') ? item : 'null')
}

export const setLocalStorageItem = <T extends Key>(key: T, value: Storage[T]): void =>
	localStorage.setItem(key, JSON.stringify(value))
