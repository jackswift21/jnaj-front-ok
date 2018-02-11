import { animate, state, style, transition, trigger,keyframes } from '@angular/core';

interface IfadeOutAnimation {
  duration?: string;
  animationTimingFunction?: string;
}

export function SwordStab(duration:number,timing:string){
  const animationRule = [duration+'s',timing].join(' ');
  return trigger('SwordStab', [
    state('sword',style({transform:'rotate(-135deg)','transform-origin':'center',opacity:0})),
    transition('void => sword', animate(animationRule, 
      keyframes([
        style({transform:'rotate(-135deg)','transform-origin':'center',offset: 0}),
        style({transform:'rotate(-135deg)','transform-origin':'center',offset:.999}),
        style({transform:'rotate(-135deg)','transform-origin':'center',offset:1,opacity:0}),]))),]);}