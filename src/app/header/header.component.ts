import { Component } from '@angular/core';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isNoteView = true;

  constructor(private _routerService: RouterService) {
  }

  showNote() {
    this.isNoteView = true;
    this._routerService.routeToNoteView();
  }

  showlist() {
    this.isNoteView = false;
    this._routerService.routeToListView();
  }
}
