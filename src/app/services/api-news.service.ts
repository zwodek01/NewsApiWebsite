import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiNewsService {

  constructor(private http: HttpClient) { }

  getFirstArticle(size, numberPage, country, category) {
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=f7bf007ff7c44dc4b8ac8bbf4e979083&pageSize=${size}&page=${numberPage}`);
  }
}
