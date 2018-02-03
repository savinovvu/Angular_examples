import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SimpleDataSource} from './datasource/simple-data-source.service';
import {Model} from './repository/model.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[Model, SimpleDataSource],
})
export class MyModelModule { }
