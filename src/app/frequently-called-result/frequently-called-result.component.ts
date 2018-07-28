import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-frequently-called-result',
  templateUrl: './frequently-called-result.component.html',
  styleUrls: ['./frequently-called-result.component.css']
})
export class FrequentlyCalledResultComponent implements OnInit {
  @Input() frequentlyCalledResult;

  constructor() { }

  ngOnInit() {
  }

}
