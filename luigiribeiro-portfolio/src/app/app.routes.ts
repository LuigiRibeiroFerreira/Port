import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';



export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home' },
    { path: 'about', component: AboutComponent, title: 'About' },
    { path: 'projects', component: ProjectsComponent, title: 'Projects' },
    { path: 'blog', component: BlogComponent, title: 'Blog' },
    { path: '**', redirectTo: '' }
  ];