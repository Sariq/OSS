import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatSliderModule,
} from '@angular/material/slider';

@NgModule({
  imports: [
    FlexLayoutModule,
    MatSliderModule
  ],
  exports: [
    FlexLayoutModule,
  
  ]
})
export class MaterialModule {}
