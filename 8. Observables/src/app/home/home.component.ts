import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription,Observer,interval } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersObsSubscription: Subscription;
  customObs: Subscription;
  constructor() { }

  ngOnInit() {
    const myNumbers =interval(1000).pipe(map((data:number)=>{
      return data*2;
    }));
    this.numbersObsSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('First Package');
      }, 2000);
      setTimeout(() => {
        observer.next('Second Package');
      }, 4000);
      setTimeout(() => {
        // observer.error('Failed Package');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.error('Third Package');
      }, 6000);
    });
    this.customObs = myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('Completed'); }
    );
  }

  ngOnDestroy() {
    this.numbersObsSubscription.unsubscribe();
    this.customObs.unsubscribe();
  }

}
