import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { TableService } from './table.service';
import { UserDtls } from './UserDtls';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { SharedService } from '../shared.service';
import { User } from '../login/user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: []
})
export class TableComponent implements OnInit, AfterViewInit {

  logedUser: User = null;
  public displayedColumnsParent = ['id', 'email', 'spendDetails', 'details', 'update', 'delete'];
  public displayedColumnsChild = ['spendType', 'category', 'vendor', 'invoiceAmount', 'spendDate'];
  public dataSourceParent = new MatTableDataSource<UserDtls>();

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  pageIndex = 0;
  totalLength: number = 0;
  pageSize: number = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  constructor(private tservice: TableService, private _sharedService: SharedService) {
    _sharedService.changeEmitted$.subscribe(
      user => {
        this.logedUser = user;
      });
  }

  ngOnInit() {
    this.tservice.getData().subscribe(
      (data: any) => {
        //alert(JSON.stringify(data));
        this.dataSourceParent.data = data;
      });
  }

  ngAfterViewInit(): void {
    this.dataSourceParent.sort = this.sort;
    this.dataSourceParent.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    if (value.length < 3)
      return;
    this.dataSourceParent.filter = value.trim().toLocaleLowerCase();
  }

  pageChange(event: any) {
    /*this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize
    this.createTable();*/
  }

  public redirectToDetails = (id: string) => {
    let url: string = `/owner/details/${id}`;
    //this.router.navigate([url]);
  }

  public redirectToUpdate = (id: string) => {
    let url: string = `/owner/update/${id}`;
    //this.router.navigate([url]);
  }

  public redirectToDelete = (id: string) => {
    let url: string = `/owner/delete/${id}`;
    //this.router.navigate([url]);
  }

}