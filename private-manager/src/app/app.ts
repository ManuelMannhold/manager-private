import { Component } from '@angular/core';
import { Sidebar } from './dist/sidebar/sidebar';
import { Navbar } from './dist/navbar/navbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Sidebar, Navbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'private-manager';
}
