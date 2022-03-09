import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEditcomponentComponent } from './employee-editcomponent.component';

describe('EmployeeEditcomponentComponent', () => {
  let component: EmployeeEditcomponentComponent;
  let fixture: ComponentFixture<EmployeeEditcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeEditcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeEditcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
