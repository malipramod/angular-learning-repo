import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Pramod1', 'Pramod2'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenName.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email],this.forbiddenEmail)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

    // this.signupForm.valueChanges.subscribe(
    //   (value)=>{
    //     console.log(value);
    //   })
    this.signupForm.statusChanges.subscribe(
      (status)=>{
        console.log(status);
      });
      // this.signupForm.setValue({
      //   'userData': {
      //     'username': 'Pramod',
      //     'email': 'test@test.com'
      //   },
      //   'gender': 'male',
      //   'hobbies': []
      // })

      // this.signupForm.patchValue({
      //   'userData': {
      //     'username': 'Pramod'
      //   }
      // })
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  forbiddenName(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true }
    }
    return null;
  }

  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test@test.com") {
          resolve({ 'emailIsForbidden': true });
        } else {
          resolve(null)
        }
      }, 1000)
    });
    return promise;
  }
}
