import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../shared/base.service';
import { Notification } from '../model/notification.entity';

@Injectable({
  providedIn: 'root'
})
export class NotificationService extends BaseService<Notification> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/notifications';
  }
}