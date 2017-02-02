import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'CustomComponent',
  template: `<ul>
              <li upper *ngFor="let element of stringArray" >{{element}}</li>
            </ul>`,
  styleUrls: []
})
export class CustomComponentComponent implements OnInit {

  @Input() stringArray :string[];
  constructor() { }

  ngOnInit() {
  }

}
