import { Component, OnInit, HostListener } from '@angular/core';
import { ApiNewsService } from '../../services/api-news.service';
import { FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private apiNewsService: ApiNewsService, private fb: FormBuilder) { }

  news = [];
  spinner: boolean;
  numberNews = 6;
  numberPage = 1;
  hideButton: boolean;
  disabledSubmitButton: boolean = true;

  @HostListener('input') oninput() {

    if (this.countrySelect) {
      this.disabledSubmitButton = false;
    }
  }
  countrySelect = this.fb.group({
    'country': ['us', Validators.required],
    'category': ['general', Validators.required]
  })

  moreAccurateSearch = this.fb.group({

  })

  ngOnInit() {
    this.apiNewsService.getFirstArticle(this.numberNews, this.numberPage, this.countrySelect.value.country, this.countrySelect.value.category).subscribe((data) => {
      this.news = data['articles']
      this.spinner = true;
      this.hideButton = true;
    })
  }


  showArticle() {
    this.spinner = false;
    this.news = [];
    this.hideButton = false;
    this.apiNewsService.getFirstArticle(this.numberNews, this.numberPage, this.countrySelect.value.country, this.countrySelect.value.category).subscribe((data) => {
      this.news = data['articles']
      this.spinner = true;
      this.hideButton = true;
    })
  }

  showSearch() {
    this.spinner = false;
    this.news = [];
    this.hideButton = false;

  }

  loadMoreNews() {
    ++this.numberPage
    this.apiNewsService.getFirstArticle(this.numberNews, this.numberPage, this.countrySelect.value.country, this.countrySelect.value.category).subscribe((data) => {
      data['articles'].forEach((article) => {
        this.news.push(article)
      })
      if (this.news.length > 25) {
        this.hideButton = false;
      }
    })
  }

}
