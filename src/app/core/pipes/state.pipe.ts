import {Pipe, PipeTransform} from '@angular/core';
import {Model} from '../../model/model-provider/model.service';
import {MODES, SharedState} from '../state/shared-state.service';

@Pipe({
  name: 'formatState',
  pure: true
})
export class StatePipe implements PipeTransform {

  constructor(private model: Model) {
  }

  transform(value: any): string {
    if (value instanceof SharedState) {
      let state = value as SharedState;
      return MODES[state.mode] + (state.id != undefined ?
        ` ${this.model.getProduct(state.id).name}` : '');
    } else {
      return '<No Data>';
    }
  }
}
