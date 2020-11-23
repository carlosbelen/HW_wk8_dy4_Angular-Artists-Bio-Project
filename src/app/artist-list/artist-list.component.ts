import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EditArtistModalComponent } from '../edit-artist-modal/edit-artist-modal.component';
import { MatDialog } from '@angular/material/dialog';
// Import for the Artist Model
import { Artist } from '../shared/artist';

//TODO Add modal functionality for update

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {

  @Input() items: Artist[] = [];

  @Output() delete: EventEmitter<Artist> =  new EventEmitter<Artist>();
  constructor( public dialog: MatDialog) { }

  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  ngOnInit(): void {
  }

  onDelete(item: Artist){
    this.delete.emit(item);
  }

  onCardClicked(item: Artist){
    // Show the edit modal

    const dialogref = this.dialog.open(EditArtistModalComponent, {
      width: '580px',
      data: item  //was 'artist' but had error
    })

    dialogref.afterClosed().subscribe(result => {
      // check if result has a value

      if(result){
        this.update.emit({
          old: item,
          new: result
        })
      }
    })
  }

}


export interface UpdateEvent {
  old: Artist;
  new: Artist;
}