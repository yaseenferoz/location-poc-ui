import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { StationService } from '../services/station.service';

@Component({
  selector: 'app-nearest-station',
  standalone: true,
  imports: [CommonModule, FormsModule], // Include required modules
  templateUrl: './nearest-station.component.html',
  styleUrls: ['./nearest-station.component.css'],
})
export class NearestStationComponent implements OnInit {
  userLocation = { latitude: 0, longitude: 0 }; // User's current or manual location
  nearestStation: any = null; // Stores the nearest station's data
  useCurrentLocation = true; // Toggle between current and manual location

  constructor(private stationService: StationService) {}

  ngOnInit(): void {
    console.log('NearestStationComponent initialized');
    // Automatically fetch the current location on component initialization
    if (this.useCurrentLocation) {
      this.getCurrentLocation();
    }
  }

  // Fetch the user's current location using the Geolocation API
  getCurrentLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.userLocation.latitude = position.coords.latitude;
          this.userLocation.longitude = position.coords.longitude;
          this.findNearestStation(); // Automatically find the nearest station
        },
        (error) => console.error('Error fetching location:', error)
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  // Find the nearest service station using the API
  findNearestStation(): void {
    this.stationService.findNearestStation(this.userLocation).subscribe({
      next: (data) => (this.nearestStation = data),
      error: (err) => console.error('Error finding nearest station:', err),
    });
  }

  // Toggle between current location and manual input mode
  toggleLocationInput(): void {
    this.useCurrentLocation = !this.useCurrentLocation;
    if (this.useCurrentLocation) {
      this.getCurrentLocation();
    }
  }
}
