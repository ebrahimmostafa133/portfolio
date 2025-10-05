import { Routes } from '@angular/router';

export const routes: Routes = [
      {path: '', redirectTo: 'home',title: 'Home', pathMatch: 'full'},
      {path: 'home', redirectTo: 'home', title: 'Home', pathMatch: 'full'},
      {path: 'contact', redirectTo: 'contact', title: 'Contact', pathMatch: 'full'},
      {path: 'project', redirectTo: 'project', title: 'Project', pathMatch: 'full'},
      {path: 'about', redirectTo: 'about', title: 'About', pathMatch: 'full'},
      {path: 'contact', redirectTo: 'contact', title: 'Contact', pathMatch: 'full'},
      {path: 'skills', redirectTo: 'skills', title: 'Skills', pathMatch: 'full'},
];
