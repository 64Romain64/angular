import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionContactComponent } from './edition-contact.component';

describe('EditionContactComponent', () => {
  let component: EditionContactComponent;
  let fixture: ComponentFixture<EditionContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
