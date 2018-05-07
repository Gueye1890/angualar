import { Ville } from './localite';
import { Typebien } from './typebien';
export interface Bien {
    idbien: string;
    nombien: string;
    prixlocation: number;
    superficie: number;
    description: string;
    disponiblite: boolean;
    idtypedebien: Typebien;
    localite: Ville;
}
