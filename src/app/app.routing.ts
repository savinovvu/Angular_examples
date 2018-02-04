import {RouterModule, Routes} from '@angular/router';
import {FormComponent} from './core/components/form/form.component';
import {TableComponent} from './core/components/table-component/table-component.component';
import {NotFoundComponent} from './core/components/not-found/not-found.component';
import {ProductCountComponent} from './core/components/product-count/product-count.component';
import {CategoryCountComponent} from './core/components/category-count/category-count.component';
import {ModelResolver} from './model/services/model-resolver.service';
import {EmptyComponent} from './empty/empty.component';
import {TermsGuard} from './guards/guard.service';
import {UnsavedGuard} from './guards/unsaved-guard.service';
import {LoadGuard} from './guards/load-guard.service';


const modelResolver = {model: ModelResolver};


const routes: Routes = [
  {
    path: 'form/:mode/:id', component: FormComponent,
    canDeactivate: [UnsavedGuard]
  },
  {path: 'form/:mode', component: FormComponent, canActivate: [TermsGuard]},
  {path: 'table', component: TableComponent},
  {path: 'table/:category', component: TableComponent},
  {path: '', redirectTo: '/table', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];


export const routing = RouterModule.forRoot(routes);

