import { Pipe, PipeTransform } from '@angular/core';


// tslint:disable-next-line: use-pipe-transform-interface
@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

    transform( valor: string, enMayusculas: boolean = true ): string{
        // if (enMayusculas) {
        //     return valor.toUpperCase();
        // }else{
        //     return valor.toLocaleLowerCase();
        // }
        return (enMayusculas) ? valor.toUpperCase() : valor.toLowerCase();

    }
}
