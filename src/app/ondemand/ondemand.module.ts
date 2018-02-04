import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OndemandComponent} from './ondemand/ondemand.component';
import {RouterModule} from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import {ondemandRouting} from './ondemand.routing';
import { ThirdComponent } from './third/third.component';



@NgModule({
  imports: [
    CommonModule, ondemandRouting
  ],
  declarations: [OndemandComponent, FirstComponent, SecondComponent, ThirdComponent],
  exports: [OndemandComponent]
})
export class OndemandModule {
}
