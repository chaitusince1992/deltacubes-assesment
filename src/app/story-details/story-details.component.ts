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

  tableData = [
    {
      id: "Payment _RTGS Outward_09_TC_01",
      summary: `Verfiy if user is aable to initiate RTGS Outward payment for below combination
        Customer Type: Corporate Payment Type: RTGS Requested Execution Date: Back Date 
        Instrument Type: CHQ Instrument Date: Back Date Remittance Amount:  <2 Lac 
        Credit Excution Date: Today's Date Beneficary Customer Acct Type: SA Charge option: Our 
        Waive Charges: No`,
      status: "Automated",
    },
    {
      id: "Payment _RTGS Outward_09_TC_01",
      summary: `Verfiy if user is aable to initiate RTGS Outward payment for below combination
        Customer Type: Corporate Payment Type: RTGS Requested Execution Date: Back Date 
        Instrument Type: CHQ Instrument Date: Back Date Remittance Amount:  <2 Lac 
        Credit Excution Date: Today's Date Beneficary Customer Acct Type: SA Charge option: Our 
        Waive Charges: No`,
      status: "Automated",
    },
    {
      id: "Payment _RTGS Outward_09_TC_01",
      summary: `Verfiy if user is aable to initiate RTGS Outward payment for below combination
        Customer Type: Corporate Payment Type: RTGS Requested Execution Date: Back Date 
        Instrument Type: CHQ Instrument Date: Back Date Remittance Amount:  <2 Lac 
        Credit Excution Date: Today's Date Beneficary Customer Acct Type: SA Charge option: Our 
        Waive Charges: No`,
      status: "Automated",
    },
  ]
}
