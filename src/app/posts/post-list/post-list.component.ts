import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

 // posts = [
 //   {title: 'First post', content: 'This is the first post\'s content'},
 //   {title: 'Second post', content: 'This is the second post\'s content'},
//    {title: 'Third post', content: 'This is the third post\'s content'},
//  ];

posts: Post[] = [];
private postsSub: Subscription;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPosts();
    this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
          this.posts = posts;
      });
  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }

  ngOnDestroy()  {
    this.postsSub.unsubscribe();
  }

}
