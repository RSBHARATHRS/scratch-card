import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScratchCardService {

  fortunes1 = ['https://www.rd.com/wp-content/uploads/2021/01/100-of-the-Most-Uplifting-Quotes-Ever5-scaled.jpg?fit=700,700',
    'https://blog.hubspot.com/hs-fs/hubfs/quotes-on-life-14-maya-angelou.jpg?width=650&height=545&name=quotes-on-life-14-maya-angelou.jpg',
    'https://thegoalchaser.com/wp-content/uploads/positive-life-quotes-1-1024x1024.png',
    "https://static.wixstatic.com/media/72c0b2_4704c5328f4343ac8f9fe424501f953d~mv2.png/v1/fill/w_772,h_435,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/72c0b2_4704c5328f4343ac8f9fe424501f953d~mv2.png",
    "https://gatheringdreams.com/wp-content/uploads/2019/10/dream-quotes-square.jpg",
    "https://quotefancy.com/media/wallpaper/1600x900/2595700-Chris-Martin-Quote-Everything-that-s-happening-to-you-is-what-s.jpg",
    "https://i.pinimg.com/originals/23/f5/4e/23f54e5150b5dd04118a0cde176fb34e.jpg",
    "https://img.freepik.com/premium-vector/positive-motivational-quotes-lettering-tshirt-design-inspirational-quotes-lettering-design_542607-1501.jpg?w=2000",
    "https://www.yourtango.com/sites/default/files/styles/body_image_default/public/2020/inspirational-quotes-life-you-only-live-once-mae-west.jpg"]

  fortunes: string[] = [
    "/assets/fortunes/1.png",
    "/assets/fortunes/2.png",
    "/assets/fortunes/3.png",
    "/assets/fortunes/4.png",
    "/assets/fortunes/5.png",
    "/assets/fortunes/6.png",
    "/assets/fortunes/7.png",
    "/assets/fortunes/8.png",
    "/assets/fortunes/9.png",
    "/assets/fortunes/10.png",
    "/assets/fortunes/11.png",
    "/assets/fortunes/12.png",
    "/assets/fortunes/13.png",
    "/assets/fortunes/14.png",
    "/assets/fortunes/15.png",
  ]
  constructor() { }

  getRandomIndex(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getFortune() {
    let fortuneImgUrl: string;
    if (localStorage.getItem("fortune")) {
      fortuneImgUrl = localStorage.getItem("fortune")!;
    } else {
      fortuneImgUrl = this.fortunes[this.getRandomIndex(0, this.fortunes.length - 1)];
      localStorage.setItem("fortune", fortuneImgUrl);
    }

    return fortuneImgUrl;
  }
}
