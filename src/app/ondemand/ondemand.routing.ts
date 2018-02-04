import {OndemandComponent} from './ondemand/ondemand.component';
import {RouterModule, Routes} from '@angular/router';
import {FirstComponent} from './first/first.component';
import {ThirdComponent} from './third/third.component';
import {SecondComponent} from './second/second.component';

let routing = RouterModule.forChild([
  {path: '', component: OndemandComponent}
]);

const routes: Routes = [
    {
      path: '',
      component: OndemandComponent,
      children: [
        {outlet: 'primary', path: '', component: FirstComponent},
        {outlet: 'left', path: '', component: SecondComponent},
        {outlet: 'right', path: '', component: ThirdComponent}
      ]
    },
    {
      path: 'swap',
      component: OndemandComponent,
      children: [
        {outlet: 'primary', path: '', component: SecondComponent},
        {outlet: 'left', path: '', component: ThirdComponent},
        {outlet: 'right', path: '', component: FirstComponent}
      ]
    }
  ]
;


export const ondemandRouting = RouterModule.forChild(routes);
