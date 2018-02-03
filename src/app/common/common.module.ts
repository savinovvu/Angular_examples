import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaDisplayValueDirective, VALUE_SERVICE} from './directive/pa-display-value.directive';
import {DiscountService} from './services/discount.service';
import {LogService} from './services/log.service';
import {PaAddTaxPipe} from './pipes/pa-add-tax.pipe';
import {PaAttrDirective} from './directive/pa-attr.directive';
import {PaCategoryFilterPipe} from './pipes/pa-category-filter.pipe';
import {PaCellColor} from './directive/pa-cell-color.directive';
import {PaCellColorSwitcher} from './directive/pa-cell-color-switcher.directive';
import {PaDiscountPipe} from './pipes/pa-discount.pipe';
import {PaStructureDirective} from './directive/pa-structure.directive';
import {PaIteratorDirective} from './directive/pa-iterator.directive';
import {PaDiscountAmountDirective} from './directive/padiscount-amount-directive.directive';
import {MyModelModule} from '../model/model.module';
import {Model} from '../model/repository/model.service';

@NgModule({
  imports: [MyModelModule],
  providers: [LogService, DiscountService,
    {provide: VALUE_SERVICE, useValue: 'Apples'}],

  declarations: [PaAddTaxPipe, PaAttrDirective, PaCategoryFilterPipe,
    PaCellColor, PaCellColorSwitcher, PaDiscountPipe,
    PaDiscountAmountDirective, PaIteratorDirective, PaStructureDirective,
    Model, PaDisplayValueDirective],

  exports: [PaAddTaxPipe, PaAttrDirective, PaCategoryFilterPipe,
    PaCellColor, PaCellColorSwitcher, PaDiscountPipe,
    PaDiscountAmountDirective, PaIteratorDirective, PaStructureDirective,
    Model, PaDisplayValueDirective]
})
export class MyCommonModule {
}
