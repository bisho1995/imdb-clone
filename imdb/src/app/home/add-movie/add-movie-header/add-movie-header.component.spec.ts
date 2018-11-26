import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovieHeaderComponent } from './add-movie-header.component';

describe('AddMovieHeaderComponent', () => {
  let component: AddMovieHeaderComponent;
  let fixture: ComponentFixture<AddMovieHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMovieHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMovieHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
