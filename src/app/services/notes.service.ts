import { Injectable } from '@angular/core';
import { Note } from '../note';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import 'rxjs/add/operator/do';

@Injectable()
export class NotesService {

  notes: Array<Note>;
  notesSubject: BehaviorSubject<Array<Note>>;
  private _notesUrl: string;
  public bearerToken: string;

  constructor(private _authService: AuthenticationService,
    public http: HttpClient) {
      this._notesUrl = 'http://localhost:3000/api/v1/notes/';
      this.bearerToken = this._authService.getBearerToken();
      this.notes = [];
      this.notesSubject = new BehaviorSubject(this.notes);
      this.fetchNotesFromServer();
    }

  // get all notes once it is changed by other user
  fetchNotesFromServer() {
    return this.http.get<Array<Note>>(this._notesUrl, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.bearerToken}`)
    })
    .subscribe(notes => {
      this.notes = notes;
      this.notesSubject.next(this.notes);
    });
  }

  getNotes(): BehaviorSubject<Array<Note>> {
    return this.notesSubject;
  }

  // modifying based on behavior
  addNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this._notesUrl, note, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.bearerToken}`)
    })
    .do(newNote => {
      this.notes.push(newNote);
      this.notesSubject.next(this.notes);
    });
  }

  // specific note to edit
  editNote(note: Note): Observable<Note> {
    return this.http.put<Note>(`${this._notesUrl}${note.id}`, note, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.bearerToken}`)
    })
    .do(editNote => {
      const currNote = this.notes.find(selNode => selNode.id === editNote.id);
      Object.assign(currNote, editNote);
      this.notesSubject.next(this.notes);
    });
  }

  // get a specific note
  getNoteById(noteId): Note {
    const currNote = this.notes.find(note => note.id === noteId);
    return Object.assign({ }, currNote);
  }
}
