import { Injectable } from '@angular/core';

@Injectable()
export class Formatters {
  FormatPhoneNum(elem) {
    const phoneNum: HTMLInputElement = elem.target;
    const key: number = elem.keyCode;
    const cursorIndex: number = elem.target.selectionStart;

    // remove alpha & non-numeric characters
    phoneNum.value = phoneNum.value.replace(/[A-z]|\W/g, '');

    const length = phoneNum.value.length;
    if (length > 10) phoneNum.value = phoneNum.value.substr(0, 10);

    // format phone number
    if (length === 3) phoneNum.value = phoneNum.value.replace(/(\d{3})/, '$1-');
    else if ((length > 3) && (length <= 7)) phoneNum.value = phoneNum.value.replace(/(\d{3})(\d{1,4})/, '$1-$2');
    else phoneNum.value = phoneNum.value.replace(/^(\d{3})(\d{3})(\d{2,4})/, '($1) $2-$3');

    // keep cursor in current position if moving with arrows or deleting
    if ((key === 37) || (key === 39) || (key === 8) || (key === 46)) phoneNum.setSelectionRange(cursorIndex, cursorIndex);
  }
}
