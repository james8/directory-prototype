import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Formatters } from '../formatters.service';

@Component({
  selector: 'app-frequently-called-add',
  templateUrl: './frequently-called-add.component.html',
  styleUrls: ['./frequently-called-add.component.css']
})
export class FrequentlyCalledAddComponent {
  @Output() whenClose = new EventEmitter();
  headerTitle: string = 'Add a new frequently called item';

  constructor(private formatters: Formatters) { }

  OnPhoneChange(elem) {
    this.formatters.FormatPhoneNum(elem);
  }

  OnSubmit(form: NgForm) {
    console.log(form.value);
  }

  OnClose() {
    this.whenClose.emit();
  }
}
