import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }
  currentDate = new Date();

  getDayName() {
    let day = "";
    let today = this.currentDate.getDay();
    switch (today) {
      case 0:
        day = "Niedziela";
        break;
      case 1:
        day = "Poniedziałek";
        break;
      case 2:
        day = "Wtorek";
        break;
      case 3:
        day = "Środa";
        break;
      case 4:
        day = "Czwartek";
        break;
      case 5:
        day = "Piątek";
        break;
      case 6:
        day = "Sobota";
    }
    return day
  }
}
