import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './dist/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'private-manager';
}
