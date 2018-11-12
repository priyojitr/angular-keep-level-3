import { Component } from '@angular/core';
import { Note } from '../note';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-note-view',
  templateUrl: './edit-note-view.component.html',
  styleUrls: ['./edit-note-view.component.css']
})
export class EditNoteViewComponent {
  note: Note;
  states: Array<string> = ['not-started', 'started', 'completed'];
  errMessage: string;

  constructor(private _dialogRef: MatDialogRef<EditNoteViewComponent>) {
  }

  onSave() {

  }
}
