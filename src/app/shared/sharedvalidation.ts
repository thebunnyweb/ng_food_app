import { AbstractControl, ValidationErrors } from '@angular/forms';

export function checkNumber(control: AbstractControl) {

  if (control && (control.value !== "" && control.value !== undefined)) {
    const pattern = new RegExp('^[0-9]{10}$');
    if (!pattern.test(control.value)) {
      return {
        isError: true,
      }
    }
    return null
  }
  return {
    isError: true
  }
}

export function checkConfirmPassword(control: AbstractControl): ValidationErrors {
  if (control && (control.value !== "" && control.value !== undefined)) {
    const passwordFieldValue = control.root.get('password').value;
    if (passwordFieldValue !== control.value) {
      return {
        isError: true
      }
    }
    return null
  }
  return {
    isError: true
  }
}
