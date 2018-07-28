import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

export interface ISearchResult {
  FirstName: string;
  LastName: string;
  Phone: string;
  Fax?: string;
  Cellular?: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // showResults: boolean = false;
  category: string = '';
  query: string = '';
  searchResults: ISearchResult[] = [];

  fakeSearchResults: ISearchResult[] = [
    {
      FirstName: 'Kevin',
      LastName: 'da Minion',
      Phone: '(000) 000-0000'
    },
    {
      FirstName: 'Bob',
      LastName: 'da Minion',
      Phone: '(111) 111-1111',
      Fax: '(222) 222-2222'
    },
    {
      FirstName: 'Dave',
      LastName: 'da Minion',
      Phone: '(333) 333-3333',
      Cellular: '(444) 444-4444'
    }
  ];

  constructor(private _app: AppComponent) {
    _app.ChangeTab();

    setTimeout(() => {
      this.searchResults = this.fakeSearchResults;
    }, 1000);
  }

  ngOnInit() {
  }

  Search() {
    const categories: HTMLSelectElement = document.getElementById('search-categories') as HTMLSelectElement;
    this.category = categories.options[categories.selectedIndex].value;
    this.query = (document.getElementById('search-query') as HTMLInputElement).value;

    // this.showResults = true;
  }
}
