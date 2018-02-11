import { animate, state, style, transition, trigger,keyframes } from '@angular/core';

interface IfadeOutAnimation {
  duration?: string;
  animationTimingFunction?: string;
}

export function Block(duration:number,timing:string){
  const animationRule = [duration+'s',timing].join(' ');
  return trigger('Block', [
    state('block',style({opacity:0})),
    transition('void => block', animate(animationRule, 
      keyframes([
        //style({transform:'rotate(-135deg)','transform-origin':'center',offset: 0}),
        style({offset:.999}),
        style({offset:1,opacity:0}),]))),]);}