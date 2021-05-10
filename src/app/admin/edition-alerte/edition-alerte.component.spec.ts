import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionAlerteComponent } from './edition-alerte.component';

describe('EditionAlerteComponent', () => {
  let component: EditionAlerteComponent;
  let fixture: ComponentFixture<EditionAlerteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionAlerteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionAlerteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
