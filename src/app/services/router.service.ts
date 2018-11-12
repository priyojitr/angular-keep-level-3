import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RouterService {

  constructor(private _router: Router) {
  }

  routeToDashboard() {
    this._router.navigate(['dashboard']);
  }

  routeToLogin() {

  }

  routeToEditNoteView(noteId) {

  }

  routeBack() {

  }

  routeToNoteView() {

  }

  routeToListView() {

  }
}
