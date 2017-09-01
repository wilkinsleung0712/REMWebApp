import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA, MdButton } from "@angular/material";

@Component({
  selector: 'app-shared-confirm-dialog',
  template: "<p>Are you should to {{action}} on  ?<p>"
  + "<button md-button color=\"primary\" [md-dialog-close]=true >Yes</button>"
  + "<button md-button color=\"warn\" [md-dialog-close]=false >No</button>"
})
export class SharedConfirmDialog implements OnInit {


  constructor(
    // tell angular to set the name ref for this Dialog
    public dialogRef: MdDialogRef<SharedConfirmDialog>,
    // inject data for this dialog
    @Inject(MD_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

}
