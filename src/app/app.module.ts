import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TotalSummaryComponent } from './shared/total-summary/total-summary.component';
import { SidebarNavComponent } from './shared/sidebar-nav/sidebar-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { UserStoriesComponent } from './user-stories/user-stories.component';
import { UserStoryItemComponent } from './shared/user-story-item/user-story-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TotalSummaryComponent,
    SidebarNavComponent,
    UserStoriesComponent,
    UserStoryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
