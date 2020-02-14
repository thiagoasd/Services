import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { user } from '../models/users';
import { post } from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class DummyService {
  private readonly API: string = "https://jsonplaceholder.typicode.com/"

  constructor(private http: HttpClient) {

  }

  listUsers() {
    return this.http.get<user[]>(this.API + "users")
  }

  listPosts() {
    return this.http.get<post[]>(this.API + "posts")
  }
}
