import { UserService } from './../user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';

@NgModule({
  declarations: [FeatureComponent],
  exports: [FeatureComponent],
  imports: [
    CommonModule
  ],
  //providers: [UserService]
})
export class FeatureModule { }
