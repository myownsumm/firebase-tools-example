import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { IRoom } from '../../../../typings';
import { Observable, of } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';

@Injectable()
export class RoomsService {
    constructor(private db: AngularFirestore) {

    }

    getRoomsList(): Observable<IRoom[]> {
        const rooms = this.db.collection<IRoom>('rooms').valueChanges();

        return rooms;
    }

    createNewRoom(data: IRoom): Observable<IRoom> {
        const room = fromPromise(this.db.collection<IRoom>('rooms').add(data));

        return of(data);
    }
}