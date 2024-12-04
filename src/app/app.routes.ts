import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NearestStationComponent } from './nearest-station/nearest-station.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route for Home
  { path: 'nearest-station', component: NearestStationComponent }, // Route for Nearest Station
];
