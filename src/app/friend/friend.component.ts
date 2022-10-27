import { Component, OnInit } from '@angular/core';
import {FriendService} from '../friend.service';
import {Friend} from '../friend';
@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
  friends:Friend[] = [];

  constructor(private friendService: FriendService) { 
  }

  ngOnInit(): void {
  }
  viewFriends(): void{
  this.friendService.getFriends().subscribe(
    res=>this.friends = res.friends);
    //this.friends=[]; 
    //this.friends.push({name: 'patrick'});
    //this.friends.push({name: 'carlos'});
    //this.friends.push({name: 'bob'});
  }
  myEncode(toEncode: string): string{
    return btoa(toEncode)
  }
}
