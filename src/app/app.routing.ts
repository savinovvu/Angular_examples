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

const childRoutes: Routes = [
  {
    path: '',
    component: EmptyComponent,
    canActivateChild: [TermsGuard],
    children:
      [
        {path: '', children: []},
        {path: 'products', component: ProductCountComponent},
        {path: 'categories', component: CategoryCountComponent}
      ],
    resolve: modelResolver
  }
];
const routes: Routes = [
  {
    path: 'ondemand',
    loadChildren: 'app/ondemand/ondemand.module#OndemandModule',
    canLoad:[LoadGuard]
  },
  {
    path: 'form/:mode/:id',
    component: FormComponent,
    resolve: modelResolver,
    canDeactivate: [UnsavedGuard]
  },
  {
    path: 'form/:mode',
    component: FormComponent,
    resolve: modelResolver,
    canActivate: [TermsGuard],
  },
  {path: 'table', component: TableComponent, children: childRoutes},
  {path: 'table/:category', component: TableComponent, children: childRoutes},
  {path: '', redirectTo: '/table', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

export const routing = RouterModule.forRoot(routes);

