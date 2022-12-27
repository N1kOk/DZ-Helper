<template>
	<section class="flex first-of-type:pt-16 lg:min-h-[calc(100vh-70px)]">
		<div class="flex flex-col flex-1 max-w-full py-10 gap-10">
			<div class="container space-y-8">
				<h1>Морской бой</h1>
				<p>Нажмите на клетку, чтобы скопировать ее номер и не забывайте обновлять страницу</p>
			</div>
			<div class="game-grid">
				<div
					v-for="cell in cells"
					class="cell"
					:class="{ 'bg-white pointer-events-none': !cell.isEmpty }"
					@click="copy(cell.cellName)"
				>
					<span v-if="cell.isEmpty">{{ cell.cellName }}</span>
					<img
						v-else-if="cell.isWinner"
						class="player-image"
						:src="cell.playerImage"
						alt="player image"
					>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { copyToClipboard, getAsJSON, Toast } from '@/utils/helpers'
import { useStore } from '@/store'

const store = useStore()

interface Cell {
	cellName: string
	isEmpty: boolean
	isWinner: boolean
	playerId: number | null
	playerImage: string | null
}

const cells = ref<Cell[]>([])

onMounted(async () => {
	store.state.isLoaderShowed = true

	type Response = [string, number, number | null, boolean, string | null][]
	const res = await getAsJSON<Response>('https://dev.explrms.space/get_field')
	cells.value = res.map((value): Cell => ({
		cellName: value[0] + value[1],
		isEmpty: !value[2],
		isWinner: value[3],
		playerId: value[2],
		playerImage: value[4],
	}))

	store.state.isLoaderShowed = false
})

async function copy(text: string) {
	try {
		await copyToClipboard(text)
		await Toast.fire('Скопировано!', '', 'success')
	} catch (error) {
		await Toast.fire('Не удалось скопировать текст', '', 'error')
	}
}
</script>

<style scoped>
.game-grid {
	@apply
	grid
	grid-cols-[repeat(30,minmax(50px,calc((100vw_-_2rem)/30)))]
	grid-rows-[repeat(30,minmax(50px,calc((100vw_-_2rem)/30)))]
	w-max max-w-full px-4 mx-auto overflow-x-auto
}

.cell {
	@apply flex justify-center items-center border cursor-pointer transition-colors hover:bg-black/25
}

.player-image {
	@apply min-w-full min-h-full p-1 object-contain rounded-full
}
</style>