import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  notStartedNotes: Array<Note>;
  startedNotes: Array<Note>;
  completedNotes: Array<Note>;
  notes: Array<Note> = [];
  errMessage: string;

  constructor(private _notesService: NotesService) {
    this.errMessage = '';
  }

  ngOnInit() {
    // get all notes
    this._notesService.getNotes().subscribe(
      data => this.notes = data,
      err => this.errMessage = err.error.message
    );
  }
}
