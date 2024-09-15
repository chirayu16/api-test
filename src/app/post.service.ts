import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable,of } from 'rxjs';

interface Post {
  userId:number;
  id:number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() : Observable<Post[]> {
      return this.http.get<Post[]>(this.apiUrl);
  }

  getPostById(id : number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }

  slowGetPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`).pipe(
      delay(2000)
    );
  }

  getCommentForPost(postId: number): Observable<string> {
    return of(`This is a comment for post ${postId}`).pipe(
      delay(1000) // 1 second delay
    );
  }
}

