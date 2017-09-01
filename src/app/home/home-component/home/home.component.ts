import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataSource } from '@angular/cdk';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { DataDialogComponent } from '../data-dialog/data-dialog.component';
import { MdDialog, MdSnackBar } from '@angular/material';
import * as DataType from '../../../shared/model/datamodel';
import { ReportService } from '../../../shared/services/report.services';
import { element } from 'protractor';
import { DecimalPipe } from '@angular/common';
import { CategoryResult } from '../../../shared/model/datamodel';
import { ViewNotificationUtils } from '../../../shared/view-notification';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {

  isLoading: boolean = true;
  testResultData = [];
  testData = [];
  tbData = [];
  varienceReportData$: Observable<DataType.VarienceReportResultList>;
  constructor(
    private reportService: ReportService,
    private viewNotificationUtils: ViewNotificationUtils,
    private notificationBar: MdSnackBar,
    public dialog: MdDialog) {

  }

  ngOnInit() {
    console.log('home component');
    // this.reportService.fetchVarienceReportData().subscribe((data) => console.log(data));
    // this.varienceReportData$ = this.reportService.fetchVarienceReportData();
    this.varienceReportData$ = this.reportService.fetchVarienceReportData();
    this.varienceReportData$.subscribe((result: DataType.VarienceReportResultList) => {
      // constructing data object to display
      this.testData = result.categoryResultList;
      result.categoryResultList.slice().forEach(category => {
        category.data.forEach(element => {
          element.entityId = category.entityId;
          element.category = category.category;
          element.basis = result.basis;
          element.beginPeriod = result.beginPeriod;
          element.endPeriod = result.endPeriod;
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

  onViewClickAction(action: string, value: any) {
    console.log('View button clicked!' + value + action);
  }

  onEditClickAction(action: string, value: CategoryResult) {
    console.log('Edit button clicked!' + value + action);
    console.log(value);
    this.dialog.open(
      DataDialogComponent,
      {
        data: {
          'dialogData': value,
          'action': action
        },
      }).afterClosed().subscribe(result => {
        console.log('diaglog update result ->' + result.action);
        console.log(result.value);

        if (result.action === 'UPDATE') {
          this.reportService.submitBudgetNote(value).subscribe(res => console.log(res));
        } else if (result.action === 'DELETE') {
          // this.photoService.
          console.log('CANCELED');
        }
        console.log('finish for delete|update in details dialog');
        this.viewNotificationUtils.openToolTipsNotification(this.notificationBar, result.type, 'SUCCESS');
        // this.routerUtils.goBack();

      });

  }

}
