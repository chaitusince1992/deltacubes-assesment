import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-stories',
  templateUrl: './user-stories.component.html',
  styleUrls: ['./user-stories.component.scss']
})
export class UserStoriesComponent implements OnInit {

  filterString: string = "";
  userStoryListUi: any = [];
  constructor() { }

  ngOnInit(): void {
    this.userStoryList.forEach((d: any) => d.active = false)
    this.userStoryListUi = this.userStoryList.slice();
  }

  filterStringChange(text: string) {
    console.log("damn filter", this.filterString, text);
    let text2 = text.toLowerCase();
    this.userStoryListUi = this.userStoryList.filter(d => {
      return d.name.toLowerCase().indexOf(text2) > -1 || d.state.toLowerCase().indexOf(text2) > -1 || d.summary.toLowerCase().indexOf(text2) > -1;
    });
  }

  userStoryList = [
    {
      id: "",
      active: false,
      name: "WAT-936",
      state: "Review",
      summary: "As a use, I should have an option to run Ransomware testing for my DB-Table, Database and Column so that how fast...."
    },
    {
      id: "",
      active: false,
      name: "WAT-937",
      state: "Dev Done",
      summary: "As a use, I should have an option to run Ransomware testing for my DB-Table, Database and Column so that how fast...."
    },
    {
      id: "",
      active: false,
      name: "WAT-938",
      state: "Done",
      summary: "As a use, I should have an option to run Ransomware testing for my DB-Table, Database and Column so that how fast...."
    },
    {
      id: "",
      active: false,
      name: "WAT-939",
      state: "Review",
      summary: "As a use, I should have an option to run Ransomware testing for my DB-Table, Database and Column so that how fast...."
    },
    {
      id: "",
      active: false,
      name: "WAT-940",
      state: "Review",
      summary: "As a use, I should have an option to run Ransomware testing for my DB-Table, Database and Column so that how fast...."
    },
    {
      id: "",
      active: false,
      name: "WAT-941",
      state: "Review",
      summary: "As a use, I should have an option to run Ransomware testing for my DB-Table, Database and Column so that how fast...."
    },
    {
      id: "",
      active: false,
      name: "WAT-942",
      state: "Review",
      summary: "As a use, I should have an option to run Ransomware testing for my DB-Table, Database and Column so that how fast...."
    },
    {
      id: "",
      active: false,
      name: "WAT-943",
      state: "Review",
      summary: "As a use, I should have an option to run Ransomware testing for my DB-Table, Database and Column so that how fast...."
    },
  ]

}
