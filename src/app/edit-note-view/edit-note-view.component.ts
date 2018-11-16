import { Component, OnInit, Inject } from '@angular/core';
import { Note } from '../note';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotesService} from '../services/notes.service';

@Component({
  selector: 'app-edit-note-view',
  templateUrl: './edit-note-view.component.html',
  styleUrls: ['./edit-note-view.component.css']
})

export class EditNoteViewComponent implements OnInit {
  note: Note;
  states: Array<string> = ['not-started', 'started', 'completed'];
  errMessage: string;

  // dialog ref for dialog box to be opened, in this case it this.component  that need to be opened
  constructor(private _dialogRef: MatDialogRef<EditNoteViewComponent>,
    private _notesService: NotesService,
    @Inject(MAT_DIALOG_DATA) private data: any) {
    this.note = new Note();
  }

  ngOnInit() {
    this.note = this._notesService.getNoteById(this.data.noteId);
  }

  editNote() {
    if (this.note.title.length === 0 || this.note.text.length === 0) {
      this.errMessage = 'Title and Text both are required fields';
    } else {
      this._notesService.editNote(this.note).subscribe(
        editNote => this._dialogRef.close(),
        err => this.errMessage = err.message
      );
    }
  }
}
