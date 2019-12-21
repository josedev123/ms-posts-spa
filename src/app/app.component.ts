import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ms-posts-spa';
  storedPosts = [];

  OnPostAdded(post) {
    this.storedPosts.push(post);
  }
}
