import { Pipe, PipeTransform } from '@angular/core';


// tslint:disable-next-line: use-pipe-transform-interface
@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform {

    transform(valor: boolean ): string{

        return (valor) ? 'vuela' : 'no vuela';

    }
}
