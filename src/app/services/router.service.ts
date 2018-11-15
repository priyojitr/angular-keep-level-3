import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class RouterService {

  constructor(private _router: Router,
    private _location: Location) {
  }

  routeToDashboard() {
    this._router.navigate(['dashboard']);
  }

  routeToLogin() {
    this._router.navigate(['login']);
  }
  // parameterized router (similar to query string)
  routeToEditNoteView(noteId) {
    this._router.navigate([
      'dashboard', {
        outlets: {
          noteEditOutlet: ['note', noteId, 'edit']
        }
      }
    ]);
  }

  routeBack() {
    this._location.back();
  }

  routeToNoteView() {
    this._router.navigate(['dashboard/view/notesView']);
  }

  routeToListView() {
    this._router.navigate(['dashboard/view/listView']);
  }
}
