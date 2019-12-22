import { Post } from './post.model';
import { Subject } from 'rxjs';

export class PostsService {
  private posts: Post[] = [];
  private PostsUpdated = new Subject<Post[]>();

  getPosts() {
      return [...this.posts];
  }

  getPostUpdateListener() {
      return this.PostsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {title, content};
    this.posts.push(post);
    this.PostsUpdated.next([...this.posts]);
  }
}
