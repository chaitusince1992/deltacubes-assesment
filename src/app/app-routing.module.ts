import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryDetailsComponent } from './story-details/story-details.component';
import { UserStoriesComponent } from './user-stories/user-stories.component';


const routes: Routes = [
  { path: '', redirectTo: '/user-stories', pathMatch: 'full' },
  {
    path: 'user-stories',
    component: UserStoriesComponent,
    children: [
      {
        path: 'details/:id', // child route path
        component: StoryDetailsComponent, // child route component that the router renders
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
