import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScratchCardService {

  fortunes = ['https://www.google.co.in/url?sa=i&url=https%3A%2F%2Fparade.com%2F937586%2Fparade%2Flife-quotes%2F&psig=AOvVaw1WD8zi9OJhlPWW6uHpAt3D&ust=1681996465430000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKC_haGDtv4CFQAAAAAdAAAAABAE', 
  'https://blog.hubspot.com/hs-fs/hubfs/quotes-on-life-14-maya-angelou.jpg?width=650&height=545&name=quotes-on-life-14-maya-angelou.jpg', 
  'https://blog.hubspot.com/hs-fs/hubfs/quotes-on-life-14-maya-angelou.jpg?width=650&height=545&name=quotes-on-life-14-maya-angelou.jpg']

  constructor() { }

  getRandomIndex(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getFortune() {
    return this.fortunes[this.getRandomIndex(0, this.fortunes.length - 1)];
  }
}
