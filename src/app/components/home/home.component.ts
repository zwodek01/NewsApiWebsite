import { Component, OnInit } from '@angular/core';
import { ApiNewsService } from '../../services/api-news.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private apiNewsService: ApiNewsService) { }

  news: any = { articles: [] };

  ngOnInit() {
    this.apiNewsService.getFirstArticle().subscribe((data) => {
      console.log(data)
      this.news = data
    })
  }

}
