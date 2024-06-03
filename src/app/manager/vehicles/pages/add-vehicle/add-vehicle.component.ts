import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {VehicleService} from "../../../services/vehicle.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Vehicle} from "../../../model/vehicle.entity";

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrl: './add-vehicle.component.css'
})
export class AddVehicleComponent implements OnInit {
  public form!: FormGroup;
  vehicles: Vehicle[];
  clientId: any;

  constructor(private route: ActivatedRoute, private vehicleService: VehicleService, private formBuilder: FormBuilder) {
    this.vehicles = [];
    this.clientId = route.snapshot.paramMap.get('clientId');
  }

  public onSubmit() {
    this.vehicleService.create(
      {
        id: (Number(this.vehicles.length) + 1).toString(),
        customerId: this.clientId,
        plate: this.form.value.plate,
        make: this.form.value.make,
        model: this.form.value.model,
        year: this.form.value.year,
        color: this.form.value.color,
        imageUrl: this.form.value.imageUrl,
        mileage: this.form.value.kilometer,
        status: '',
        lastVisitDate: '',
        servicesHistory: [],
        comments: '',
        estimates: []
      }).subscribe(res => {
        console.log('New vehicle registered on database');
        this.form.reset();
        this.getVehicles();
    })
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      plate: [''],
      make: [''],
      model: [''],
      year: [''],
      color: [''],
      imageUrl: [''],
      kilometer: ['']
    });
    this.getVehicles();
  }

  getVehicles(): void {
    this.vehicleService.getAll()
      .subscribe((res: any) => {
        this.vehicles = res;
        console.log(`Retrieving all registered vehicles`);
      })
  }
}
