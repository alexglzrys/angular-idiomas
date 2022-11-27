import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  languages: string[] = [];

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    // Recuperar el listado de idiomas soportados por la aplicación
    this.languages = this.languageService.languages;
  }

  changeLanguage(idioma: string) {
    this.languageService.changeLanguage(idioma);
  }

}
