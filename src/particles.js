export function main(p5) {
  class Particle {
    constructor() {
      this.posX = p5.random(p5.width);
      this.posY = p5.random(p5.height);
      this.size = 5;
      this.velocity = p5.createVector(p5.random(-3, 3), p5.random(-3, 3));
    }

    draw() {
      p5.fill(150);
      p5.circle(this.posX, this.posY, this.size);

      this.posX += this.velocity.x;
      this.posY += this.velocity.y;

      this.update();
    }

    update() {
      if (this.posX < 0 || this.posX > p5.width) {
        this.velocity.x *= -1;
      }

      if (this.posY < 0 || this.posY > p5.height) {
        this.velocity.y *= -1;
      }
    }

    connect_closest(particles) {
      for (let p of particles) {
        let d = p5.dist(this.posX, this.posY, p.posX, p.posY);
        if (d < 200) {
          p5.stroke(150 * ((200 - d) / 200));
          p5.line(this.posX, this.posY, p.posX, p.posY);
        }
      }
    }
  }

  const particles = [];
  // NOTE: Set up is here
  p5.setup = () => {
    const canvas = p5.createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("particlesContainer");
    const particlesLength = p5.width / 20;
    for (let i = 0; i < particlesLength; i++) {
      particles.push(new Particle());
    }
  };

  // NOTE: Draw is here
  p5.draw = () => {
    p5.background(0);
    particles.forEach((p, index) => {
      p.draw();
      p.connect_closest(particles.slice(index));
    });
  };
}
