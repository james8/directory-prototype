import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AdminFrequentlyCalledComponent } from '../admin-frequently-called/admin-frequently-called.component';

@Injectable()
export class FrequentlyCalledCanDeactivateGuard implements CanDeactivate<AdminFrequentlyCalledComponent> {
  canDeactivate(component: AdminFrequentlyCalledComponent) {
    // apply when form is dirty
    if (true === true) {
      return window.confirm('Are you sure you want to leave? Any unsaved data will be deleted.');
    }

    return true;
  }
}
