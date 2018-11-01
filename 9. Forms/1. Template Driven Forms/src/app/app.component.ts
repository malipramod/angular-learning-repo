import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm:NgForm;
  defaultQuestion='pet';
  answer='';
  genders=['male','female'];
  user={
    username:'',
    email:'',
    secret:'',
    answer:'',
    gender:''
  };
  submitted=false;
  suggestUserName() {
     const suggestedName = 'Superuser_'+Math.round((Math.random()*100000));
    // this.signupForm.setValue({
    //   userData:{
    //     username:suggestedName,
    //     email:''
    //   },
    //   secret:'pet',
    //   questionAnswer:'',
    //   gender:'male'
    // });
    this.signupForm.form.patchValue({
      userData:{
        username:suggestedName
      }
    });

  }

  // onSubmit(form:NgForm){
  //   console.log(form);
  // }
  onSubmit(){
    this.submitted=true;
    //console.log(this.signupForm);
    this.user.username=this.signupForm.value.userData.username;
    this.user.email=this.signupForm.value.userData.email;
    this.user.secret=this.signupForm.value.secret;
    this.user.answer=this.signupForm.value.questionAnswer;
    this.user.gender=this.signupForm.value.gender;

    this.signupForm.reset();
  }
}
