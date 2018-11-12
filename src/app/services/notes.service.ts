import { Injectable } from '@angular/core';
import { Note } from '../note';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

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
    }

  fetchNotesFromServer() {

  }

  // getNotes(): BehaviorSubject<Array<Note>> {
  //   return;
  // }

  getNotes() {
    return this.http.get<Array<Note>>(this._notesUrl, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.bearerToken}`)
    });
  }

  addNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this._notesUrl, note, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${this.bearerToken}`)
    });
  }

  editNote(note: Note): Observable<Note> {
    return;
  }

  getNoteById(noteId): Note {
    return;
  }
}
