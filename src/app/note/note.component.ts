import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  // this property is sent by note-view comp, see note-view template
  @Input()
  note: Note;

  constructor(private _routerService: RouterService) {
  }

  ngOnInit() {
  }

  openNoteEditView() {
    this._routerService.routeToEditNoteView(this.note.id);
  }
}
