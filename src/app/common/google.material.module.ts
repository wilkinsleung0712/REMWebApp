
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
  MdInputModule
} from '@angular/material';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgModule } from '@angular/core';
import { SharedConfirmDialog } from '../shared/dialog/shared.confirm.dialog';

@NgModule({
  imports: [],
  exports: [MaterialModule, MdButtonModule, MdCheckboxModule, MdCardModule, MdSidenavModule, MdTabsModule, MdGridListModule, MdDialogModule, MdTableModule, NgxDatatableModule, MdInputModule],
  declarations: [SharedConfirmDialog]
})
export class GoogleMaterialModule { }
