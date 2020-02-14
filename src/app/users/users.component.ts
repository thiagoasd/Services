import { Component, OnInit, OnDestroy } from '@angular/core';
import { DummyService } from '../services/dummy.service';
import { user } from '../models/users';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  sub: Subscription;
  users: user[];
  constructor(private service: DummyService) { }

  ngOnInit(): void {
    this.sub = this.service.listUsers().subscribe(data => this.users = data);
    console.log("Subscribe de user feito")
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    console.log("Unsubscribe de user feito")
  }

}
