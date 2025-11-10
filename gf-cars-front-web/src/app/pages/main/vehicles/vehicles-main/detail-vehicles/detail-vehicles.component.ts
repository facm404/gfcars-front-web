import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';

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

interface DetailSpec {
  label: string;
  value: string;
}

@Component({
  selector: 'app-detail-vehicles',
  templateUrl: './detail-vehicles.component.html',
  styleUrls: ['./detail-vehicles.component.scss']
})
export class DetailVehiclesComponent implements OnInit {
  vehicle?: Vehicle;
  selectedImage?: string;
  specs: DetailSpec[] = [];
  equipmentColumns: string[][] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((params) => Number(params.get('id'))),
        switchMap((id) =>
          this.http
            .get<{ models: Vehicle[] }>('assets/mocks/vehiculos.json')
            .pipe(
              map((response) => response.models.find((model) => model.id === id))
            )
        )
      )
      .subscribe((vehicle) => {
        if (!vehicle) {
          this.router.navigate(['../all'], { relativeTo: this.route });
          return;
        }

        this.vehicle = vehicle;
        this.selectedImage = vehicle.image[0];
        this.specs = this.buildSpecs(vehicle);
        this.equipmentColumns = this.splitEquipment(vehicle.equipment);
      });
  }

  selectImage(image: string): void {
    this.selectedImage = image;
  }

  private buildSpecs(vehicle: Vehicle): DetailSpec[] {
    return [
      {
        label: 'Gear Box',
        value: vehicle.specifications.transmission
      },
      {
        label: 'Fuel',
        value: vehicle.specifications.fuel
      },
      {
        label: 'Doors',
        value: vehicle.specifications.doors.toString()
      },
      {
        label: 'Air Conditioner',
        value: vehicle.equipment.includes('Air Conditioning') ? 'Yes' : 'No'
      },
      {
        label: 'Seats',
        value: vehicle.specifications.seats.toString()
      },
      {
        label: 'Distance',
        value: vehicle.specifications.distance.toString()
      }
    ];
  }

  private splitEquipment(equipment: string[]): string[][] {
    const half = Math.ceil(equipment.length / 2);
    return [equipment.slice(0, half), equipment.slice(half)];
  }
}
