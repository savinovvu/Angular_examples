import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CoreModule} from './core/core.module';
import {MessageModule} from './messages/messages.module';
import {AppComponent} from './app-component/app.component';
import {routing} from './app.routing';
import {EmptyComponent} from './empty/empty.component';
import {TermsGuard} from './guards/guard.service';
import {LoadGuard} from './guards/load-guard.service';


@NgModule({

  imports: [
    BrowserModule, CoreModule, MessageModule, routing
  ],
  providers: [TermsGuard, LoadGuard],

  bootstrap: [AppComponent],

  declarations: [AppComponent, EmptyComponent]
})
export class AppModule {
}
