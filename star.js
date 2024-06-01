


let canvas = document.getElementById("canvas")
let ctx = canvas.getContext('2d')

let cw = window.innerWidth
let ch = window.innerHeight

canvas.width = cw
canvas.height = ch

let frame = 0

class Star {
	constructor(x, y, radius) {
		this.x = x
		this.y = y
		this.radius = radius
		this.color = this.colors()
	}

	draw() {
		ctx.beginPath()
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
		ctx.fillStyle = this.color
		ctx.fill()
		ctx.stroke()
		ctx.closePath()
	}

	planeta() {
		ctx.beginPath()
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
		ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
		ctx.fill()
		ctx.stroke()
		ctx.closePath()

		ctx.beginPath()
		ctx.ellipse(200, 200, 150, 25, Math.PI / -8, 0, 2 * Math.PI)
		ctx.fillStyle = "rgba(255, 255, 255, 0.4)"
		ctx.fill()
		ctx.stroke()
		ctx.closePath()
	}

	colors() {
		let r = Math.floor(Math.random() * 255) 
		let g = Math.floor(Math.random() * 255)
		let b = Math.floor(Math.random() * 255)
		return `rgba(${r}, ${g}, ${b}, 0.6)`
	}
}

let star1 = new Star(200, 200, 100)
star1.planeta()


function update() {

	for (let i = 0; i < 2; i++) {
		let star = new Star(Math.random() * cw, Math.random() * ch, 2 * Math.random(), this.color)
		star.draw()
	}
		

	requestAnimationFrame(update)
	frame++
}

update()