import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Model} from './model-provider/model.service';
import {StaticDataSource} from './datasource/static-data-source.service';
import {HttpClientModule} from '@angular/common/http';
import {REST_URL, RestDataSource} from './datasource/rest-data-source.service';


@NgModule({
  imports: [
     HttpClientModule
  ],
  declarations: [],
  providers: [Model, RestDataSource, ModelModule,
    {provide: REST_URL, useValue: `http://localhost:3500/products`}
  ]
})
export class ModelModule { }
