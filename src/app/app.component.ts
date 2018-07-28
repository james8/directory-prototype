import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

interface ITab {
  title: string;
  route: string;
  tabIndex: number;     // specify if tab is focusable
  selected: boolean;    // specify if tab is selected for CSS
  admin: boolean;       // specify if tab appears in public/admin portal
  portal: boolean;      // specify if tab is a portal tab
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  portal: boolean = false;

  // list portal tabs at the end
  tabs: ITab[] = [
    // public tabs
    {
      title: 'Search',
      route: '/search',
      tabIndex: -1,
      selected: true,
      admin: false,
      portal: false
    },
    {
      title: 'Frequently Called',
      route: '/frequently-called',
      tabIndex: 0,
      selected: false,
      admin: false,
      portal: false
    },

    // admin tabs
    {
      title: 'Frequently Called',
      route: '/admin/frequently-called',
      tabIndex: 0,
      selected: false,
      admin: true,
      portal: false
    },

    // portal tabs
    {
      title: 'Admin Portal',
      route: '/admin/frequently-called',
      tabIndex: 0,
      selected: false,
      admin: false,
      portal: true
    },
    {
      title: 'Public Portal',
      route: '/search',
      tabIndex: 0,
      selected: false,
      admin: true,
      portal: true
    }
  ];

  constructor (private _router: Router, private _location: Location) {
    this.ChangeTab();
  }

  ChangeTab(index?: number) {
    const routeIndex: number = (index === undefined) ? this.tabs.findIndex(tab => (tab.route === this._location.path())) : index;

    // change tab if valid route
    if (routeIndex > -1) {
      // change portal tabs depending on route
      const selected: ITab = this.tabs[routeIndex];
      if (selected.portal) this.portal = !selected.admin;
      else this.portal = selected.admin;

      this.tabs.forEach((tab, i) => {
        const tabSelected = (i === routeIndex);
        tab.tabIndex = (tabSelected ? -1 : 0);
        tab.selected = tabSelected;
      });
    }

    // change route if root route (i.e. 'localhost:4200/#/') - doesnt redirect from router
    else this._router.navigateByUrl('/search');
  }
}
