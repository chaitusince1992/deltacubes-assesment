import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-user-stories',
  templateUrl: './user-stories.component.html',
  styleUrls: ['./user-stories.component.scss']
})
export class UserStoriesComponent implements OnInit {

  filterString: string = "";
  userStoryListUi: any = [];
  sub: any;

  constructor(private route: ActivatedRoute, private appService: AppService) { }

  ngOnInit(): void {
    this.appService.userStoryList.forEach((d: any) => d.active = false)
    this.userStoryListUi = this.appService.userStoryList.slice();

    this.sub = this.appService.userListId.subscribe(id => {
      // console.log(id, "Active id")
      let data = this.userStoryListUi.filter((d: any) => d.id === id);
      if (data && data.length) {
        setTimeout(() => {
          this.storyDetails(data[0]);
        }, 100)
      }
    })
  }

  filterStringChange(text: string) {
    console.log("damn filter", this.filterString, text);
    let text2 = text.toLowerCase();
    this.userStoryListUi = this.appService.userStoryList.filter(d => {
      return d.name.toLowerCase().indexOf(text2) > -1 || d.state.toLowerCase().indexOf(text2) > -1 || d.summary.toLowerCase().indexOf(text2) > -1;
    });
  }

  storyDetails(item: any) {
    console.log(item);
    this.userStoryListUi.forEach((d: any) => (d.active = false));
    item.active = true;
  }

}
