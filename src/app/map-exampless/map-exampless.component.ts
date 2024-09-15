import { PostService } from './../post.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { concatMap, tap, mergeMap, switchMap, from, Observable } from 'rxjs';


@Component({
  selector: 'app-map-exampless',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map-exampless.component.html',
  styleUrl: './map-exampless.component.scss'
})
export class MapExamplessComponent {

  logs : string[] = [];

  constructor(private postService: PostService) {}

  runConcatMap() {
    this.logs = ['Starting Concat Example ...'];

    const postIds = [1, 2, 3, 4, 5];

    from(postIds).pipe(
      concatMap(id => this.postService.slowGetPostById(id).pipe(
        tap(post => this.logs.push(`Fetched post ${post.id}: ${post.title}`)),
        concatMap(post => this.postService.getCommentForPost(post.id))
      ))
    ).subscribe(
      comment => this.logs.push(`Fetched comment: ${comment}`),
      error => this.logs.push(`Error: ${error}`),
      () => this.logs.push('concatMap sequence complete')
    );
  }
  }


