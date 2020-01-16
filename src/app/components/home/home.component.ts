import { Component, OnInit } from '@angular/core';
import { ApiNewsService } from '../../services/api-news.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private apiNewsService: ApiNewsService) { }

  news = [];
spinner: boolean;
numberNews = 6;
numberPage = 1;
hideButton = true;


  ngOnInit() {
    this.apiNewsService.getFirstArticle(this.numberNews, this.numberPage).subscribe((data) => {
      this.news = data['articles']
      this.spinner = true;
      console.log(this.news)
    })
  }

  loadMoreNews() {
    ++this.numberPage
    this.apiNewsService.getFirstArticle(this.numberNews, this.numberPage).subscribe((data) => {
      data['articles'].forEach((article) => {
        this.news.push(article)
      })
          if(this.news.length > 25) {
      this.hideButton = false;
    }
    })
  }

}
