import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../shared/base.service';
import { History } from '../model/history.entity';

@Injectable({
  providedIn: 'root'
})
export class HistoryService extends BaseService<History> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/histories';
  }
}
