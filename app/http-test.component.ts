import {Component} from 'angular2/core';
import {HTTPTestService} from './http-test.service';
import {User} from './user.component'
@Component({
  selector: 'http-test',
  template: `<button (click)="onTestGet()">Test GET : Request</button>
             <p>Output : {{getData}}</p>
             <button (click)="onTestPost()">Test POST : Request</button>
             <p>Output : {{postData}}</p>
              <h4 *ngIf="user">{{user.prenom}} {{user.nom}} {{user.age}}</h4>
  `, providers: [HTTPTestService]
})
export class HTTPTestComponent {
  getData: string;
  postData: string;
  user: User;
  constructor(private _httpServie: HTTPTestService) {

  }
  onTestGet() {
    this._httpServie.getCurrentTime()
      .subscribe(
      data => this.getData = JSON.stringify(data),
      error => alert(error.message),
      () => console.log("Finished")
      );
  }

  onTestPost() {
    this._httpServie.postJSON()
      .subscribe(
      data => {
        this.postData = JSON.stringify(data);
        this.user = data;
      },
      error => alert(error.message),
      () => console.log("Finished")
      );
  }
}
