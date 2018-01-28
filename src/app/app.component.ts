import {Component} from '@angular/core';
import {Model} from './repository/model.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ProductComponent {
  public model: Model = new Model();
  fontSizeWithUnits: string = "30px";
  fontSizeWithoutUnits: string= "30";

  getClasses(key: number): string {
    let product = this.model.getProduct(key);
    return 'p-a-1 ' + (product.price < 50 ? 'bg-info' : 'bg-warning');
  }

  getClassMap(key: number): Object {
    let product = this.model.getProduct(key);
    return {
      'text-xs-center bg-danger': product.name == 'Kayak',
      'bg-info': product.price < 50
    };
  }


}
