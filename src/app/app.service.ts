import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  userListId = new BehaviorSubject(null); //0 is the initial value.   


  userStoryList = [
    {
      id: "1",
      active: false,
      name: "WAT-936",
      state: "Review",
      summary: "As a use, I should have an option to run Ransomware testing for my DB-Table, Database and Column so that how fast...."
    },
    {
      id: "2",
      active: false,
      name: "WAT-937",
      state: "Dev Done",
      summary: "As a use, I should have an option to run Ransomware testing for my DB-Table, Database and Column so that how fast...."
    },
    {
      id: "3",
      active: false,
      name: "WAT-938",
      state: "Done",
      summary: "As a use, I should have an option to run Ransomware testing for my DB-Table, Database and Column so that how fast...."
    },
    {
      id: "4",
      active: false,
      name: "WAT-939",
      state: "Review",
      summary: "As a use, I should have an option to run Ransomware testing for my DB-Table, Database and Column so that how fast...."
    },
    {
      id: "5",
      active: false,
      name: "WAT-940",
      state: "Review",
      summary: "As a use, I should have an option to run Ransomware testing for my DB-Table, Database and Column so that how fast...."
    },
    {
      id: "6",
      active: false,
      name: "WAT-941",
      state: "Review",
      summary: "As a use, I should have an option to run Ransomware testing for my DB-Table, Database and Column so that how fast...."
    },
    {
      id: "7",
      active: false,
      name: "WAT-942",
      state: "Review",
      summary: "As a use, I should have an option to run Ransomware testing for my DB-Table, Database and Column so that how fast...."
    },
    {
      id: "8",
      active: false,
      name: "WAT-943",
      state: "Review",
      summary: "As a use, I should have an option to run Ransomware testing for my DB-Table, Database and Column so that how fast...."
    },
  ]
}
