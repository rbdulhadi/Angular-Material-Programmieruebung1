import { Component, inject } from '@angular/core';
import { Data } from './data/data';
import { AddData } from './add-data/add-data';
import { Backend } from '../shared/backend';

@Component({
  selector: 'app-dashboard',
  imports: [Data, AddData],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  public backend = inject(Backend);

  ngOnInit() {
    this.backend.loadInitialData();
  }
}
