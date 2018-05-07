import { Bien } from './interface/bien';
import { Client } from './interface/client';

export interface Reservation {
    idReservation: number;
    dateReservation: Date;
    etat: number;
    bien: Bien;
    client: Client;
}
