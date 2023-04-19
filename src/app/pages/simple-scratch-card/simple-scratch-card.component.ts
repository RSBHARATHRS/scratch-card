import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { images } from 'src/app/data/mocks';
import { ScratchCardService } from 'src/app/services/scratch-card.service';


@Component({
  selector: 'app-simple-scratch-card',
  templateUrl: './simple-scratch-card.component.html',
  styleUrls: ['./simple-scratch-card.component.scss']
})

export class SimpleScratchCardComponent implements OnInit {

  isDrawing: any;
  lastPoint: any;
  container: any;
  canvas!: HTMLCanvasElement;
  canvasWidth: any;
  canvasHeight: any;
  ctx: any;
  image = new Image();
  brush = new Image();

  // handleMouseDown = (e: any) => {
  //   this.isDrawing = true;
  //   this.lastPoint = this.getMouse(e, this.canvas);
  // }
  fortune = '';

  constructor(private scratchCardService: ScratchCardService) {
  }

  ngOnInit(): void {
    this.fortune = this.scratchCardService.getFortune();
    console.log(this.fortune)
  }

  ngAfterViewInit() {
    this.container = document.getElementById('js-container');
    this.canvas = <HTMLCanvasElement>document.getElementById('js-canvas');
    this.canvasWidth = this.canvas.width;
    this.canvasHeight = this.canvas.height;
    this.ctx = this.canvas.getContext('2d');
    this.loadImage();
    this.addEventListners();
  }

  loadImage() {
    this.image.src = images.angImg;
    this.brush.src = images.brush;
    this.image.onload = () => {
      this.ctx.drawImage(this.image, 0, 0);
      // Show the form when Image is loaded.
      document.getElementById('fortune')!.style.visibility = 'visible';
    };
  }

  // base64 Workaround because Same-Origin-Policy
  addEventListners() {
    this.canvas.addEventListener('mousedown', this.handleMouseDown, false);
    this.canvas.addEventListener('touchstart', this.handleMouseDown, false);
    this.canvas.addEventListener('mousemove', this.handleMouseMove, false);
    this.canvas.addEventListener('touchmove', this.handleMouseMove, false);
    this.canvas.addEventListener('mouseup', this.handleMouseUp, false);
    this.canvas.addEventListener('touchend', this.handleMouseUp, false);
  }

  distanceBetween(point1: any, point2: any) {
    return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
  }

  angleBetween(point1: any, point2: any) {
    return Math.atan2(point2.x - point1.x, point2.y - point1.y);
  }

  // Only test every `stride` pixel. `stride`x faster,
  // but might lead to inaccuracy
  getFilledInPixels(stride: any) {
    if (!stride || stride < 1) { stride = 1; }

    var pixels = this.ctx.getImageData(0, 0, this.canvasWidth, this.canvasHeight),
      pdata = pixels.data,
      l = pdata.length,
      total = (l / stride),
      count = 0;

    // Iterate over all pixels
    for (var i = count = 0; i < l; i += stride) {
      if (parseInt(pdata[i]) === 0) {
        count++;
      }
    }

    return Math.round((count / total) * 100);
  }

  getMouse(e: any, canvas: any) {
    var offsetX = 0, offsetY = 0, mx, my;

    if (canvas.offsetParent !== undefined) {
      do {
        offsetX += canvas.offsetLeft;
        offsetY += canvas.offsetTop;
      } while ((canvas = canvas.offsetParent));
    }

    mx = (e.pageX || e.touches[0].clientX) - offsetX;
    my = (e.pageY || e.touches[0].clientY) - offsetY;

    return { x: mx, y: my };
  }

  handlePercentage(filledInPixels: any) {
    filledInPixels = filledInPixels || 0;
    console.log(filledInPixels + '%');
    if (filledInPixels > 70 && this.canvas) {
      this.container.removeChild(this.canvas);
      // this.canvas = new HTMLCanvasElement
    }
  }

  handleMouseDown = (e: any) => {
    this.isDrawing = true;
    this.lastPoint = this.getMouse(e, this.canvas);
  }

  handleMouseMove = (e: any) => {
    if (!this.isDrawing) { return; }

    e.preventDefault();

    var currentPoint = this.getMouse(e, this.canvas),
      dist = this.distanceBetween(this.lastPoint, currentPoint),
      angle = this.angleBetween(this.lastPoint, currentPoint),
      x, y;

    for (var i = 0; i < dist; i++) {
      x = this.lastPoint.x + (Math.sin(angle) * i) - 25;
      y = this.lastPoint.y + (Math.cos(angle) * i) - 25;
      this.ctx.globalCompositeOperation = 'destination-out';
      this.ctx.drawImage(this.brush, x, y);
    }

    this.lastPoint = currentPoint;
    this.handlePercentage(this.getFilledInPixels(32));
  }

  handleMouseUp = (e: any) => {
    this.isDrawing = false;
  }

  reset() {
    this.image = new Image();
    this.brush = new Image();
    this.loadImage();
    
  }


}
