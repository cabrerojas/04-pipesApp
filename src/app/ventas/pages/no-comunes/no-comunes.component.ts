import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent  {

    // i18nSelect
    nombre = 'Angélica';
    genero = 'femenino';
    invitacionMap = {
      masculino: 'invitarlo',
      femenino: 'invitarla'
    };

    // i18nPrural
    clientes: string[] = ['Angélica', 'Guillermo', 'Alfredo', 'Isabel'];

    clientesMap = {
      '=0' : 'no tenemos ningún cliente esperando.',
      '=1' : 'tenemos un cliente esperando.',
      other: 'tenemos # clientes esperando.'
    };


    // KeyValue Pipe
    persona = {
      nombre: 'Guillermo',
      edad: '25',
      direccion: 'Santiago, Chile'
    };

    // Json Pipe

    heroes = [
      {
        nombre: 'Superman',
        vuela: true
      },
      {
        nombre: 'Robin',
        vuela: false
      },
      {
        nombre: 'Aquaman',
        vuela: false
      },
      {
        nombre: 'Batman',
        vuela: false
      },
    ];

    // Async Pipe
    miObservable = interval(1000); // 0,1,2,3,4,5,6

    valorPromesa = new Promise( (resolve, reject) => {

      setTimeout(() => {
        resolve( 'Tenemos data de promesa' );
      }, 3500);

    } );

    // Slice

    cambiarNombre(): void {
      if (this.nombre === 'Angélica') {
        this.nombre = 'Guillermo';
        this.genero = 'masculino';
      } else {
        this.nombre = 'Angélica';
        this.genero = 'femenino';
      }

    }

    borrarCliente(): void{
      this.clientes.shift();
    }

}
