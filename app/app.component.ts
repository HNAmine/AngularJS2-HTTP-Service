import {Component} from 'angular2/core';
import {HTTPTestComponent} from './http-test.component';
@Component({
  selector: 'my-app',
  template: '<h1>Hello</h1><http-test></http-test>',
  directives: [HTTPTestComponent]
})
export class AppComponent { }
