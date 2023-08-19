import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, take, throwError } from 'rxjs';
import { Person } from 'src/app/data/interfaces/person.interface';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-register-person',
  templateUrl: './register-person.component.html',
  styleUrls: ['./register-person.component.scss'],
})
export class RegisterPersonComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    age: new FormControl(null, [Validators.required, Validators.min(18)]),
    address: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  disableControls = false;

  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit(): void {}

  checkErrors(control: string, error: string): boolean {
    let hasError: boolean;
    switch (control) {
      case 'name':
        hasError = this.form.controls.name.hasError(error);
        break;
      case 'lastName':
        hasError = this.form.controls.lastName.hasError(error);
        break;
      case 'age':
        hasError = this.form.controls.age.hasError(error);
        break;
      case 'email':
        hasError = this.form.controls.email.hasError(error);
        break;
      default:
        hasError = false;
    }
    return hasError;
  }

  save(): void {
    this.form.markAllAsTouched();
    const dataPerson = {
      name: this.form.controls['name'].value,
      last_name: this.form.controls['lastName'].value,
      age: this.form.controls['age'].value ?? 0,
      address: this.form.controls['address'].value,
      email: this.form.controls['email'].value,
    } as Person;
    this.personService
      .registerPerson(dataPerson)
      .pipe(
        take(1),
        catchError((err) =>
          throwError(() => {
            let errorMsj = 'Lo sentimos, no se logro agregar la persona';
            if (err.status === 409) {
              errorMsj = 'Error de validacion de los campos';
            }
          })
        )
      )
      .subscribe((res: any) => {
        this.router.navigate(['/registered-persons']);
      });
    this.disableControls = true;
  }
}
