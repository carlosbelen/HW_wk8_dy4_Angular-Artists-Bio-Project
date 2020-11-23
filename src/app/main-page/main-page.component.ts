import { Component, OnInit } from '@angular/core';
import { Artist } from '../shared/artist';

import { UpdateEvent } from '../artist-list/artist-list.component'
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  Artists: Artist[] = new Array<Artist>()

  totalBudget: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addArtist(newArtist: Artist){
    this.Artists.push(newArtist);

  }

  deleteArtist(artist: Artist){
    let index = this.Artists.indexOf(artist)
    this.Artists.splice(index,1);
  }

  updateArtist(updateEvent: UpdateEvent){
            // replace the artist with the updted/submitted artist from the form
            this.Artists[this.Artists.indexOf(updateEvent.old)] = updateEvent.new;
  }

}
