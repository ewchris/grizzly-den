import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'about',
    title: 'Evan\'s Den - About',
    component: AboutComponent,
    data: { title: 'About' }
  },
  {
    path: 'resume',
    title: 'Evan\'s Den - Resume',
    component: ResumeComponent,
    data: { title: 'Resume' }
  },
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: '**',
    title: '404',
    component: NotFoundComponent,
    data: { title: '404' }
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
})
export class AppRoutingModule { }