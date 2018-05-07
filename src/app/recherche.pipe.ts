import { Bien } from './interface/bien';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recherche'
})
export class RecherchePipe implements PipeTransform {

  transform(biens: Bien[], Type: string) {
    //alert(Type);
if (!biens) {
  return [];
}
if (!Type) {
return biens;
}
//console.log(Type);
Type = Type.toLowerCase();
    return biens.filter( resultat => {
return resultat.idtypedebien.nomtypedebien.toLowerCase().includes(Type);
    });
 //   console.log(bienfil);
  }

}
