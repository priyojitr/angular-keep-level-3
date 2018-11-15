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
  errMessage: string;

  constructor(private _noteService: NotesService) {
    this.note = new Note();
    this.errMessage = '';
  }

  // note taker event
  takeNote() {
    if (this.note.title.length === 0 || this.note.text.length === 0) {
      this.errMessage = 'Title and Text both are required fields';
    } else {
      this._noteService.addNote(this.note).subscribe(
        data => this.note = new Note(),
        err => this.errMessage = err.message
      );
    }
  }
}
