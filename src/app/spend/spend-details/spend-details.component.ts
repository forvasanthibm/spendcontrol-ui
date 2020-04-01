import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Location, DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SpendService } from 'src/app/services/spend.service';
import { SpendDetails } from 'src/app/model/spend_details';
import { SPEND_TYPE } from '../../shared/constant';

@Component({
  selector: 'app-spend-details',
  templateUrl: './spend-details.component.html',
  styleUrls: ['./spend-details.component.css']
})
export class SpendDetailsComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private service: SpendService,
    private location: Location,
    private datePipe: DatePipe) {
  }

  spend: SpendDetails;
  public registerForm: FormGroup;
  public spendTypes = SPEND_TYPE;

  ngOnInit() {

    this.registerForm = new FormGroup({
      email: new FormControl(''),
      spendType: new FormControl(''),
      category: new FormControl(''),
      vendor: new FormControl(''),
      invoiceAmount: new FormControl(''),
      spendDate: new FormControl('')
    });
    this.registerForm.disable();

    let id: string = this.activeRoute.snapshot.params['id'];
    this.service.getDataById(id).subscribe(
      response => {
        console.log(JSON.stringify(response));
        this.spend = response;
        this.registerForm = new FormGroup({
          email: new FormControl(this.spend.email),
          spendType: new FormControl(this.spend.spendType),
          category: new FormControl(this.spend.category),
          vendor: new FormControl(this.spend.vendor),
          invoiceAmount: new FormControl(this.spend.invoiceAmount),
          spendDate: new FormControl(this.datePipe.transform(this.spend.spendDate,'dd-MM-yyyy')),
        });
        this.registerForm.disable();
      },
      error => {
      }
    );
  }

  onCancel() {
    this.location.back();
  }

}
