import { Component, OnInit, Input } from '@angular/core';
import { ISearchResult } from '../search/search.component';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  @Input() searchResult;

  constructor() { }

  ngOnInit() {
  }

}