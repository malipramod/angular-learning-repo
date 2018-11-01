import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted = false;
  @ViewChild('f') signupForm: NgForm;
  subscription = {
    email: '',
    password: '',
    subscription: ''
  }
  subscriptions = ["Basic", "Advanced", "Pro"];
  defaultSubscription = 'Advanced';
  onSubmit() {
    this.submitted = true;
    this.subscription.email = this.signupForm.value.email
    this.subscription.password = this.signupForm.value.password
    this.subscription.subscription = this.signupForm.value.subscription

    this.signupForm.reset();
  }
}
