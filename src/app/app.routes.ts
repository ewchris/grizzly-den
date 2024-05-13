import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ResumeComponent } from './pages/resume/resume.component';

export const routes: Routes = [
  {
    path: 'about',
    title: 'About',
    component: AboutComponent,
    data: { title: 'About' }
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: { title: 'Blog' }
  },
  {
    path: 'resume',
    component: ResumeComponent,
    data: { title: 'Resume' }
  },
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  // {
  //   path: '**',
  //   title: '404',
  //   component: NotFoundComponent,
  //   data: { title: '404' }
  // }
];

// @NgModule({
//   exports: [RouterModule],
//   imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
// })
// export class AppRoutingModule { }