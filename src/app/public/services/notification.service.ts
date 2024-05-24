import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notification } from '../model/notification.entity';
import { BaseService } from "../../shared/base.service";

@Injectable({
  providedIn: 'root'
})
export class NotificationService extends BaseService<Notification> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/notifications';
  }
}
