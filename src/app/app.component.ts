import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'deltacubes-assesment';
  selectedProject(item: any) {
    console.log(item);
  }
  projectList = [
    {
      id: 1,
      name: "Pensions & Annuity"
    }, {
      id: 2,
      name: "Loans & Debts"
    }, {
      id: 3,
      name: "Insurance"
    },
  ]
}
