import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArtistFormComponent } from './add-artist-form.component';

describe('AddArtistFormComponent', () => {
  let component: AddArtistFormComponent;
  let fixture: ComponentFixture<AddArtistFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddArtistFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArtistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
