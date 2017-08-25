import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import { ColliersMRIAPIResponse } from '../model/datamodel';

@Injectable()
export class ReportService {
  private API_BASE = 'http://localhost:8080';
  private TEST_API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api/company';
  private API_BASE_VARIENCE_REPORT = this.API_BASE + '/report/varience/data';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {

  }

  fetchVarienceReportData() {
    return this.http.post(
      this.API_BASE_VARIENCE_REPORT,
      {
        'buildingList': [
          '201122'
        ],
        'period': '201405',
        'basis': 'A',
        'finFormat': 'TEST_FORMAT'
      }
    ).map(this.extractData).catch(this.extractError);
  }

  fetchTestVarienceReportData() {
    return this.http.get('./assets/test.data.json').map(this.extractData).catch(this.extractError);
  }

  fetchTestData() {
    return this.http.get(this.API_BASE + '/test').map(this.extractData).catch(this.extractError);
  }



  private extractData(response: Response) {
    let body = response.json();
    if (response.status === 200) {
      return body.data || {};
    } else {
      console.error(body.msg);
    }
    return body || {};
  }

  private extractError(error: any) {
    console.error(error);
    return Observable.throw(error);
  }

}
