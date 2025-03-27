import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CardData } from '../../models/card.model';
import { BlogPost } from '../../models/blog.model';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import AOS from 'aos';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnChanges {
  // Declare inputs exactly like DevelopmentsComponent
  @Input() posts: BlogPost[] = [];
  @Input() sectionTitle = '';
  
  cardData: CardData[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['posts']) {
      this.processPosts();
    }
  }

  private processPosts() {
    this.cardData = this.posts.map(post => ({
      type: 'blog',
      title: post.title,
      subtitle: post.subtitle,
      description: post.summary,
      imagePath: post.imagePath,
      readMoreLink: `/blog/${this.slugify(post.title)}`
    }));

    setTimeout(() => AOS.refresh(), 0);
  }

  private slugify(text: string): string {
    return text.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  }
}