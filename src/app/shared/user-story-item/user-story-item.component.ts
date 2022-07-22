import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-story-item',
  templateUrl: './user-story-item.component.html',
  styleUrls: ['./user-story-item.component.scss']
})
export class UserStoryItemComponent implements OnInit {

  @Input() story: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.story)
  }

  getclassName(story: any) {
    return story.state.toLowerCase().replaceAll(" ", "");
  }
}
