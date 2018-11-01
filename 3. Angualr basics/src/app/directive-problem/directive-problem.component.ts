import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-problem',
  templateUrl: './directive-problem.component.html',  
  styleUrls: ['./directive-problem.component.css']  
})
export class DirectiveProblemComponent implements OnInit {
  displayDetails:boolean=false;
  buttonArray=[];
  constructor() { }

  ngOnInit() {
  }

  toggleDetails(){
    this.displayDetails = ! this.displayDetails;
    // this.buttonArray.push(this.buttonArray.length+1);
    this.buttonArray.push(new Date());

    
  }

  getColor(){
    return this.buttonArray.length>=5?'blue':'white';
  }

}
