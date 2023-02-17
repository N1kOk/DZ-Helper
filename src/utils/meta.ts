import router from '@/router'
import { nextTick } from 'vue'

router.afterEach(async (to) => {
	await nextTick()
	
	const { keywords, description, title } = to.meta
	document.title = title
	document.head.querySelector('meta[name="keywords"]')!.setAttribute('content', keywords || '')
	document.head.querySelector('meta[name="description"]')!.setAttribute('content', description || '')
})
