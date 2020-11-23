import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Artist } from '../../shared/artist';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent implements OnInit {

  // Input Data for our Artist
  @Input() artist: Artist | any;

  // Outputs for the xButton(deleting the card) and the cardClick action(updating the card)
  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  onXButtonClick(){
    // Send signal to the x button to delete the card
    this.xButtonClick.emit()
  }

  onCardClick(){
    this.cardClick.emit()
  }

  ngOnInit(): void {
  }

}
