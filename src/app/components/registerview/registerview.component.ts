import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { registerTransitions } from '@shared/animations';


@Component({
  selector: 'app-registerview',
  templateUrl: './registerview.component.html',
  styleUrls: ['./registerview.component.scss'],
  animations: [registerTransitions]
})
export class RegisterviewComponent implements OnInit {
  @Input() loginForm;
  @Input() registerForm;

  resgisterTemplateDisplay: Boolean = false;
  constructor() { }

  ngOnInit() {
  }

  passLogingData(value) {
    console.log(value);
  }

  passRegisterData(value) {
    console.log(value);
  }

  toggleForm(e): void {
    this.resgisterTemplateDisplay = !this.resgisterTemplateDisplay;
  }

}
