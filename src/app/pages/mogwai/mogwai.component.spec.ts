import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MogwaiComponent } from './mogwai.component';

describe('MogwaiComponent', () => {
  let component: MogwaiComponent;
  let fixture: ComponentFixture<MogwaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MogwaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MogwaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
