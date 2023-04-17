import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleScratchCardRoutingModule } from './simple-scratch-card-routing.module';
import { SimpleScratchCardComponent } from './simple-scratch-card.component';


@NgModule({
  declarations: [
    SimpleScratchCardComponent
  ],
  imports: [
    CommonModule,
    SimpleScratchCardRoutingModule
  ]
})
export class SimpleScratchCardModule { }
