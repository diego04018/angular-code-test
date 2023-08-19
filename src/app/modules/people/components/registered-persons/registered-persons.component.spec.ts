import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredPersonsComponent } from './registered-persons.component';

describe('RegisteredPersonsComponent', () => {
  let component: RegisteredPersonsComponent;
  let fixture: ComponentFixture<RegisteredPersonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisteredPersonsComponent]
    });
    fixture = TestBed.createComponent(RegisteredPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
