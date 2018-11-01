import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding-problem',
  templateUrl: './databinding-problem.component.html',
  styleUrls: ['./databinding-problem.component.css']
})
export class DatabindingProblemComponent implements OnInit {
  enableButton:boolean=false;
  userName:string='';
  constructor() { }

  ngOnInit() {
  }

  onClickResetButton(){
   this.userName='';
  }

}
