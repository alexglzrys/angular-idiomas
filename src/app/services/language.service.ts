import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private _languages: string[] = [];

  // Exponer el listado de lenguajes soportados por la aplicación
  get languages() {
    return this._languages;
  }

  constructor(private translate: TranslateService) {
    // Establecer en el servicio de la librería, los idiomas soportados por toda la aplicación (debe coincidir con el nombre de los archivos JSON)
    this.translate.addLangs(['es', 'en']);
    // Recuperar el listado de lenguajes soportados por la aplicación
    this._languages = this.translate.getLangs();
  }

  changeLanguage(language: string) {
    // Establecer un nuevo lenguaje para la aplicación
    this.translate.use(language);
  }



}
