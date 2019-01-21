import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const canvas = <HTMLCanvasElement>document.getElementById('canvas');
    if (!canvas.getContext) { return; }
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [], // Array that contains the stars
      FPS = 30, // Frames per second
      x = canvas.width; // Number of stars

    // Push stars to array
    for (let i = 0; i < x; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random(),
        vx: Math.floor(Math.random() * 10) - 5,
        vy: Math.floor(Math.random() * 10) - 5
      });
    }

    // Draw the scene
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = 'lighter';

      for (let i = 0, _x = stars.length; i < _x; i++) {
        const s = stars[i];

        ctx.fillStyle = '#dedede';
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
        ctx.fill();
      }
    }

    // Update star locations
    function update() {
      for (let i = 0, _x = stars.length; i < _x; i++) {
        const s = stars[i];

        s.x += s.vx / FPS;
        s.y += s.vy / FPS;

        if (s.x < 0 || s.x > canvas.width) {
          s.x = -s.x;
        }
        if (s.y < 0 || s.y > canvas.height) {
          s.y = -s.y;
        }
      }
    }

    // Update and draw
    function tick() {
      draw();
      update();
      requestAnimationFrame(tick);
    }
    tick();
  }
}
