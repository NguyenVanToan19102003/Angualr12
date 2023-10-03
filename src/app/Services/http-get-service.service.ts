import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpGetServiceService {

  private RestFullApi = 'http://localhost:3000';

  private RestFullApiRandom = 'https://randomuser.me/api/?results='

  private httpoptions = {
    headers : new  HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }

  constructor(private httpclient : HttpClient) { }

   // Get data
  public getcomment(): Observable<any> {
    const url = `${this.RestFullApi}/comments`;
    return this.httpclient.get<any>(url, this.httpoptions);

  }


  // Get Random data
  public getRamdomcomment(users : number = 1): Observable<any> {
    const url = `${this.RestFullApiRandom}` + users;
    return this.httpclient.get<any>(url, this.httpoptions);

  }

    //Post
    public postcomment(payload : any): Observable<any> {
      const url = `${this.RestFullApi}/comments`;
      console.log("Post Coment :", url);
      console.log("Post Coment : Payload ", payload);
      return this.httpclient.post<any>(url,payload, this.httpoptions);

    }
}
