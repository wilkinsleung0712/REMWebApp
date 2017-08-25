import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA, MdDialog } from '@angular/material';
import { SharedConfirmDialog } from '../../../shared/dialog/shared.confirm.dialog';
import { Varience } from '../../../shared/model/datamodel';

@Component({
  selector: 'app-data-dialog',
  templateUrl: './data-dialog.component.html',
  styleUrls: ['./data-dialog.component.css']
})
export class DataDialogComponent implements OnInit {
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(
    //tell angular to set the name ref for this Dialog
    public dialogRef: MdDialogRef<SharedConfirmDialog>,
    //inject data for this dialog
    @Inject(MD_DIALOG_DATA) public data: Varience,
    public dialog: MdDialog
  ) { }

  ngOnInit() {
  }



  confirmDialog() {
    console.log("confirm dialog open ->")
    this.dialog.open(SharedConfirmDialog,
      {
        data: {
          // 'name': photo.photoName,
          // 'action': action
          'data':this.data
        }

      })
      .afterClosed()
      .subscribe(confirm => {
        if (confirm) {
          //here we confirm to delete
          // console.log('type:'+action);
          // console.log('data:'+this.photo);
          // this.dialogRef.close(
          //   {
          //     type: action,
          //     data: this.photo
          //   }
          // );
        }
      });
  }
}
