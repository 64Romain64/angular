import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionGremlinComponent } from './edition-gremlin.component';

describe('EditionGremlinComponent', () => {
  let component: EditionGremlinComponent;
  let fixture: ComponentFixture<EditionGremlinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionGremlinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionGremlinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
