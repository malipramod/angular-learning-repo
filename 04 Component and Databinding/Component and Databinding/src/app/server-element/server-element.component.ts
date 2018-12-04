import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
  // ,encapsulation:ViewEncapsulation.Emulated //None,Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  //srvElement: alias
  @Input('srvElement') element: { type: string, name: string, content: string };
  @ViewChild('heading') header:ElementRef;
  @ContentChild('contentParagraph') paragraph:ElementRef;
  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called ', changes);
  }
  ngDoCheck() {
    console.log('ngDoCheck called');
  }
  ngOnInit() {
    console.log('ngOnInit called');
    console.log('Text Content: ',this.header.nativeElement.textContent);
    console.log('paragraph ',this.paragraph.nativeElement.content);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log('paragraph ',this.paragraph.nativeElement.content);    
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
    console.log('Text Content: ',this.header.nativeElement.textContent);
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }


}
