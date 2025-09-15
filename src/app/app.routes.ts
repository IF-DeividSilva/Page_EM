import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';  // Note que mudamos de .component para apenas .ts

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];
