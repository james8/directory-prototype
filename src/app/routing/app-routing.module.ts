import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { FrequentlyCalledComponent } from '../frequently-called/frequently-called.component';
import { PublicPortalComponent } from '../public-portal/public-portal.component';
import { AdminFrequentlyCalledComponent } from '../admin-frequently-called/admin-frequently-called.component';
import { AdminPortalComponent } from '../admin-portal/admin-portal.component';
import { FrequentlyCalledCanDeactivateGuard } from './frequently-called-can-deativate-guard.service';
import { FrequentlyCalledAddComponent } from '../frequently-called-add/frequently-called-add.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PublicPortalComponent,
    children: [
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'frequently-called',
        component: FrequentlyCalledComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminPortalComponent,
    children: [
      {
        path: 'frequently-called',
        component: AdminFrequentlyCalledComponent,
        canDeactivate: [ FrequentlyCalledCanDeactivateGuard ]
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/search'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
