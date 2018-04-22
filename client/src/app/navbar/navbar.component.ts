import { Component, OnInit } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  eng = 'en';
  esp = 'es';
  actualLanguage = this.eng;
  constructor( private translate: TranslateService) { }

  ngOnInit() {
  }
  changeLanguage(lang: string) {
    this.actualLanguage = lang;
    this.translate.setDefaultLang(lang);
  }
}
