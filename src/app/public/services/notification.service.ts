import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notification } from '../model/notification.entity';
import { BaseService } from "../../shared/base.service";
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NotificationService extends BaseService<Notification> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/notifications';

  }



  createNotification(title: string, message: string, type: string): Observable<Notification> {
    return new Observable<Notification>(observer => {
      this.getAll().subscribe((response: any) => {
        const notifications: Notification[] = response;
        const notification = {
          id: (notifications.length + 1).toString(),
          type,
          title,
          message,
          timestamp: new Date().toISOString(),
          read: false
        };

        this.create(notification).subscribe(createdNotification => {
          observer.next(createdNotification);
          observer.complete();
        });
      });
    });
  }


}
