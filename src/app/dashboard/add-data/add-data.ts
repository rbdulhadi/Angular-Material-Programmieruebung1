import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '../../shared/store';
import { Backend } from '../../shared/backend';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-data',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
  templateUrl: './add-data.html',
  styleUrl: './add-data.scss',
})
export class AddData {
  public store = inject(Store);
  public backend = inject(Backend);
  private fb = inject(FormBuilder);
  public signupForm: any;

  ngOnInit() {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      birthdate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      newsletter: [false],
      courseId: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.backend.addRegistration(this.signupForm.value);
      this.signupForm.reset();
      this.signupForm.patchValue({ newsletter: false });
    } else {
      Object.keys(this.signupForm.controls).forEach((key) => {
        this.signupForm.get(key)?.markAsTouched();
      });
    }
  }

  getErrorMessage(controlName: string): string {
    const control = this.signupForm.get(controlName);
    if (control?.hasError('required')) {
      return 'Dieses Feld ist erforderlich';
    }
    if (control?.hasError('email')) {
      return 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
    }
    if (control?.hasError('minlength')) {
      return `Mindestens ${control.errors?.['minlength'].requiredLength} Zeichen erforderlich`;
    }
    return '';
  }
}
