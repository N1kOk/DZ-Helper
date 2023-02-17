import router from '@/router'
import { getLocalStorageItem } from '@/utils/localStorage'
import { get, Toast } from '@/utils/helpers'
import Swal from 'sweetalert2-neutral'

router.afterEach(async () => {
	if (getLocalStorageItem('accountType'))
		await fetchBonus()
})

async function fetchBonus() {
	const res = await get('/db/users/bonus/bonus.php')
	
	if (res.startsWith('left')) {
		const minutes = parseInt(res.split(':')[1])
		await Toast.fire({ icon: 'info', title: `До бонуса ${minutes} мин.` })
	} else if (res.startsWith('ok')) {
		const bonus = parseInt(res.split(':')[1])
		await Swal.fire('Бонус', `Вам начислен ежедневный бонус в размере ${bonus} коинов!`, 'success')
	}
}