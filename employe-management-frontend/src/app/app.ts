import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavbar } from "./side-navbar/side-navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideNavbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('employe-management-frontend');
}
