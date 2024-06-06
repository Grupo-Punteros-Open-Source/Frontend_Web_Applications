import { Component, OnInit } from '@angular/core';
import {NotificationService} from "../../services/notification.service";
import {Notification} from "../../model/notification.entity";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications: Notification[] = [];
  displayedColumns: string[] = ['title', 'message', 'delete'];
  constructor(private notificationService: NotificationService) { }
  message = '';

  ngOnInit(): void {
    this.getNotifications();
  }

  getNotifications(): void {
    this.notificationService.getAll().subscribe((notifications: any) => {
      this.notifications = notifications;
      if (this.notifications.length === 0) {
        this.message = 'Sin notificaciones';
      }
    });
  }

  deleteNotification(id: string): void {
    this.notificationService.delete(id).subscribe(() => {
      this.getNotifications();
    });
  }
}