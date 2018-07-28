import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './routing/app-routing.module';
import { Formatters } from './formatters.service';
import { FrequentlyCalledCanDeactivateGuard } from './routing/frequently-called-can-deativate-guard.service';

import { AppComponent } from './app.component';
import { FrequentlyCalledComponent } from './frequently-called/frequently-called.component';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { FrequentlyCalledResultComponent } from './frequently-called-result/frequently-called-result.component';
import { PublicPortalComponent } from './public-portal/public-portal.component';
import { AdminFrequentlyCalledComponent } from './admin-frequently-called/admin-frequently-called.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { FrequentlyCalledAddComponent } from './frequently-called-add/frequently-called-add.component';

@NgModule({
  declarations: [
    AppComponent,
    FrequentlyCalledComponent,
    SearchComponent,
    SearchResultComponent,
    FrequentlyCalledResultComponent,
    PublicPortalComponent,
    AdminFrequentlyCalledComponent,
    AdminPortalComponent,
    FrequentlyCalledAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    Formatters,
    FrequentlyCalledCanDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
