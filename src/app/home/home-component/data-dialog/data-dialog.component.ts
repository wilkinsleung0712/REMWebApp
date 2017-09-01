import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA, MdDialog } from '@angular/material';
import { CategoryResult, REMDialogData } from '../../../shared/model/datamodel';
import { SharedConfirmDialog } from '../../../shared/dialog/shared.confirm.dialog';

@Component({
  selector: 'app-data-dialog',
  templateUrl: './data-dialog.component.html',
  styleUrls: ['./data-dialog.component.css']
})
export class DataDialogComponent implements OnInit {

  constructor(
    // tell angular to set the name ref for this Dialog
    public dialogRef: MdDialogRef<DataDialogComponent>,
    // inject data for this dialog
    @Inject(MD_DIALOG_DATA) public data: REMDialogData,
    public dialog: MdDialog
  ) { }

  ngOnInit() {
    console.log(this.data);
  }

  confirmDialog(data: CategoryResult, action: string) {
    console.log('confirm dialog open ->');
    this.dialog.open(SharedConfirmDialog,
      {
        data: {
          'action': action
        }

      })
      .afterClosed()
      .subscribe(confirm => {
        if (confirm) {
          // here we confirm to our action
          console.log('after confirm dialog closed, we fire action');
          this.dialogRef.close(
            {
              'action': action,
              'value': data
            }
          );
        }
      });
  }
}
