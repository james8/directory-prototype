import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  showResults: boolean = false;
  category: string = "";
  query: string = "";

  results = [
    {
      FirstName: 'Kevin',
      LastName: 'Minion',
      Phone: '(000) 000-0000'
    },
    {
      FirstName: 'Bob',
      LastName: 'Minion',
      Phone: '(111) 111-1111',
      Fax: '(222) 222-2222'
    },
    {
      FirstName: 'Dave',
      LastName: 'Minion',
      Phone: '(333) 333-3333',
      Cellular: '(444) 444-4444'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  Search() {
    const categories: HTMLSelectElement = document.getElementById('search-categories') as HTMLSelectElement;
    const query: HTMLInputElement = document.getElementById('search-query') as HTMLInputElement;

    this.showResults = true;
    this.category = categories.options[categories.selectedIndex].value;
    this.query = query.value;
  }
}