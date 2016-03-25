import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {User} from './user.component';
import {Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HTTPTestService {
  constructor(private _http: Http) { }

  getCurrentTime() {
    return this._http
      .get('http://localhost:8000/users/')
      .map(res => res.json());
  }

  //http://da

  postJSON(): Observable<User> {
    var json = JSON.stringify({
      "nom": "XX",
      "prenom": "YY",
      "age": 23
    });
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('http://localhost:8000/users/'
      , json,
      {
        headers: headers
      })
      .map(res => res.json());
  }
}
