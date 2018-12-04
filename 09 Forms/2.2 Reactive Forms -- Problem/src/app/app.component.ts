import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  statues=['Stable', 'Critical', 'Finished'];
  projectForm: FormGroup;
  forbiddenProjectnames = ['Test'];

  ngOnInit(){
    this.projectForm = new FormGroup({
      'projectData':new FormGroup({
        'project':new FormControl(null,[Validators.required],this.forbiddenProjectName.bind(this)),
        'email':new FormControl(null, [Validators.required, Validators.email])
      }),
      'status':new FormControl('Critical')
    })
  }

  forbiddenProjectName(control: FormControl):Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "Test") {
          resolve({ 'nameIsForbidden': true });
        } else {
          resolve(null)
        }
      }, 1000)
    });
    return promise;
  }

  onSubmit(){
    console.log(this.projectForm);
  }
}
