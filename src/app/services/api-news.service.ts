import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiNewsService {

  constructor(private http: HttpClient) { }

  getFirstArticle() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=pl&apiKey=f7bf007ff7c44dc4b8ac8bbf4e979083&pageSize=6');
  }
}
