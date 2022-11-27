import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Biblioteca de Traducción
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Factory para el cargador de idiomas, los cuales se consiguen haciendo peticiones http a sus archivos correspondientes
export function cargarArchivosIdiomaJson(http: HttpClient) {
  // Especificar ruta y extensión de archvo
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({                   // forRoot solo debe usarse en el módulo principal de la aplicación, forChild si se desea usar la traducción en módulos secundarios
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,               // Proveer el cargador de traducciones
        useFactory: (cargarArchivosIdiomaJson),   // La fabrica encargada de propocionar el archivo de idioma
        deps: [HttpClient]                      // La carga de archivos de idioma, depende del servicio de http
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
