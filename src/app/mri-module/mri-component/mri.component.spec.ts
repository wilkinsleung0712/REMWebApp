import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MriComponent } from './mri.component';

describe('MriComponent', () => {
  let component: MriComponent;
  let fixture: ComponentFixture<MriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
