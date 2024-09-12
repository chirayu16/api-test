import { Component, OnInit } from '@angular/core';import e from 'express';
import { PostService } from '../post.service';
import { error } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit {

  posts: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
    },
    (error) => {
      console.error('Error Fetching posts:', error);
     }
    );  
  }
}
