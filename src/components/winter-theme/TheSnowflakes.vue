<template>
	<div id="snowflakes" class="fixed left-0 top-0 w-screen h-screen z-[99999999] pointer-events-none"/>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

type Vector = { x: number, y: number }

class Snowflake {
	private elem = document.createElement('span')
	private position: Vector = { x: 0, y: 0 }
	private updateTimespan = 0

	constructor() {
		this.elem.className = 'snowflake'
		document.querySelector('#snowflakes')!.append(this.elem)

		this.setPosition({ x: Math.random() * 1500, y: 0 })
		this.update = this.update.bind(this)

		requestAnimationFrame(this.update)
	}

	public getPosition() {
		return this.position
	}

	public setPosition(pos: Vector) {
		this.setPositionX(pos.x)
		this.setPositionY(pos.y)
	}

	public setPositionX(value: number) {
		this.position.x = value
		this.elem.style.left = `${value}px`
	}

	public setPositionY(value: number) {
		this.position.y = value
		this.elem.style.top = `${value}px`
	}

	private update() {
		// TODO timespan

		const pos = this.getPosition()
		this.setPositionY(pos.y + 1)

		requestAnimationFrame(this.update)
	}

	// private getNextPosition(): Vector {
	// 	const pos = this.getPosition()
	// 	return { ...this.getPosition(),  }
	// }
}

const snowflakes = []

onMounted(() => {
	for (let i = 0; i < 30; i++)
		snowflakes.push(new Snowflake())
})
</script>

<style>
.snowflake {
	position: absolute;
	display: block;
	width: 3px;
	height: 3px;
	border-radius: 9999px;
	background: white;
	transition-property: left, top;
	transition-duration: 1s;
	transition-timing-function: linear;
}
</style>