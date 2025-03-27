import { Component } from '@angular/core';
import { BlogContentService } from '../../services/content/blog-content.service';
import { CommonModule } from '@angular/common';
import { PostsComponent } from '../../components/posts/posts.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, PostsComponent],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogData$: ReturnType<BlogContentService['getBlogPosts']>;

  constructor(private blogContentService: BlogContentService) {
    this.blogData$ = this.blogContentService.getBlogPosts();
  }
}