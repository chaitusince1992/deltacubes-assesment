import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserStoriesComponent } from './user-stories/user-stories.component';


const routes: Routes = [
  { path: '', redirectTo: '/user-stories', pathMatch: 'full' },
  { path: 'user-stories', component: UserStoriesComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
