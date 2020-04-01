import { Component, OnInit, ViewChild } from '@angular/core';
import { SpendService } from '../../services/spend.service';
import { SpendDetails } from '../../model/spend_details';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { MessageBoxButton, MessageBox } from 'src/app/shared/message-box';
import { UserSpend } from 'src/app/model/user_spend';

@Component({
  selector: 'app-spend-list',
  templateUrl: './spend-list.component.html',
  styles: []
})
export class SpendListComponent implements OnInit {

  constructor(
    private service: SpendService,
    private router: Router,
    private dialog: MatDialog) {
  }

  public dialogConfig;
  public displayedColumnsParent = ['email', 'spendDetails', 'details', 'update', 'delete'];
  public displayedColumnsChild = ['spendType', 'category', 'vendor', 'invoiceAmount', 'spendDate'];
  public dataSourceParent = new MatTableDataSource<UserSpend>();

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  pageIndex = 0;
  totalLength: number = 0;
  pageSize: number = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  ngOnInit() {

    this.dataSourceParent.paginator = this.paginator;
    this.dataSourceParent.sort = this.sort;
    this.dataSourceParent.filterPredicate = (data, filter: string) => {
      const accumulator = (currentTerm, key) => {
        return this.nestedFilterCheck(currentTerm, data, key);
      };
      const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
      const transformedFilter = filter.trim().toLowerCase();
      return dataStr.indexOf(transformedFilter) !== -1;
    }

    this.getSpendList();
  }

  applyFilter(filterValue: string) {
    this.dataSourceParent.filter = filterValue.trim().toLowerCase();
    if (this.dataSourceParent.paginator) {
      this.dataSourceParent.paginator.firstPage();
    }
  }

  pageChange(event: any) {
    /*this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize
    this.createTable();*/
  }

  public getSpendList() {

    this.service.getData().subscribe(
      response => {
        this.dataSourceParent.data = response;
      },
      error => {
      }
    );
  }

  public redirectToDetails = (id: string) => {
    let url: string = `/spend/details/${id}`;
    this.router.navigate([url]);
  }

  public redirectToUpdate = (id: string) => {
    let url: string = `/spend/update/${id}`;
    this.router.navigate([url]);
  }

  public redirectToDelete = (id: string) => {
    MessageBox.show(this.dialog, "Confirm Action", 'Do you want to delete the record ?', MessageBoxButton.YesNo, "350px")
      .subscribe(result => {
        const dialogResult = (result === undefined) ? "none" : result.result;
        if (dialogResult == "yes") {
          this.service.deleteData(id).subscribe(
            response => {
              MessageBox.show(this.dialog, "Alert", 'Successfully deleted the reord ' + id, MessageBoxButton.Ok, "350px")
                .subscribe(result => {
                  this.getSpendList();
                });
            },
            error => {
            }
          );
        }
      });

  }

  nestedFilterCheck(search, data, key) {
    if (typeof data[key] === 'object') {
      for (const k in data[key]) {
        if (data[key][k] !== null) {
          search = this.nestedFilterCheck(search, data[key], k);
        }
      }
    } else {
      search += data[key];
    }
    return search;
  }

}