import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Model} from './model-provider/model.service';
import {StaticDataSource} from './datasource/static-data-source.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [Model, StaticDataSource]
})
export class ModelModule { }
