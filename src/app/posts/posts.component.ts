import { Component, OnInit } from '@angular/core';
import { post } from '../models/posts';
import { DummyService } from '../services/dummy.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  sub: Subscription;
  posts: post[];
  constructor(private service: DummyService) { }

  ngOnInit(): void {
    this.sub = this.service.listPosts().subscribe(data => this.posts = data);
    console.log("Subscribe de post feito")
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    console.log("Unsubscribe de post feito")
  }

}
