import { animate, state, style, transition, trigger,keyframes } from '@angular/core';

interface IfadeOutAnimation {
  duration?: string;
  animationTimingFunction?: string;
}

export function LaserBlast(duration:number,timing:string){
  const animationRule = [duration+'s',timing].join(' ');
  return trigger('LaserBlast', [
    state('laser',style({transform: 'translate(400px)'})),
    transition('void => laser', animate(animationRule, 
      keyframes([
        style({opacity:1,offset: 0.05}),
        //style({opacity:1,offset:0.05}),
        style({transform:'translate(400px)',offset: 0.75}),
        style({opacity:1,offset: 0.95}),
        style({opacity:0,offset:1}),]))),]);}