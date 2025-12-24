import { Injectable, signal } from '@angular/core';
import { RegistrationDto } from './Interfaces/Registration';
import { Course } from './Interfaces/Course';

@Injectable({
  providedIn: 'root',
})
export class Store {
  public courses: Course[] = [];
  public registrations: RegistrationDto[] = [];
  public isLoading = signal<boolean>(false);
}
