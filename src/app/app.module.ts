import { LegalInfo } from './../providers/legal-info';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SearchLegalPage } from '../pages/search-legal/search-legal';

@NgModule({
  declarations: [
    MyApp,
    SearchLegalPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchLegalPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, LegalInfo]
})
export class AppModule {}
