import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { IRoom } from '../../../../typings';
import { Observable, of } from 'rxjs';

@Injectable()
export class RoomsService {
    constructor(private db: AngularFirestore) {

    }

    getRoomsList(): Observable<IRoom[]> {
        const rooms = this.db.collection<IRoom>('rooms').valueChanges();

        return rooms;
    }
}