import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent {

  options: AnimationOptions = {    
    path: '../assets/robot.json'  
  };  

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
