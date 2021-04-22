import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent  {

  nombreLower = 'guillermo';
  nombreUpper = 'GUILLERMO';
  nombreCompleto = 'GuILLermo CaBRERa';


  fecha: Date = new Date();


}
