import { animate, state, style, transition, trigger,keyframes} from '@angular/core';

interface IfadeOutAnimation {
  duration?: string;
  animationTimingFunction?: string;
}

export function FireBall(duration:number,timing:string){
  const animationRule = [duration+'s',timing].join(' ');
  return trigger('FireBall', [
	  state('fireball',style({transform: 'translate(700px)'})),
	  transition('void => fireball', animate('500ms ease-in', 
	    keyframes([
	      style({transform:'rotate(-90deg)','transform-origin':'center',offset: 0}),
	      style({transform:'translate(700px) rotate(-90deg)','transform-origin':'center',offset: 0.5}),
	      style({transform:'translate(700px) rotate(-90deg)','transform-origin':'center',offset: 0.999}),
	      style({transform:'translate(700px) rotate(-90deg)','transform-origin':'center',offset:1,opacity:0}),])))]);}