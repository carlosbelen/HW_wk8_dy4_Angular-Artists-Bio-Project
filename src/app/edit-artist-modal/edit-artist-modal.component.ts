import { Component, OnInit, Input, Inject } from '@angular/core';
import { Artist } from '../shared/artist';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-artist-modal',
  templateUrl: './edit-artist-modal.component.html',
  styleUrls: ['./edit-artist-modal.component.scss']
})
export class EditArtistModalComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<EditArtistModalComponent>,
    @Inject(MAT_DIALOG_DATA) public artist: Artist) { }

    //onSubmitted method which handles new updates
    onSubmitted(updatedArtist:Artist){
      // the following closes the modal:
      this.dialogRef.close(updatedArtist)
    }

  ngOnInit(): void {
  }

}

