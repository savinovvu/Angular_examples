import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';


import {ProductComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductTableComponent} from './components/product-table/product-table.component';
import {ProductFormComponent} from './model/product-form/product-form.component';
import {PaToggleViewComponent} from './components/pa-toggle-view/pa-toggle-view.component';
import {PaAttrDirective} from './common/directive/pa-attr.directive';
import {PaStructureDirective} from './common/directive/pa-structure.directive';
import {PaIteratorDirective} from './common/directive/pa-iterator.directive';
import {PaCellColor} from './common/directive/pa-cell-color.directive';
import {PaCellColorSwitcher} from './common/directive/pa-cell-color-switcher.directive';
import {PaAddTaxPipe} from './common/pipes/pa-add-tax.pipe';
import {PaCategoryFilterPipe} from './common/pipes/pa-category-filter.pipe';
import {PaDiscountDisplayComponent} from './components/pa-discount-display/pa-discount-display.component';
import {PaDiscountEditorComponent} from './components/pa-discount-editor/pa-discount-editor.component';
import {DiscountService} from './common/services/discount.service';
import {PaDiscountPipe} from './common/pipes/pa-discount.pipe';
import {PaDiscountAmountDirective} from './common/directive/padiscount-amount-directive.directive';
import {LOG_LEVEL, LOG_SERVICE, LogLevel, LogService, SpecialLogService} from './common/services/log.service';
import {PaDisplayValueDirective, VALUE_SERVICE} from './common/directive/pa-display-value.directive';
import {MyModelModule} from './model/model.module';
import {MyCommonModule} from './common/common.module';
import {ComponentsModule} from './components/components.module';


@NgModule({
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, MyModelModule, MyCommonModule, ComponentsModule
  ],
  providers: [DiscountService, LogService,
    {provide: VALUE_SERVICE, useValue: 'Apples'}
  ],

  bootstrap: [ProductFormComponent, ProductTableComponent]
})
export class AppModule {
}
