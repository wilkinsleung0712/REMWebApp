import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataSource } from '@angular/cdk';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { SharedConfirmDialog } from '../../../shared/dialog/shared.confirm.dialog';
import { DataDialogComponent } from '../data-dialog/data-dialog.component';
import { MdDialog, MdSnackBar } from '@angular/material';
import * as DataType from '../../../shared/model/datamodel';
import { ReportService } from '../../../shared/services/report.services';
import { element } from 'protractor';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {

  isLoading: boolean = true;
  testResultData = [];
  testData=[];
  varienceReportData$: Observable<DataType.VarienceReportResultList>;
  constructor(
    private reportService: ReportService,
    public dialog: MdDialog) {

  }

  ngOnInit() {
    console.log('home component');
    // this.reportService.fetchVarienceReportData().subscribe((data) => console.log(data));
    // this.varienceReportData$ = this.reportService.fetchVarienceReportData();
    this.varienceReportData$ = this.reportService.fetchTestVarienceReportData();
    this.varienceReportData$.subscribe((result: DataType.VarienceReportResultList) => {
      // constructing data object to display
      this.testData = result.categoryResultList;
      result.categoryResultList.slice().forEach(category => {
        category.data.forEach(element => {
          element.entityId = category.entityId;
          element.category = category.category;
          this.testResultData.push(element);
        });
      });
      console.log(this.testData);
      console.log(this.testResultData);
      this.isLoading = false;
    });
  }

  getRowClass(row) {
    return {
      'age-is-ten': (row.age % 10) === 0
    };
  }

  getCellClass({ row, column, value }): any {
    return {
      'is-female': value === 'female'
    };
  }

  onViewClickAction(value: any) {

  }

  onEditClickAction(value: any) {
    console.log('clicked!' + value);
    let dialogRef = this.dialog.open(
      DataDialogComponent,
      {
        data: value
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('diaglog update result ->' + result);
      // if (result.data) {
      //   if (result.type === 'UPDATE') {
      //     this.photoService.updatePhoto(result.data);
      //   } else if (result.type === 'DELETE') {
      //     // this.photoService.
      //     console.log('ready for delete');
      //     this.photoService.deletePhoto(result.data);
      //   }

      console.log('finish for delete|update in details dialog');
      // this.viewNotificationUtils.openToolTipsNotification(this.notificationBar,result.type,"SUCCESS");
      // this.routerUtils.goBack();
    }
    );

  }

}
