import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CompanyService} from "../../services/company.service";
import {Company} from "../../model/company.entity";

@Component({
  selector: 'app-workshop-info',
  templateUrl: './workshop-info.component.html',
  styleUrl: './workshop-info.component.css'
})
export class WorkshopInfoComponent implements OnInit{
  company: Company = {} as Company;

  constructor(private route: ActivatedRoute, private companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.companyService.getAll().subscribe((response: any) => {
      this.company = response;
    });
  }
}