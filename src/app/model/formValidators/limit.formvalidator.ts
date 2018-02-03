import {FormControl} from '@angular/forms';

export class LimitFormValidator {

  static limit(limit: number) {
    return (control: FormControl): { [key: string]: any } => {
      let val = Number(control.value);
      if (val != NaN && val > limit) {
        return {'limit': {'limit': limit, 'actualValue': val}};
      } else {
        return null;
      }
    };
  }

}
