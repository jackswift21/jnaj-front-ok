import { animate, state, style, transition, trigger,keyframes } from '@angular/core';

interface IfadeOutAnimation {
  duration?: string;
  animationTimingFunction?: string;
}

export function IceBlast(duration:number,timing:string){
  const animationRule = [duration+'s',timing].join(' ');
  return trigger('IceBlast', [
	  state('ice',style({transform:'translate(500px) scale(2)','transform-origin':'center',opacity:0})),state('ice',style({transform:'translate(500px) rotate(720deg) scale(2)','transform-origin':'center',opacity:0})),
	  transition('void => ice', animate(animationRule, 
	    keyframes([
	      style({transform:'rotate(270deg)','transform-origin':'center',offset: 0.1}),
	      style({transform:'translate(500px) rotate(90deg)','transform-origin':'center',offset: 0.3}),
	      style({transform:'translate(500px) rotate(10deg) scale(2)',offset: 0.33,opacity:1.1}),
	      style({transform:'translate(500px) scale(2)',offset: 0.9,opacity:1.1}),
	      style({transform:'translate(500px) scale(2)',offset:1,opacity:0}),]))),]);}