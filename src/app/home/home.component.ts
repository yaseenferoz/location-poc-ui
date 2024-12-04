import { Component, OnInit } from '@angular/core';
import { StationService } from '../services/station.service';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // Include CommonModule here
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  stations: any[] = [];

  constructor(private stationService: StationService,private router: Router) {}
  navigateToNearestStation(): void {
    this.router.navigate(['/nearest-station']);
  }
  ngOnInit(): void {
    this.stationService.getAllStations().subscribe({
      next: (data) => (this.stations = data),
      error: (err) => console.error('Error fetching stations:', err),
    });
  }
}
