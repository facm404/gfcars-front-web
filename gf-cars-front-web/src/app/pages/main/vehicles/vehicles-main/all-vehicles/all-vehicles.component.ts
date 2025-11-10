import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface VehicleSpecifications {
  engine: string;
  transmission: string;
  fuel: string;
  doors: number;
  seats: number;
  distance: number;
  horsepower: number;
  price: number;
}

interface Vehicle {
  id: number;
  make: string;
  model: string;
  image: string[];
  specifications: VehicleSpecifications;
  equipment: string[];
}

@Component({
  selector: 'app-all-vehicles',
  templateUrl: './all-vehicles.component.html',
  styleUrls: ['./all-vehicles.component.scss']
})
export class AllVehiclesComponent implements OnInit {
  vehicles: Vehicle[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.http
      .get<{ models: Vehicle[] }>('assets/mocks/vehiculos.json')
      .subscribe(({ models }) => {
        this.vehicles = models;
      });
  }

  goToDetail(vehicle: Vehicle): void {
    this.router.navigate(['../detail', vehicle.id], { relativeTo: this.route });
  }
}
