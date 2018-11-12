import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-note-taker',
  templateUrl: './note-taker.component.html',
  styleUrls: ['./note-taker.component.css']
})
export class NoteTakerComponent {

  note: Note;

  constructor(private _noteService: NotesService) {
    this.note = new Note();
  }

  // note taker event
  takeNote() {
    this._noteService.addNote(this.note).subscribe(
      data => {
        this.note = new Note();
       },
      err => {
        console.log('takeNote-error', err);
      }
    );
  }
}
