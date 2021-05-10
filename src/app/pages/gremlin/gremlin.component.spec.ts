import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GremlinComponent } from './gremlin.component';

describe('GremlinComponent', () => {
  let component: GremlinComponent;
  let fixture: ComponentFixture<GremlinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GremlinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GremlinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
