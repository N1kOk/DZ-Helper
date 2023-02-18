<template>
	<div
		v-if="isSnowflakesShowed"
		id="snowflakes"
		class="fixed left-0 top-0 w-screen h-screen z-[99999999] pointer-events-none"
	/>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { isWinter } from '@/utils/helpers'

type Point = { x: number, y: number }

class Snowflake {
	private element = document.createElement('span')
	private position: Point = { x: 0, y: 0 }
	private updateTimespan = Date.now()
	private deg = Math.random() * 10

	constructor() {
		this.element.className = 'snowflake'
		document.querySelector('#snowflakes')!.append(this.element)

		this.respawn(true)
		this.update = this.update.bind(this)

		requestAnimationFrame(this.update)
	}

	public respawn(isRandom = false) {
		this.updateTimespan = Date.now()
		this.element.style.display = 'none'
		this.setPositionY(-10)

		if (isRandom) {
			this.setPosition({
				x: Math.random() * window.innerWidth,
				y: Math.random() * window.innerHeight * -1,
			})
		}

		setTimeout(() => this.element.style.display = 'block', 150)
	}

	public getPosition() {
		return this.position
	}

	public setPosition(pos: Point) {
		this.position = pos
		this.element.style.transform = `translate(${pos.x}px, ${pos.y}px)`
	}

	public setPositionX(value: number) {
		this.setPosition({ x: value, y: this.position.y })
	}

	public setPositionY(value: number) {
		this.setPosition({ x: this.position.x, y: value })
	}

	private update() {
		const delta = Date.now() - this.updateTimespan

		if (delta > 1000) {
			this.respawn(true)
			return requestAnimationFrame(this.update)
		}

		if (delta < 100)
			return requestAnimationFrame(this.update)

		const pos = this.getPosition()

		this.setPositionX(pos.x + Math.cos(this.deg / 5) * 3)
		this.setPositionY(pos.y + delta / 16)

		this.deg += delta / 16 * 0.1

		if (pos.y > window.innerHeight + 10)
			this.respawn()

		this.updateTimespan = Date.now()
		requestAnimationFrame(this.update)
	}
}

const snowflakes = []
const isSnowflakesShowed = ref<boolean>(true)

onMounted(() => {
	if (!isWinter())
		return isSnowflakesShowed.value = false

	for (let i = 0; i < 15; i++)
		snowflakes.push(new Snowflake())
})
</script>

<style>
/*noinspection ALL*/
.snowflake {
	position: absolute;
	display: block;
	left: 0;
	top: 0;
	width: .15rem;
	height: .15rem;
	opacity: .8;
	border-radius: 9999px;
	background: white;
	transition-property: transform;
	transition-duration: .15s;
	transition-timing-function: linear;
	will-change: transform;
}
</style>