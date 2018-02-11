import { animate, state, style, transition, trigger } from '@angular/core';

interface IfadeOutAnimation {
  duration?:number;
  animationTimingFunction?: string;
}

export function ChangeEmojiDirection(duration:number,timing:string){
  const animationRule = [duration+'s',timing].join(' ');
  return trigger('ChangeEmojiDirection', [
    state('faceleft', style({transform: 'scale(1) scale(1,1)',})),
    state('faceright', style({transform: 'scale(1) scale(-1,1)',})),
    transition('faceleft <=> faceright', animate(animationRule))]);}

//duration: '0.3s',animationTimingFunction:'linear'