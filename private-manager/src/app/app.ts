import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './dist/sidebar/sidebar';
import { Content } from './main/content/content';

@Component({
  selector: 'app-root',
  imports: [Sidebar, Content],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'private-manager';
}
