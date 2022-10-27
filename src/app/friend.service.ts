import { Injectable } from '@angular/core';
import {Friend} from './friend'; 
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Friends} from './friends';
@Injectable({
  providedIn: 'root'
})
export class FriendService {
private friendUrl = 'http://localhost:4567/api/friends'
  constructor(private http: HttpClient) { }
  getFriends(): Observable<Friends> {
    return this.http.get<Friends>('http://localhost:4567/api/friends');
  }
}
