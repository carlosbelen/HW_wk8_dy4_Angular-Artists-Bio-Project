import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './main-page/main-page.component';

// Import for the shared module and ALL of its components
import { SharedModule } from './shared/shared.module';
import { AddArtistFormComponent } from './add-artist-form/add-artist-form.component';

// Import the Forms Module that comes with Angular
import { FormsModule } from '@angular/forms';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistCardComponent } from './artist-list/artist-card/artist-card.component';
import { EditArtistModalComponent } from './edit-artist-modal/edit-artist-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddArtistFormComponent,
    ArtistListComponent,
    ArtistCardComponent,
    EditArtistModalComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
