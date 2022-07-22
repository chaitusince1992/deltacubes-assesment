import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-story-details',
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.scss']
})
export class StoryDetailsComponent implements OnInit {
  private sub: any;
  // public id: any;
  public details: any = [];

  constructor(private route: ActivatedRoute, private appService: AppService) { }


  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params: any) => {
      this.details = this.appService.userStoryList.filter(d => d.id === params.id);
      // console.log(this.details);
      this.appService.userListId.next(params.id)
    });
  }

}
