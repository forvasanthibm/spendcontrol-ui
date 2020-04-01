import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common';
import { SpendService } from 'src/app/services/spend.service';
import { SpendDetails } from 'src/app/model/spend_details';
import { SPEND_TYPE } from '../../shared/constant';
import { MessageBox, MessageBoxButton } from 'src/app/shared/message-box';
import * as moment from 'moment';

@Component({
  selector: 'app-spend-update',
  templateUrl: './spend-update.component.html',
  styleUrls: ['./spend-update.component.css']
})
export class SpendUpdateComponent implements OnInit {

  public spendId: String;
  spend: SpendDetails;
  public registerForm: FormGroup;
  public spendTypes = SPEND_TYPE;

  constructor(
    private activeRoute: ActivatedRoute,
    private dialog: MatDialog,
    private service: SpendService,
    private location: Location
  ) { }

  ngOnInit() {

    this.registerForm = new FormGroup({
      email: new FormControl(''),
      spendType: new FormControl(''),
      category: new FormControl(''),
      vendor: new FormControl(''),
      invoiceAmount: new FormControl(''),
      spendDate: new FormControl('')
    });

    let id: string = this.activeRoute.snapshot.params['id'];
    this.spendId = id;
    this.service.getDataById(id).subscribe(
      response => {
        this.spend = response;
        this.registerForm = new FormGroup({
          email: new FormControl(this.spend.email, [Validators.required, Validators.maxLength(50), Validators.email]),
          spendType: new FormControl(this.spend.spendType, [Validators.required]),
          category: new FormControl(this.spend.category, [Validators.required, Validators.maxLength(30)]),
          vendor: new FormControl(this.spend.vendor, [Validators.required, Validators.maxLength(30)]),
          invoiceAmount: new FormControl(this.spend.invoiceAmount, [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+(.[0-9]{0,2})?$')]),
          spendDate: new FormControl(moment(this.spend.spendDate).toDate(), [Validators.required]),
        });
      },
      error => {
      }
    );

  }

  public hasError(controlName: string, errorName: string) {
    return this.registerForm.controls[controlName].hasError(errorName);
  }

  public register(registerFormValue) {
    if (this.registerForm.valid) {
      var spend = new SpendDetails;
      spend.id = this.spendId;
      spend.email = registerFormValue.email;
      spend.spendType = registerFormValue.spendType;
      spend.category = registerFormValue.category;
      spend.vendor = registerFormValue.vendor;
      spend.invoiceAmount = registerFormValue.invoiceAmount;
      spend.spendDate = registerFormValue.spendDate;
      this.service.updateData(this.spendId, spend).subscribe(
        response => {
          MessageBox.show(this.dialog, "Alert", 'Successfully updated the reord ' + this.spendId, MessageBoxButton.Ok, "350px");
        },
        error => {
        }
      );
    } else
      MessageBox.show(this.dialog, "Error", 'Some Input data are invalid', MessageBoxButton.Ok, "350px");
  }

  onCancel() {
    this.location.back();
  }

}
