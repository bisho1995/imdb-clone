import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMovieHeaderComponent } from './edit-movie-header.component';

describe('EditMovieHeaderComponent', () => {
  let component: EditMovieHeaderComponent;
  let fixture: ComponentFixture<EditMovieHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMovieHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMovieHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
