import { Component, signal } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { HomeComponent } from "./components/home/home";
import { About } from "./components/about/about";
import { Skills } from "./components/skills/skills";
import { Contact } from "./components/contact/contact";
import { Projects } from "./components/projects/projects";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NavbarComponent, Footer, HomeComponent, About, Skills, Contact, Projects],
  templateUrl: './app.html',
  styles: []
})
export class App {
  protected readonly title = signal('portfolio');
}
