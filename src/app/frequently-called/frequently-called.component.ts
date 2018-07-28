import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

export interface IFrequentlyCalled {
  Title: string;
  Phone: string;
  Phone2: string;
  Email: string;
  Site: string;
  Modified: string;
}

@Component({
  selector: 'app-frequently-called',
  templateUrl: './frequently-called.component.html',
  styleUrls: ['./frequently-called.component.css']
})
export class FrequentlyCalledComponent {
  title: string = 'frequently called numbers';

  frequentlyCalled: IFrequentlyCalled[];
  frequentlyCalledTemp: IFrequentlyCalled[];

  fakeFrequentlyCalled: IFrequentlyCalled[] = [
    {
      Title: 'ELL',
      Phone: '(000) 000-0000',
      Phone2: null,
      Email: null,
      Site: null,
      Modified: '07/18/2017 0:00:00AM'
    },
    {
      Title: 'FMS, Help Desk',
      Phone: '(111) 111-1111',
      Phone2: null,
      Email: null,
      Site: null,
      Modified: '07/18/2017 0:00:00AM'
    },
    {
      Title: 'Food Services',
      Phone: '(222) 222-2222',
      Phone2: '(333) 333-3333',
      Email: null,
      Site: null,
      Modified: '07/18/2017 0:00:00AM'
    },
    {
      Title: 'Fraud and Ethics Hotline',
      Phone: '(444) 444-4444',
      Phone2: null,
      Email: null,
      Site: 'reportlineweb.com/hidoe',
      Modified: '07/18/2017 0:00:00AM'
    },
    {
      Title: 'Recruitment - Classified/Support Services Personnel Recruitment',
      Phone: '(555) 555-5555',
      Phone2: null,
      Email: 'cssp_recruitment@hawaiidoe.org',
      Site: null,
      Modified: '07/18/2017 0:00:00AM'
    },
    {
      Title: 'TSEAS, Help Desk',
      Phone: '(666) 666-6666',
      Phone2: null,
      Email: 'help_tseas@notes.k12.hi.us',
      Site: 'hawaiipublicschools.org',
      Modified: '07/18/2017 0:00:00AM'
    }
  ];

  constructor(private _app: AppComponent) {
    _app.ChangeTab();

    setTimeout(() => {
      this.frequentlyCalled = this.fakeFrequentlyCalled;
      this.frequentlyCalledTemp = this.frequentlyCalled;
    }, 1000);
  }

  FilterFrequentlyCalled() {
    const query: string = (document.getElementById('frequently-called-filter') as HTMLInputElement).value;
    this.frequentlyCalled = this.frequentlyCalledTemp;
    this.frequentlyCalled = this.frequentlyCalled.filter(data => data.Title.toLowerCase().includes(query.toLowerCase()));
  }
}
