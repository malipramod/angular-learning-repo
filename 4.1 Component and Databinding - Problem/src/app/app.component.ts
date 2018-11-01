import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  oddNumbers:number[]=[];
  evenNumbers:number[]=[];

  intervalFired(fireNumber:number){
    if(fireNumber%2===0){
      this.evenNumbers.push(fireNumber);
    }else{
      this.oddNumbers.push(fireNumber);
    }
  }
}
