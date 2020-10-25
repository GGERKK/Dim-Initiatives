export default function sketch (p) {

  let numEntities = 5
  let tempMX = p.width / 2
  let tempMY = p.height / 2
  let randomValue = 10

  let ENTITIES = []
  let PALETTE = []

  p.setup = () => {
    p.createCanvas(p.windowWidth / 2.025, p.windowHeight / 2.025)
    p.colorMode(p.HSB, 1)
    p.blendMode(p.MULTIPLY)
    p.noCursor()

    PALETTE = [
      // Palette from NVML: https://www.instagram.com/p/B8cnjodp5vy/
      // // Oranges
      // color(0.0444, 0.83, 0.37), // Dark Orange
      // color(0.0583, 0.75, 0.72), // Medium Orange
      p.color(0.0722, 0.80, 0.78), // Light Orange
      // // Greens
      // color(0.2806, 0.80, 0.09), // Dark Green
      // color(0.2250, 0.79, 0.25), // Medium Green
      p.color(0.3583, 0.59, 0.54), // Light Green
      // // Pinks
      // color(0.0111, 0.95, 0.19), // Dark Pink
      // color(0.9111, 0.80, 0.72), // Medium Pink
      p.color(0.8583, 0.40, 0.73), // Light Pink
      // // Blues
      // color(0.5528, 0.92, 0.23), // Dark Blue
      // color(0.5333, 0.89, 0.38), // Medium Blue
      p.color(0.5278, 0.85, 0.61), // Light Blue
    ]

    // Create entities
    for (let i = 0; i < numEntities; i++) {
      ENTITIES[i] = new Entity(p.random(PALETTE), randomValue)
    }

    p.background(p.random(PALETTE))


    p.mouseX = p.width / 2
    p.mouseY = p.height / 2

  }

  p.draw = () => {
    p.clear()

    // setGradient(c1, c2);

    tempMX = p.mouseX
    tempMY = p.mouseY


    p.push()
    // translate(mouseX, mouseY)
    // Edit entities
    for (let i = 0; i < ENTITIES.length; i++) {
      ENTITIES[i].move(tempMX, tempMY)
      ENTITIES[i].show()
    }
    p.pop()

    if (p.mouseIsPressed) {
      randomValue = 50
    } else {
      randomValue = 0
    }
  }

  class Entity {
    constructor(tempRand, randomValue) {
      let randPosX = p.random(150, p.width - 150)
      let randPosY = p.random(150, p.height - 150)
      let tempMX = p.width / 2
      let tempMY = p.height / 2
      this.x = randPosX
      this.y = randPosY
      this.staticX = randPosX
      this.staticY = randPosY
      this.size = 50
      this.color = tempRand
      // this.color = color(this.rand, 0.6, 0.8)

      // this.size = map(randPosY, 0, 100, 20, 13.5)
      this.size = 16
    }

    move(tempMX, tempMY) {
      this.x = this.x + p.random(-randomValue, randomValue)
      this.y = this.y + p.random(-randomValue, randomValue)
      this.mx = tempMX
      this.my = tempMY
    }

    show() {
      p.noStroke()
      p.fill(this.color)
      p.noStroke()
      p.fill(this.color)
      p.ellipse(p.mouseX, p.mouseY, 100)

      p.noFill()
      p.stroke(this.color)
      p.strokeWeight(50)
      p.beginShape()
      p.vertex(this.mx, this.my);
      p.bezierVertex(this.mx, this.my, p.width/2, p.height/2, this.x, this.y);
      p.endShape()
    }
  }


}
