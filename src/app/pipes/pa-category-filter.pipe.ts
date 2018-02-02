import {Pipe, PipeTransform} from '@angular/core';
import {Product} from "../model/product.model";

@Pipe({
  name: 'filter',
  pure: false
})
export class PaCategoryFilterPipe implements PipeTransform {

  transform(products: Product[], category: string): Product[] {
    if(category === "all"){
      return products;
    }
    if (category == undefined) {
      return products;
    } else {
      return products.filter(product => product.category == category);
    }
  }

}
