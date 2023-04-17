import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleScratchCardComponent } from './simple-scratch-card.component';

const routes: Routes = [{ path: '', component: SimpleScratchCardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleScratchCardRoutingModule { }
