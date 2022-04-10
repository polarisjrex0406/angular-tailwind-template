import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {concatMap} from 'rxjs/operators';
import {EMPTY, Observable} from 'rxjs';

import * as HomeActions from './home.actions';


@Injectable()
export class HomeEffects {


  loadData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomeActions.LOAD_DATA),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY as Observable<{ type: string }>)
    );
  });


  constructor(private actions$: Actions) {
  }

}
