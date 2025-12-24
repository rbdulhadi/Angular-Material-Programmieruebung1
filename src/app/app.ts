import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Header } from './header/header';
import { Backend } from './shared/backend';
import { Store } from './shared/store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, MatProgressSpinnerModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  public store = inject(Store);
}
