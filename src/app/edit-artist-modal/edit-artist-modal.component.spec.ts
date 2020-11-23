import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArtistModalComponent } from './edit-artist-modal.component';

describe('EditArtistModalComponent', () => {
  let component: EditArtistModalComponent;
  let fixture: ComponentFixture<EditArtistModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditArtistModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArtistModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
