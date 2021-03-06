
import {
  MdButtonModule,
  MdCheckboxModule,
  MdSidenavModule,
  MdCardModule,
  MdTabsModule,
  MdGridListModule,
  MdDialogModule,
  MaterialModule,
  MdTableModule,
  MdInputModule,
  MdSnackBarModule
} from '@angular/material';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgModule } from '@angular/core';
// import { SharedConfirmDialog } from '../shared/dialog/shared.confirm.dialog';

@NgModule({
  imports: [],
  exports: [
    MaterialModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdSidenavModule,
    MdTabsModule,
    MdGridListModule,
    MdDialogModule,
    MdTableModule,
    NgxDatatableModule,
    MdInputModule,
    MdSnackBarModule],
  declarations: []
})
export class GoogleMaterialModule { }
