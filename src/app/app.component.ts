import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabs = [
    {
      title: 'Search',
      index: 0,
      tabIndex: -1,
      selected: true
    },
    {
      title: 'Frequently Called',
      index: 1,
      tabIndex: 0,
      selected: false
    }
  ];

  ChangeTab(selected: number) {
    this.tabs.forEach(tab => {
      const tabSelected = (tab.index === selected);
      tab.tabIndex = (tabSelected ? -1 : 0);
      tab.selected = tabSelected;
    });
  }
}
