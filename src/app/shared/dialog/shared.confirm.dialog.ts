import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA, MdButton } from "@angular/material";

@Component({
  selector: 'app-shared-confirm-dialog',
  template: ""
})
export class SharedConfirmDialog implements OnInit {


  constructor(
    //tell angular to set the name ref for this Dialog
    public dialogRef: MdDialogRef<SharedConfirmDialog>,
    //inject data for this dialog
    @Inject(MD_DIALOG_DATA) public data:any) {
     }

  ngOnInit() {
  }

}
