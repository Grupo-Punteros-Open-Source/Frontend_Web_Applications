import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {UserService} from "../../../User/services/user.service";
import {WorkshopService} from "../../../User/services/workshop.service";
import {HistoryService} from "../../services/history.service";
import {MaintenanceService} from "../../services/maintenance.service";
import {Maintenance} from "../../model/maintenance";
import {User} from "../../../User/model/user.entity";
import {Workshop} from "../../../User/model/workshop.entity";
import {History} from "../../model/history.entity";
import {BehaviorSubject, combineLatest, fromEvent} from 'rxjs';
import {map, debounceTime, distinctUntilChanged} from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrl: './history-card.component.css'
})
export class HistoryCardComponent implements OnInit, AfterViewInit{

  user: User = {} as User;
  workshop: Workshop = {} as Workshop;
  history = new MatTableDataSource<History>();
  maintenance: Maintenance[] = [];
  @ViewChild('filterInput', { static: true }) filterInput!: ElementRef;

  constructor(private userService: UserService,
              private workshopService: WorkshopService,
              private historyService: HistoryService,
              private maintenanceService: MaintenanceService) {
    this.history = new MatTableDataSource<History>();
  }

  ngOnInit() {
    this.getHistory();
  }

  ngAfterViewInit() {
    fromEvent(this.filterInput.nativeElement, 'keyup')
        .pipe(
            debounceTime(150),
            distinctUntilChanged(),
            map((event: any) => event.target.value)
        )
        .subscribe((filterValue: string) => {
          this.history.filter = filterValue.trim().toLowerCase();
        });
  }

  getHistory() {
    let userId = localStorage.getItem('user');

    if (userId) {
      let userid = JSON.parse(userId);
      console.log(userid);
      this.userService.getById(Number(userid)).subscribe((response: User) => {
        this.user = response;
        this.workshopService.getAll().subscribe((workshop: any) => {
          this.workshop = workshop.find((workshop: Workshop) => Number(workshop.user_id) === Number(this.user.id));
          this.maintenanceService.getAll().subscribe((maintenance: any) => {
            this.maintenance = maintenance.filter((maintenance: Maintenance) => Number(maintenance.workshop_id) === Number(this.workshop.id));
            this.maintenance = maintenance.filter((maintenance: Maintenance) => maintenance.status === 'completed');
            this.historyService.getAll().subscribe((history: any) => {
              this.history.data = history.filter((history: History) =>
                  this.maintenance.some((maintenance: Maintenance) =>
                      Number(maintenance.history_id) === Number(history.id)
                  )
              );

            });
          });
        });
      });
    }
  }



  applyFilter() {
    const filterValue = this.filterInput.nativeElement.value;
    if (filterValue) {
      this.history.filter = filterValue.trim().toLowerCase();
    } else {
      this.history.filter = '';
    }
  }
}