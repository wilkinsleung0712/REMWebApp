import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlikComponentComponent } from './qlik-component.component';

describe('QlikComponentComponent', () => {
  let component: QlikComponentComponent;
  let fixture: ComponentFixture<QlikComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlikComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlikComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
