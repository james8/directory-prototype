import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { IFrequentlyCalled } from '../frequently-called/frequently-called.component';

@Component({
  selector: 'app-admin-frequently-called',
  templateUrl: './admin-frequently-called.component.html',
  styleUrls: ['./admin-frequently-called.component.css']
})
export class AdminFrequentlyCalledComponent {
  addBtnTitle: string = 'Add frequently called';
  frequentlyCalled: IFrequentlyCalled[];
  showBackdrop: boolean = false;
  showAdd: boolean = false;

  fakeFrequentlyCalled: IFrequentlyCalled[] = [
    {
      Title: 'A+ Program',
      Phone: '(111) 111-1111',
      Phone2: null,
      Email: null,
      Site: null,
      Modified: '07/18/2018 0:00:00AM'
    },
    {
      Title: 'Accounting',
      Phone: '(111) 111-1111',
      Phone2: '(222) 222-2222',
      Email: null,
      Site: null,
      Modified: '07/18/2018 0:00:00AM'
    },
    {
      Title: 'Geographic Exception (GE)',
      Phone: '(111) 111-1111',
      Phone2: null,
      Email: 'sample@notes.k12.hi.us',
      Site: null,
      Modified: '07/18/2018 0:00:00AM'
    },
    {
      Title: 'Worker Compensation',
      Phone: '(111) 111-1111',
      Phone2: null,
      Email: null,
      Site: 'http://www.hawaiipublicschools.org',
      Modified: '07/18/2018 0:00:00AM'
    }
  ];

  constructor(private _app: AppComponent) {
    _app.ChangeTab();

    setTimeout(() => {
      this.frequentlyCalled = this.fakeFrequentlyCalled;
    }, 1000);
  }

  CreateNew() {
    this.showBackdrop = true;
    this.showAdd = true;
  }

  CloseForm() {
    this.showBackdrop = false;
    this.showAdd = false;
  }
}
