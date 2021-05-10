import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelugeComponent } from './deluge.component';

describe('DelugeComponent', () => {
  let component: DelugeComponent;
  let fixture: ComponentFixture<DelugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelugeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
