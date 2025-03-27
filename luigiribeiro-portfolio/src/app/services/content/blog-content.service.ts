import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, switchMap, map, tap } from 'rxjs';
import { GlobalService } from '../global.service';
import { BlogData } from '../../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogContentService {
  private blogData$ = new BehaviorSubject<any>(null);

constructor(
    private http: HttpClient,
    private globalService: GlobalService
  ) {
    this.initialize();
}

private initialize() {
    this.http.get<BlogData>('/content/blog.json').pipe(
      tap(data => this.blogData$.next(data)),
      switchMap(() => this.globalService.language$)
    ).subscribe();
}

getBlogPosts() {
    return this.globalService.language$.pipe(
        switchMap(lang => this.blogData$.pipe(
        map(data => data?.[lang] || {})  
        ))
    );    
}




private slugify(text: string): string {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  }
}