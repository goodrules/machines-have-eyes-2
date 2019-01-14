import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import {MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatDividerModule,
  MatToolbarModule,MatCardModule, MatGridListModule,MatListModule  
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatMenuModule,MatIconModule,MatDividerModule,MatToolbarModule,MatCardModule,MatGridListModule,MatListModule ],
  exports: [MatButtonModule, MatCheckboxModule,MatMenuModule,MatIconModule,MatDividerModule,MatToolbarModule,MatCardModule,MatGridListModule,MatListModule ]
})
export class MaterialsModule { }
