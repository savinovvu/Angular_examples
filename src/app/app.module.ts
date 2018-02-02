import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';


import {ProductComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductTableComponent} from './components/product-table/product-table.component';
import {ProductFormComponent} from './components/product-form/product-form.component';
import {PaToggleViewComponent} from './components/pa-toggle-view/pa-toggle-view.component';
import {PaAttrDirective} from './directive/pa-attr.directive';
import {PaStructureDirective} from './directive/pa-structure.directive';
import {PaIteratorDirective} from './directive/pa-iterator.directive';
import {PaCellColor} from './directive/pa-cell-color.directive';
import {PaCellColorSwitcher} from './directive/pa-cell-color-switcher.directive';
import {PaAddTaxPipe} from './pipes/pa-add-tax.pipe';
import {PaCategoryFilterPipe} from './pipes/pa-category-filter.pipe';
import {PaDiscountDisplayComponent} from './components/pa-discount-display/pa-discount-display.component';
import {PaDiscountEditorComponent} from './components/pa-discount-editor/pa-discount-editor.component';
import {DiscountService} from "./services/discount.service";
import {PaDiscountPipe} from './pipes/pa-discount.pipe';
import {PadiscountAmountDirectiveDirective} from './directive/padiscount-amount-directive.directive';
import {Model} from "./repository/model.service";
import {SimpleDataSource} from "./datasource/simple-data-source.service";


@NgModule({
  declarations: [
    ProductComponent,
    ProductTableComponent,
    ProductFormComponent,
    PaToggleViewComponent,
    PaAttrDirective,
    PaStructureDirective,
    PaIteratorDirective,
    PaCellColorSwitcher,
    PaCellColor,
    PaAddTaxPipe,
    PaCategoryFilterPipe,
    PaDiscountDisplayComponent,
    PaDiscountEditorComponent,
    PaDiscountPipe,
    PadiscountAmountDirectiveDirective,
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [DiscountService, Model, SimpleDataSource],
  bootstrap: [ProductComponent]
})
export class AppModule {
}
