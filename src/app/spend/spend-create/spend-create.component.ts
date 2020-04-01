import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { SpendService } from 'src/app/services/spend.service';
import { SpendDetails } from 'src/app/model/spend_details';
import { SPEND_TYPE } from '../../shared/constant';
import { MessageBox, MessageBoxButton } from 'src/app/shared/message-box';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spend-create',
  templateUrl: './spend-create.component.html',
  styleUrls: ['./spend-create.component.css']
})
export class SpendCreateComponent implements OnInit {

  public registerForm: FormGroup;
  public spendTypes = SPEND_TYPE;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private service: SpendService,
  ) { }

  ngOnInit() {

    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.email]),
      spendType: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      vendor: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      invoiceAmount: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+(.[0-9]{0,2})?$')]),
      spendDate: new FormControl('', [Validators.required])
    });

  }

  public hasError(controlName: string, errorName: string) {
    return this.registerForm.controls[controlName].hasError(errorName);
  }

  public onCancel() {
    //this.location.back();
  }

  public register(registerFormValue) {
    if (this.registerForm.valid) {
      var spend = new SpendDetails;
      spend.email = registerFormValue.email;
      spend.spendType = registerFormValue.spendType;
      spend.category = registerFormValue.category;
      spend.vendor = registerFormValue.vendor;
      spend.invoiceAmount = registerFormValue.invoiceAmount;
      spend.spendDate = registerFormValue.spendDate;
      this.service.saveData(spend).subscribe(
        response => {
          MessageBox.show(this.dialog, "Alert", 'Successfully added the reord', MessageBoxButton.Ok, "350px")
            .subscribe(result => {
              let url: string = `/home`;
              this.router.navigate([url]);
            });
        },
        error => {
        }
      );
    } else
      MessageBox.show(this.dialog, "Error", 'Some Input data are invalid', MessageBoxButton.Ok, "350px");
  }

}
