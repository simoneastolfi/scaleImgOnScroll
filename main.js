import './style.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = document.querySelectorAll('.img');

gsap.set(images, { scale: 1 });

images.forEach((img) => {
  gsap.to(img, {
    scale: 2,
    scrollTrigger: {
      trigger: img,
      start: "top bottom",
      end: "bottom top",
      markers: false,
      scrub: 1,
    }
  })
})