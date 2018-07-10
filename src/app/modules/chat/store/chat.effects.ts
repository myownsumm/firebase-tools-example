import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Router } from '@angular/router';
import { IChatState } from './chat.reducer';
import { Store } from '@ngrx/store';


@Injectable()
export class ChatEffectsService {

    constructor(protected actions$: Actions,
                protected store: Store<IChatState>,
                protected router: Router) {
    }
}
