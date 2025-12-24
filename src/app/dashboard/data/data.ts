import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Store } from '../../shared/store';
import { Backend } from '../../shared/backend';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-data',
  imports: [DatePipe, MatButtonModule],
  templateUrl: './data.html',
  styleUrl: './data.scss',
})
export class Data {
  public store = inject(Store);
  private backendService = inject(Backend)

  ngOnInit() {}

  deleteRegistration(id: string) {
    this.backendService.deleteRegistration(id);
  }
}
