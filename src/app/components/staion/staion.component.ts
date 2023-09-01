import { Component, Input } from '@angular/core';
import { Station } from 'src/app/shared/station';

@Component({
  selector: 'app-staion',
  templateUrl: './staion.component.html',
  styleUrls: ['./staion.component.css']
})
export class StaionComponent {
  imageBaseURL:string="/assets/images/"
  @Input() station!:Station

  constructor(){
  }

}
