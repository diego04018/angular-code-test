import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPersonComponent } from './register-person.component';

describe('RegisterPersonComponent', () => {
  let component: RegisterPersonComponent;
  let fixture: ComponentFixture<RegisterPersonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPersonComponent]
    });
    fixture = TestBed.createComponent(RegisterPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
