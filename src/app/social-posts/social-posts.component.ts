import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  myPosts: Post[] = [
    {
      title: "It's almost 5",
      thought: 'Today was a long day',
    },
    {
      title: 'this better work',
      thought: "why doesn't this work",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  onDelete = (index: number): void => {
    this.myPosts.splice(index, 1);
  };

  onSubmit = (post: Post): void => {
    this.myPosts.unshift(post);
  };
}
