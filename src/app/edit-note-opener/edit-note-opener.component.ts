import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditNoteViewComponent } from '../edit-note-view/edit-note-view.component';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-edit-note-opener',
  templateUrl: './edit-note-opener.component.html',
  styleUrls: ['./edit-note-opener.component.css']
})


export class EditNoteOpenerComponent implements OnInit  {

  // note-view dialog open handler
  constructor(private _dialog: MatDialog,
    private routerService: RouterService,
    private activatedRoute: ActivatedRoute) {
    // this._dialog.open(EditNoteViewComponent);
    // read the data of selected note
      const editNoteId = +this.activatedRoute.snapshot.paramMap.get('noteId');
      this._dialog.open(EditNoteViewComponent, {
        data: {
          noteId: editNoteId
        }
      })
      // routing to previous url once dialog is closed
      .afterClosed().subscribe(result => {
        this.routerService.routeBack();
      });
  }
  ngOnInit() { }
}
